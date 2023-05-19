import { addDoc, collection } from "@firebase/firestore"
import { firestore } from "./firebase"
const handleSubmit = (namedata,emaildata,phonedata,msgdata) => {
    const ref = collection(firestore, "contactform") // Firebase creates this automatically
    let data = {
        name: namedata,
        email:emaildata,
        phone:phonedata,
        msg:msgdata

    }

    try {
        addDoc(ref, data)
        document.getElementById('msgsent').innerHTML = 'Sent';

    } catch (err) {
        console.log(err)
        document.getElementById('msgsent').innerHTML = 'Not Sent';

    }
}

export default handleSubmit