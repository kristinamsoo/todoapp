async function kinnitaToo() {
    const todo = document.getElementById('toonimetus').value
    
    if (!todo) {
        alert('sisesta ülesande nimetus.')
        return
    }

    console.log('Saadan ülesande:', todo)

    const uusToo = {
        nimetus: todo,
        prioriteet: "madal", 
        kasTehtud: false
    }

    try {
        const response = await fetch('/api/tood', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(uusToo)
        })

        if (response.ok) {
            alert(todo + ' - ülesanne lisatud')
        } else {
            const errorData = await response.json();
            alert('Viga ülesande lisamisel: ' + (errorData.error || 'Tundmatu viga'))
            console.error('Serveri vastus:', errorData)
        }
    } catch (error) {
        console.error('Fetchi viga:', error);
        alert('Serveriga ühenduse loomine ebaõnnestus.')
    }
}