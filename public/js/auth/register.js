
export function registerFunc(serialized) {

    return new Promise((resolve, reject) => {
        fetch('/auth/local/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            body: serialized
        }).then(response => response.json())
        .then(data => {
            if (data.success) {
                return resolve(data.message);
            }
            return reject(new Error(data.errorMessage));
        }).catch(err => {
            return reject(new Error("Something went wrong, try again please"));
        })
    });
}

export function showCloseButtonAlert() {
    const closeTimeout = setTimeout(() => {
        document.querySelector('.error_message').classList.add('d-none');
    }, 5000);
    alertMessageClose((removed) => {
        if (removed) {
            clearTimeout(closeTimeout);
        }
    })
}

export function alertMessageClose(cb) {
    document.querySelector('.error_message').querySelector('.close')
        .addEventListener('click', (e) => {
            document.querySelector('.error_message').classList.add('d-none');
            return cb(true);
        }); 
}

export function showCloseButtonSuccess() {
    const closeTimeout = setTimeout(() => {
        document.querySelector('.success_message').classList.add('d-none');
        window.location.href = "#login";
    }, 5000);
    alertMessageClose((removed) => {
        if (removed) {
            clearTimeout(closeTimeout);
            window.location.href = "#login";
        }
    })
}