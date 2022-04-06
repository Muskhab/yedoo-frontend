import { useState } from "react";
import { useDispatch } from "react-redux";
import { editCafe } from "../../redux/features/cafe";
import styles from "./CafeInfo.module.css";

const CafeInfo = () => {
    const dispatch = useDispatch();

    const [cafeName, setCafeName] = useState("");
    const [cafeLogo, setCafeLogo] = useState(null);
    const [phone, setPhone] = useState("");
    const [mail, setMail] = useState("");
    const [address, setAddress] = useState("");
    const [info, setInfo] = useState("");

    const handleChangeImage = (e) => {
        setCafeLogo(e.target.files[0]);
    }

    const handleChangeName = (e) => {
        setCafeName(e.target.value);
    }

    const handleChangePhone = (e) => {
        setPhone(e.target.value);
    }

    const handleChangeMail = (e) => {
        setMail(e.target.value);
    }

    const handleChangeAddress = (e) => {
        setAddress(e.target.value);
    }

    const handleChangeInfo = (e) => {
        setInfo(e.target.value);
    }

    const handleSave = (cafeName, cafeLogo, phone, mail, address, info) => {
        console.log(cafeName, cafeLogo, phone, mail, address, info);
        dispatch(editCafe(cafeName, cafeLogo, phone, mail, address, info));

    }

    return (
        <div className={styles.infoContainer}>
            <div className={styles.info}>
                <div className={styles.infoblock}>
                    <label>1. Название организации</label>
                    <input placeholder="Введите имя" value={cafeName} onChange={(e) => handleChangeName(e)} />
                </div>
                <div className={styles.infoblock}>
                    <label>2. Изменить логотип</label>
                    <input type="file" onChange={(e) => handleChangeImage(e)} />
                </div>
                <div className={styles.infoblock}>
                    <label>3. Телефон</label>
                    <input placeholder="" onChange={(e) => handleChangePhone(e)} />
                </div>
                <div className={styles.infoblock}>
                    <label>4. Email</label>
                    <input placeholder="" onChange={(e) => handleChangeMail(e)} />
                </div>
                <div className={styles.infoblock}>
                    <label>5. Адрес организации</label>
                    <input placeholder="" onChange={(e) => handleChangeAddress(e)} />
                </div>
                <div className={styles.infoblock}>
                    <label>6. Доп. информация</label>
                    <input placeholder="" onChange={(e) => handleChangeInfo(e)} />
                </div>
                <div className={styles.btnSave}><button onClick={() => handleSave(cafeName, cafeLogo, phone, mail, address, info)}>Сохранить изменения</button></div>
            </div>
        </div>
    );
};

export default CafeInfo;