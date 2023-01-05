function getData(){
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let phoneNumber = document.getElementById("telp").value
    let subject = document.getElementById("subject").value
    let message = document.getElementById("message").value

    if(name == ""){
        return alert("Nama tidak boleh kosong")
    }else if(email == ""){
        return alert("Email tidak boleh kosong")
    }else if(phoneNumber == ""){
        return alert("Telepon tidak boleh kosong")
    }else if(subject == ""){
        return alert("Subject tidak boleh kosong")
    }else if(message == ""){
        return alert("Message tidak boleh kosong")
    }

    let emailReceiver = "salsabila.putri.fathiyah.tif20@polban.ac.id"

    let mailTo = document.createElement('a')
    mailTo.href = `mailto:${emailReceiver}?subject=${subject}&body=Hello nama saya ${name}, ${message}, nomor telepon saya ${phoneNumber}`
    mailTo.click()


}