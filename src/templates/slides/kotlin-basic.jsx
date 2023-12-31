import React from "react";
import Cover from "../cover";

import TextLayout from "../text-layout";
import List from "../../atoms/list";
import ListItemSmall from "../../atoms/list-item-small";

const KotlinBasic = [

    () => <Cover title="Basic" subtitle={"Kotlin"} />,
    () => <TextLayout
        title="Kotlin"
        subtitle="Warum Kotlin"
        body={
            <List>
                <ListItemSmall component="li">
                    - Weiterentwicklung von Java sehr langsam
                </ListItemSmall>
                <ListItemSmall component="li">
                    - Weniger Boilerplate Code
                </ListItemSmall>
                <ListItemSmall component="li">
                    - Besser Wartbarkeit
                </ListItemSmall>
                <ListItemSmall component="li">
                    - Wir können nach Java bytecode oder auch JavaScript übersetzen
                </ListItemSmall>
                <ListItemSmall component="li">
                    - Wir können das Java Ökosystem nutzen (z.B. Spring Boot)
                </ListItemSmall>
                <ListItemSmall component="li">
                    - Wir können schrittweise von Java Migrieren
                </ListItemSmall>
            </List>
        }
    />,
    () => <TextLayout
        title="Kotlin"
        subtitle="Hello World"
        body={
            <div>
                <iframe src="https://pl.kotl.in/RvhqwG873" style={{ width: '100%' }}></iframe>
                <a href="https://kotlinlang.org/docs/home.html">Doc</a>
            </div>
        }
    />, () => <TextLayout
        title="Kotlin"
        subtitle="Functions"
        body={
            <div>
                <ListItemSmall component="li">
                    Explizite Typangabe
                </ListItemSmall>
                <iframe src="https://pl.kotl.in/R11jwUxSK?from=1&to=3" style={{ width: '100%' }}></iframe>
                <ListItemSmall component="li">
                    Implizite Typangabe
                </ListItemSmall>
                <iframe src="https://pl.kotl.in/KQrqd_CGc?from=1&to=1" style={{ width: '100%' }}></iframe>
                <a href="https://kotlinlang.org/docs/basic-syntax.html#functions">Doc</a>
            </div>
        }
    />,
    () => <TextLayout
        title="Kotlin"
        subtitle="Variable"
        body={
            <List>
                <iframe src="https://pl.kotl.in/qGc077xV2" style={{ width: '100%' }}></iframe>
                <a href="https://kotlinlang.org/docs/basic-syntax.html#variables">Doc</a>
            </List>
        
        }
    />,
    () => <TextLayout
        title="Kotlin"
        subtitle="Basic Types"
        body={
            <div>
                 <ListItemSmall component="li">
                    Explizite Typangabe
                </ListItemSmall>
            <iframe src="https://pl.kotl.in/jiy9jOm6d?from=2&to=6" style={{ width: '100%' }}></iframe>
            <ListItemSmall component="li">
                    Implizite Typangabe
                </ListItemSmall>
                <iframe src="https://pl.kotl.in/BZGkv-RCC?from=2&to=6" style={{ width: '100%' }}></iframe>
                <a href="https://kotlinlang.org/docs/basic-syntax.html#functions">Doc</a>
        </div>
        }
    />,  () => <TextLayout
        title="Kotlin"
        subtitle="Classes"
        body={
           <div>
                <ListItemSmall component="li">
                    Class
                </ListItemSmall>
               <iframe src="https://pl.kotl.in/npb-7jP2i" style={{ width: '100%' }}></iframe>
               <a href="https://kotlinlang.org/docs/basic-syntax.html#creating-classes-and-instances">Doc</a>
               <ListItemSmall component="li">
                   Data Class
                </ListItemSmall>
               <iframe src="https://pl.kotl.in/BT6L5o-2e?from=1&to=1" style={{ width: '100%' }}></iframe>

               <a href="https://kotlinlang.org/docs/idioms.html">Doc</a>
           </div>
        }
    />,  () => <TextLayout
        title="Kotlin"
        subtitle="List"
        body={
           <div>
                <iframe src="https://pl.kotl.in/xmHajkkmH?from=2&to=9" style={{ width: '100%', height: '250px' }}></iframe>
                <a href="https://kotlinlang.org/docs/collections-overview.html#collection-types">Doc</a>
           </div>
        }
    />,  
    () => <TextLayout
        title="Kotlin"
        subtitle="Aufgabe"
        body={
           <List>
                <ListItemSmall component="li">
                  1. Erstelle eine User Klasse und überlege dir 3 Eigenschaften eines Users
                </ListItemSmall>
                 <ListItemSmall component="li">
                  2. Erstelle einen User Service, welcher eine liste von Nutzern verwaltet
                </ListItemSmall>
                 <ListItemSmall component="li">
                  3. Füge eine User add Methode hinzu
                </ListItemSmall>
                 <ListItemSmall component="li">
                  4. Füge eine list Users Methode hinzu
                </ListItemSmall>
                 <ListItemSmall component="li">
                  6. Bonus: Setlle sicher das die zurück gegebene Liste nich modifizierbar ist
                </ListItemSmall>
                 <ListItemSmall component="li">
                  7. Bonus: Füge eine remove User Methode hinzu
                </ListItemSmall>
           </List>
        }
    />


];

export default KotlinBasic;
