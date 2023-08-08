import React from "react";
import styles from "./app.module.css";
import Modal from "./Modal";
import { FaBarsStaggered } from "react-icons/fa6";
import { atom, useAtom } from "jotai";

const modalAtom = atom(true);

export default function App() {
  const [modal, setModal] = useAtom(modalAtom);
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.close_button} onClick={() => setModal(val => !val)}>
            <FaBarsStaggered />
          </div>
          {modal && <Modal />}
        </div>
      </div>
    </>
  );
}
