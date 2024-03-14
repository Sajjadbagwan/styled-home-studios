"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import InfoIcon from "../../../../public/assets/images/question-mark.svg"
import styles from "./confirmPropertyDetailsForm.module.scss";

function ConfirmPropertyDetailsStep5() {
     
  return (
    <div className={styles.confirmPropertyDetailsStep5 + " commonSteps"}>
      <div className="formDiv">
        <div className="formDetails">           
            <h2>Step 5: Colours & Materials</h2>
            <p>Please tick below which are relevant to your property.</p>
            <div className="commonSection designStyle">
                <h3>Colours & Patterns</h3>
                <div className="checkboxDiv">
                    <div className="singleCheckbox">
                        <input id="silver" type="checkbox" name="silver"/>
                        <label className="form-control" htmlFor="silver">
                            Silver
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="teal" type="checkbox" name="teal"/>
                        <label className="form-control" htmlFor="teal">
                            Teal
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="black" type="checkbox" name="black"/>
                        <label className="form-control" htmlFor="black">
                            Black
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="grey" type="checkbox" name="grey"/>
                        <label className="form-control" htmlFor="grey">
                            Grey
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="neon" type="checkbox" name="neon"/>
                        <label className="form-control" htmlFor="neon">
                            Neon
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="tartan" type="checkbox" name="tartan"/>
                        <label className="form-control" htmlFor="tartan">
                            Tartan
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="red" type="checkbox" name="red"/>
                        <label className="form-control" htmlFor="red">
                            Red
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="blue" type="checkbox" name="blue"/>
                        <label className="form-control" htmlFor="blue">
                            Blue
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="animal" type="checkbox" name="animal"/>
                        <label className="form-control" htmlFor="animal">
                            Animal Print
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="botanical" type="checkbox" name="botanical"/>
                        <label className="form-control" htmlFor="botanical">
                            Botanical
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="cream" type="checkbox" name="cream"/>
                        <label className="form-control" htmlFor="cream">
                            Cream
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="neutral" type="checkbox" name="neutral"/>
                        <label className="form-control" htmlFor="neutral">
                            Neutral
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="taupe" type="checkbox" name="taupe"/>
                        <label className="form-control" htmlFor="taupe">
                            Taupe
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="magenta" type="checkbox" name="magenta"/>
                        <label className="form-control" htmlFor="magenta">
                            Magenta
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="green" type="checkbox" name="green"/>
                        <label className="form-control" htmlFor="green">
                            Green
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="geometric" type="checkbox" name="geometric"/>
                        <label className="form-control" htmlFor="geometric">
                            Geometric
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="brown" type="checkbox" name="brown"/>
                        <label className="form-control" htmlFor="brown">
                            Brown
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="gold" type="checkbox" name="gold"/>
                        <label className="form-control" htmlFor="gold">
                            Gold
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="pink" type="checkbox" name="pink"/>
                        <label className="form-control" htmlFor="pink">
                            Pink
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="white" type="checkbox" name="white"/>
                        <label className="form-control" htmlFor="white">
                            White
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="cyan" type="checkbox" name="cyan"/>
                        <label className="form-control" htmlFor="cyan">
                            Cyan
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="pastel" type="checkbox" name="pastel"/>
                        <label className="form-control" htmlFor="pastel">
                            Pastel
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="aquamarine" type="checkbox" name="aquamarine"/>
                        <label className="form-control" htmlFor="aquamarine">
                            Aquamarine
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="orange" type="checkbox" name="orange"/>
                        <label className="form-control" htmlFor="orange">
                            Orange
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="purple" type="checkbox" name="purple"/>
                        <label className="form-control" htmlFor="purple">
                            Purple
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="peach" type="checkbox" name="peach"/>
                        <label className="form-control" htmlFor="peach">
                            Peach
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="yellow" type="checkbox" name="yellow"/>
                        <label className="form-control" htmlFor="yellow">
                            Yellow
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="maroon" type="checkbox" name="maroon"/>
                        <label className="form-control" htmlFor="maroon">
                            Maroon
                        </label>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="commonSection designStyle">
                <h3>Materials</h3>
                <div className="checkboxDiv">
                    <div className="singleCheckbox">
                        <input id="bronze" type="checkbox" name="bronze"/>
                        <label className="form-control" htmlFor="bronze">
                            Bronze
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="brick" type="checkbox" name="brick"/>
                        <label className="form-control" htmlFor="brick">
                            Brick
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="glass" type="checkbox" name="glass"/>
                        <label className="form-control" htmlFor="glass">
                            Glass
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="tile" type="checkbox" name="tile"/>
                        <label className="form-control" htmlFor="tile">
                            Tile
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="plaster" type="checkbox" name="plaster"/>
                        <label className="form-control" htmlFor="plaster">
                            Plaster
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="terrazzo" type="checkbox" name="terrazzo"/>
                        <label className="form-control" htmlFor="terrazzo">
                            Terrazzo
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="linen" type="checkbox" name="linen"/>
                        <label className="form-control" htmlFor="linen">
                            Linen
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="brass" type="checkbox" name="brass"/>
                        <label className="form-control" htmlFor="brass">
                            Brass
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="concrete" type="checkbox" name="concrete"/>
                        <label className="form-control" htmlFor="concrete">
                            Concrete
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="leather" type="checkbox" name="leather"/>
                        <label className="form-control" htmlFor="leather">
                            Leather
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="rattan" type="checkbox" name="rattan"/>
                        <label className="form-control" htmlFor="rattan">
                            Rattan
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="plastic" type="checkbox" name="plastic"/>
                        <label className="form-control" htmlFor="plastic">
                            Plastic
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="clay" type="checkbox" name="clay"/>
                        <label className="form-control" htmlFor="clay">
                            Clay
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="silk" type="checkbox" name="silk"/>
                        <label className="form-control" htmlFor="silk">
                            Silk
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="chrome" type="checkbox" name="chrome"/>
                        <label className="form-control" htmlFor="chrome">
                            Chrome
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="wood" type="checkbox" name="wood"/>
                        <label className="form-control" htmlFor="wood">
                            Dark Wood
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="suede" type="checkbox" name="suede"/>
                        <label className="form-control" htmlFor="suede">
                            Suede
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="wallpaper" type="checkbox" name="wallpaper"/>
                        <label className="form-control" htmlFor="wallpaper">
                            Wallpaper
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="resin" type="checkbox" name="resin"/>
                        <label className="form-control" htmlFor="resin">
                            Resin
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="terracotta" type="checkbox" name="terracotta"/>
                        <label className="form-control" htmlFor="terracotta">
                            Terracotta
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="panelling" type="checkbox" name="panelling"/>
                        <label className="form-control" htmlFor="panelling">
                            Panelling
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="lightwood" type="checkbox" name="lightwood"/>
                        <label className="form-control" htmlFor="lightwood">
                            Light Wood
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="marble" type="checkbox" name="marble"/>
                        <label className="form-control" htmlFor="marble">
                            Marble
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="cemet" type="checkbox" name="cemet"/>
                        <label className="form-control" htmlFor="cemet">
                            Cemet
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="crystal" type="checkbox" name="crystal"/>
                        <label className="form-control" htmlFor="crystal">
                            Crystal
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="velvet" type="checkbox" name="velvet"/>
                        <label className="form-control" htmlFor="velvet">
                            Velvet
                        </label>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="button-container">
                <Link href="" className="save-come">Save Progress And Come Back Later</Link>
                <button aria-label="previous-btn" type="button" className="allBtn border">Previous Page</button>
                <button aria-label="next-btn" type="button" className="allBtn dark">Next</button>
            </div>          
        </div>
      </div>
    </div>
  );
}

export default ConfirmPropertyDetailsStep5;
