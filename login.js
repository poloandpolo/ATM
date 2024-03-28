const banco = [
    {
        nombre: "Carlos",
        cuenta: 123456,
        password: "123",
        saldo: 100,
        currency: "MXN",
        movimientos: []
    },
    {
        nombre: "Fernando",
        cuenta: 7891011,
        password: "123",
        saldo: 200,
        currency: "USD",
        movimientos: []
    }
]

const cuenta = document.querySelector("#login_cuenta")

const password = document.querySelector("#login_password")

const buttonLogin = document.querySelector("#buttonIngresar")

buttonLogin.addEventListener("click", function(e){
    e.preventDefault()
    const currentCuenta = cuenta.value
    const currentPassword = password.value
    let correctUser = null

    for (let i = 0; i < banco.length; i++) {

        const usuarioBb = banco[i]
        if (usuarioBb.cuenta === Number(currentCuenta) && usuarioBb.password === currentPassword){
            correctUser = usuarioBb
            break
        }

    } 
    if (correctUser){
        localStorage.setItem("correctUser", JSON.stringify(correctUser))
        window.location.href = "atm2.html"
    } else {
        alert("Revisa tus credenciales")
    }
})