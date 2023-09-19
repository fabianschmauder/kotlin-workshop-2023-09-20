import React from "react";
import Cover from "../cover";
import TextLayout from "../text-layout";
import List from "../../atoms/list";
import ListItemSmall from "../../atoms/list-item-small";

const KoltinSpring = [
    
    () => <Cover title="Spring Boot" subtitle={"Koltin"} />,
   
    () => <TextLayout
        title="Koltin"
        subtitle="Setup"
        body={
          <div>
            <List>
                <ListItemSmall component="li">
                  1. Spring Boot initializr
                </ListItemSmall>
                <ListItemSmall component="li">
                  2. Select: Maven, Kotlin, v 3.1.3, java 17
                </ListItemSmall> 
                <ListItemSmall component="li"> 
                  2. Dependencies: Spring Web
                </ListItemSmall>
           </List>
           <a href="https://start.spring.io/">initializr</a>
           </div>
        }
    />,
   
    () => <TextLayout
        title="Koltin"
        subtitle="REST Controller"
        body={
            <div>
                <ListItemSmall component="li">
                  Products
                </ListItemSmall>
                <iframe src="https://pl.kotl.in/HBjVEhsCk" style={{ width: '100%' }}></iframe>
                <a href=" https://spring.io/guides/tutorials/spring-boot-kotlin/">Spring Boot Kotlin </a>
               
            </div>
        }
    />,
   
    () => <TextLayout
        title="Koltin"
        subtitle="Service"
        body={
            <div>
                <ListItemSmall component="li">
                  Products Service
                </ListItemSmall>
                <iframe src="https://pl.kotl.in/zi1eKh422" style={{ width: '100%', minHeight: '300px' }}></iframe>
            </div>
        }
    />,  
    () => <TextLayout
        title="Koltin"
        subtitle="Aufgabe Spring Boot"
        body={
           <List>
                <ListItemSmall component="li">
                  1. Erstelle ein Spring Boot Web Kotlin Projekt
                </ListItemSmall>
                 <ListItemSmall component="li">
                  2. Erstelle einen User Service, welcher eine liste von Usern verwaltet (Name reicht)
                </ListItemSmall>
                 <ListItemSmall component="li">
                  3. Erstelle einen User Controller, welcher eine Liste von Usern zurück gibt
                </ListItemSmall>
                 <ListItemSmall component="li">
                  4. Bonus: Nutze eine User Klasse mit Id und Name
                </ListItemSmall>
           </List>
        }
    />,
    () => <Cover title="Testing" subtitle={"Koltin"} />,
    () => <TextLayout
        title="Koltin"
        subtitle="filter"
        body={
            <List>
          
                <iframe src="https://pl.kotl.in/_HiofvWzn?from=2&to=7" style={{ width: '100%', minHeight: '300px' }}></iframe>
                <a href="https://kotlinlang.org/docs/idioms.html#filter-a-list">Dokumentation</a>
            </List>
        }
    />,
    () => <TextLayout
        title="Koltin"
        subtitle="JUnit"
        body={
            <List>
          
                <iframe src="https://pl.kotl.in/zR8w07Omb" style={{ width: '100%', minHeight: '300px' }}></iframe>
                <a href="https://kotlinlang.org/docs/jvm-test-using-junit.html#run-a-test">Dokumentation</a>
            </List>
        }
    />,
    () => <TextLayout
        title="Koltin"
        subtitle="Integrationtest"
        body={
            <List>
                <iframe src="https://pl.kotl.in/cd8_-d0V1" style={{ width: '100%', minHeight: '300px' }}></iframe>
                <a href="https://www.baeldung.com/kotlin/spring-boot-testing">Dokumentation</a>
            </List>
        }
    />,
    () => <TextLayout
        title="Koltin"
        subtitle="WebMVC"
        body={
            <List>
                <iframe src="https://pl.kotl.in/E2kb_uB1c" style={{ width: '100%', minHeight: '300px' }}></iframe>
            </List>
        }
    />,
   // () => <TextLayout
     //   title="Koltin"
      //  subtitle="kmock"
       // body={
        //    <List>
         // 
          //      <iframe src="https://pl.kotl.in/zR8w07Omb" style={{ width: '100%', minHeight: '300px' }}></iframe>
           //     <a href="www.test.de">Dokumentation</a>
           // </List>
       // }
    ///>


];

export default KoltinSpring;
