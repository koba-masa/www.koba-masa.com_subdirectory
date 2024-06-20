import styles from "./OrbSkill.module.css";
import OrbSkills from "./OrbSkills.json";
import Characters from "../Characters.json";
import Troop from "./troop/Troop";


export default function OrbSkill() {
  const characters: {[key: string]: string[]} = Characters;
  const orbSkills: {[key: string]: string} = OrbSkills;

  return (
    <main>
      <h1>オーブスキル取得状況</h1>
      <div>
        <div className={styles["header"]}>
          <div className={styles["header-row"]}>
            <div></div>
            <div className={styles["header-skills"]}>
              {
                Object.keys(orbSkills).map((skill: string, index: number) => {
                  return (
                    <div key={index} className={styles["header-column"]}>{orbSkills[skill]}</div>
                  );
                })
              }
            </div>
          </div>
        </div>
        <div className={styles["body"]}>
          {
            Object.keys(characters).map((troop: string, troopIndex: number) => {
              return (
                <Troop key={troopIndex} troop_name={troop} characters={characters[troop]} skills={OrbSkills} />
              );
            })
          }
        </div>
      </div>
    </main>
  );
}
