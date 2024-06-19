import { useState } from "react";
import styles from "./OrbSkill.module.css";
import classnames from "classnames";
import OrbSkills from "./OrbSkills.json";
import Characters from "../Characters.json";

export default function OrbSkill() {
  const characters: {[key: string]: string[]} = Characters;
  const orbSkills: {[key: string]: string} = OrbSkills;

  return (
    <main>
      <h1>オーブスキル取得状況</h1>
      <div>
        <div className={styles["header-row"]}>
          <div></div>
          <div></div>
          {
            Object.keys(orbSkills).map((skill: string, index: number) => {
              return (
                <div key={index} className={styles["header-column"]}>{orbSkills[skill]}</div>
              );
            })
          }
        </div>
          {
            Object.keys(characters).map((butai: string, butaiindex: number) => {
              return (
                <div key={butaiindex} className={styles["troops-row"]}>
                  <div className={styles["troops-name"]}>{butai}</div>
                  {
                    characters[butai].map((character: string, characterIndex: number) => {
                      return (
                        <div className={classnames(styles["character-row"])} >
                          <div key={characterIndex} className={styles["character-name"]}>{character}</div>
                          {
                            Object.keys(orbSkills).map((skill: string, skillIndex: number) => {
                              return (
                                <div key={skillIndex} className={styles["skill-checkbox-row"]}>
                                  {character !== "" &&
                                    <>
                                      <label
                                        htmlFor={`${butai}-${character}-${skill}`}
                                        className={styles["skill-label"]}
                                      >
                                        {orbSkills[skill]}
                                      </label>
                                      <input type="checkbox" id={`${butai}-${character}-${skill}`} />
                                    </>
                                  }
                                </div>
                              );
                            })
                          }
                        </div>
                      );
                    })
                  }
                </div>
              );
            })
          }
      </div>
    </main>
  );
}
