export function loginFunc(serialized) {

    return new Promise((resolve, reject) => {
        fetch('/auth/local/login', {
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
    })
}