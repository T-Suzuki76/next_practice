import { NextPage } from "next";
import Accordion from "../components/Accordion";
import Gallery from "../components/Gallery";
import Layout from "../components/layout/Layout";
import Modal from "../components/Modal";
import Slide from "../components/Slide";
import Tab from "../components/Tab/Tabs";
import styles from "../styles/practice.module.css"

const practice :NextPage =()=>{
    return(
        <Layout title={"Next-Practice｜practice"} isHeader={true} isFooter={true}>
            <section className={styles.practice}>
                <h2>Practice</h2>
                <p>*This page has been created for practice functional implementation.</p>
                <div>
                    <h3>Slideshow</h3>
                    <Slide/>
                </div>
                <div>
                    <h3>Gallary</h3>
                    <Gallery/>
                </div>
                <div>
                    <h3>Accordion Menu</h3>
                    <Accordion
                        question="Is This Accordion Menu"
                        answer="Yes, of course"
                        num={1}
                    />
                    <Accordion
                        question="Can I open or close this with '+' button?"
                        answer="Yes"
                        num={2}
                    />
                </div>
                <div>
                    <h3>Tab Menu</h3>
                    <Tab/>
                </div>
                <div>
                    <h3>Modal</h3>
                    <Modal/>
                </div>
            </section>
        </Layout>
    )
}

export default practice