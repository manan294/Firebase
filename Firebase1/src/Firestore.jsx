import { app } from "./firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getFirestore,
  updateDoc,
} from "firebase/firestore";

const db = getFirestore(app);

export default function Firestore() {
  const addData = () => {
    addDoc(collection(db, "Cities"), {
      name: "Delhi",
      pincode: 383315,
    })
      .then(() => console.log("Data Successfully Added"))
      .catch((Err) => console.log(Err));
  };

  const subDataAdd = () => {
    addDoc(collection(db, "Cities/bc2OWwFtM1Du8ASSFlTY/Places"), {
      sector: "Noida",
    })
      .then(() => console.log("Sub Data Added"))
      .catch((err) => console.log(err));
  };

  const deleteData = () => {
    const deleteDoc1 = doc(db, "Cities/bc2OWwFtM1Du8ASSFlTY");
    deleteDoc(deleteDoc1);
    console.log("Data Deleted");
  };

  const updateData = () => {
    const updateDoc1 = doc(db, "Cities", "4rx4OL00zInKbhjy6l7M");
    updateDoc(updateDoc1, {
      name: "Kolkata",
      pincode: 360061,
    });
    console.log("Updated Data");
  };

  return (
    <div>
      <button onClick={addData}>Add Data</button>
      <button onClick={subDataAdd}>Sub Data Add</button>
      <button onClick={deleteData}>Delete Data</button>
      <button onClick={updateData}>Update Data</button>
    </div>
  );
}
