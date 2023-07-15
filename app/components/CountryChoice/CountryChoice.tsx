"use client";

import Image from "next/image";
import Noteblock from "../../assets/noteblock_3d.png";
import Czerwona from "../../assets/flaga_czerwona.png";
import Zielona from "../../assets/flaga_zielona.png";
import Fioletowa from "../../assets/flaga_fiolet.png";
import Niebieska from "../../assets/flaga_niebieska.png";
import styles from "./CountryChoice.module.scss";
import { useRouter } from "next/navigation";

const ContryChoice = () => {
  const router = useRouter();

  return (
    <section className={styles.countryChoiceGrid}>
      <figure
        className="bg-red"
        onClick={() => router.push("/cwiartki/czerwona")}
      >
        <div />
        <Image
          src={Czerwona}
          width={1000}
          height={1000}
          alt="Czerwona"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </figure>
      <figure
        className="bg-blue"
        onClick={() => router.push("/cwiartki/niebieska")}
      >
        <div />
        <Image
          src={Niebieska}
          width={1000}
          height={1000}
          alt="Niebieska"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </figure>
      <figure
        className="bg-green"
        onClick={() => router.push("/cwiartki/zielona")}
      >
        <div />
        <Image
          src={Zielona}
          width={1000}
          height={1000}
          alt="Zielona"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </figure>
      <figure
        className="bg-purple"
        onClick={() => router.push("/cwiartki/fioletowa")}
      >
        <div />
        <Image
          src={Fioletowa}
          width={1000}
          height={1000}
          alt="Fioletowa"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </figure>
      <div className={styles.noteblock}>
        <Image src={Noteblock} width={300} height={300} alt="Noteblock" />
        <h1 className="text-3xl font-bold">Wybierz jedno z czterech państw</h1>
      </div>
    </section>
  );
};

export default ContryChoice;
