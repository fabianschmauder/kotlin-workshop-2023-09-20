import React from "react";
import Cover from "../cover";
import TextLayout from "../text-layout";
import List from "../../atoms/list";
import ListItemSmall from "../../atoms/list-item-small";
const KoltinOptimization = [

    () => <Cover title="Kotlin Basics" subtitle={"Part 2"} />,

    () => <TextLayout
        title="Koltin"
        subtitle="Null Saftey"
        body={
            <List>

                <iframe src="https://pl.kotl.in/MDmzqd75e" style={{ width: '100%', minHeight: '300px' }}></iframe>

                <a href="https://kotlinlang.org/docs/basic-syntax.html#nullable-values-and-null-checks">Doc</a>
            </List>
        }
    />,
    () => <TextLayout
        title="Koltin"
        subtitle="Default values, Named arguments"
        body={
            <List>
                <iframe src="https://pl.kotl.in/Tn9rjrTFb" style={{ width: '100%', minHeight: '300px' }}></iframe>
                <a href="https://kotlinlang.org/docs/functions.html#default-arguments">Doc</a>
            </List>
        }
    />
    , () => <TextLayout
        title="Koltin"
        subtitle="Extension Functions"
        body={
            <List>
                <iframe src="https://pl.kotl.in/dybPazJeb" style={{ width: '100%', minHeight: '300px' }}></iframe>
                <a href="https://kotlinlang.org/docs/extensions.html#extension-functions">Doc</a>
            </List>
        }
    />,
    () => <TextLayout
        title="Koltin"
        subtitle="Multi line Strings"
        body={
            <List>
                <iframe src="https://pl.kotl.in/Qm5DoO9mX?from=2&to=8" style={{ width: '100%', minHeight: '300px' }}></iframe>
                <a href="https://kotlinlang.org/docs/java-to-kotlin-idioms-strings.html#use-multiline-strings">Doc</a>
            </List>
        }
    />,



    () => <TextLayout
        title="Koltin"
        subtitle="Post"
        body={
            <List>
                <iframe src="https://pl.kotl.in/YRvXNbIMc" style={{ width: '100%', minHeight: '300px' }}></iframe>
            </List>
        }
    />,
    () => <TextLayout
        title="Koltin"
        subtitle="Aufgabe"
        body={
            <List>
                <ListItemSmall component="li">
                    1. Füge einen Post endpunkt hinzu
                </ListItemSmall>
                <ListItemSmall component="li">
                    2. Füge eine validierung hinzu
                </ListItemSmall>

            </List>
        }
    />,

    () => <TextLayout
        title="Koltin"
        subtitle="If"
        body={
            <List>
                <iframe src="https://pl.kotl.in/Dp3DVMmS1?from=3&to=12" style={{ width: '100%', minHeight: '300px' }}></iframe>
                <a href="https://kotlinlang.org/docs/control-flow.html#if-expression">Doc</a>
            </List>
        }
    />,
    () => <TextLayout
        title="Koltin"
        subtitle="Enum"
        body={
            <List>
                <iframe src="https://pl.kotl.in/AKIY44csv" style={{ width: '100%', minHeight: '300px' }}></iframe>
            </List>
        }
    />, () => <TextLayout
        title="Koltin"
        subtitle="When"
        body={
            <List>
                <iframe src="https://pl.kotl.in/97h-NGr_m?from=4&to=10" style={{ width: '100%', minHeight: '300px' }}></iframe>
                <a href="https://kotlinlang.org/docs/control-flow.html#when-expression">Doc</a>
            </List>
        }
    />, () => <TextLayout
        title="Koltin"
        subtitle="loops"
        body={
            <List>
                <iframe src="https://pl.kotl.in/Eb1k1ByFE?from=2&to=6" style={{ width: '100%', minHeight: '300px' }}></iframe>
                <a href="https://kotlinlang.org/docs/control-flow.html#for-loops">Doc</a>
            </List>
        }
    />, () => <TextLayout
        title="Koltin"
        subtitle="Ranges"
        body={
            <List>
                <iframe src="https://pl.kotl.in/TXkE1fOTk" style={{ width: '100%', minHeight: '300px' }}></iframe>
                <a href="https://kotlinlang.org/docs/kotlin-tour-control-flow.html#ranges">Doc</a>
            </List>
        }
    />,

    () => <TextLayout
        title="Koltin"
        subtitle="Aufgabe"
        body={
            <List>
                <ListItemSmall component="li">
                    1. Erweitere das Produkt um ein enum für Kategorie
                </ListItemSmall>

                <ListItemSmall component="li">
                    2. Erweitere das Produkt um ein int wert (z.b. haltbarkeit)
                </ListItemSmall>

                <ListItemSmall component="li">
                    3. füge eine validierung hinzu. 
                    Wenn der int wert kleine 0 schmeiss einen Fehler, zwischen 0 und 100, größer 100 schmeiße einen Fehler
                </ListItemSmall>


                <ListItemSmall component="li">
                    4. Nutze eine for loop um beim start des Server 50 Produkte hinzu zufügen
                </ListItemSmall>
            </List>
        }
    />,

    () => <TextLayout
        title="Koltin"
        subtitle="Infix"
        body={
            <List>
                <iframe src="https://pl.kotl.in/AWxEeoSG5" style={{ width: '100%', minHeight: '300px' }}></iframe>
                <a href="https://kotlinlang.org/docs/functions.html#infix-notation">Doc</a>
            </List>
        }
    />,
    () => <TextLayout
        title="Koltin"
        subtitle="Aufgabe"
        body={
            <List>
                <ListItemSmall component="li">
                    1. Erweitere dein Produkt um eine infix funktion
                </ListItemSmall>

            </List>
        }
    />,
    () => <TextLayout
        title="Koltin"
        subtitle="Map"
        body={
            <List>
                <iframe src="https://pl.kotl.in/kq5ch9v0p" style={{ width: '100%', minHeight: '300px' }}></iframe>
                <a href="https://kotlinlang.org/docs/kotlin-tour-collections.html#map">Doc</a>
            </List>
        }
    />,
    () => <TextLayout
        title="Koltin"
        subtitle="Aufgabe"
        body={
            <List>
                <ListItemSmall component="li">
                    1. schreibe eine funktion welche Produkte nach ihrer Kategorie in eine map und list sortiert und über einen endpunkt zurück gibt
                </ListItemSmall>

            </List>
        }
    />,
    () => <TextLayout
        title="Koltin"
        subtitle="Typealias"
        body={
            <List>
                <iframe src="https://pl.kotl.in/2Tu6JtVx-" style={{ width: '100%', minHeight: '300px' }}></iframe>
               
            </List>
        }
    />,
    () => <TextLayout
        title="Koltin"
        subtitle="Aufgabe"
        body={
            <List>
                <ListItemSmall component="li">
                    1. Nutze type alias für die Map und List der Produkte
                </ListItemSmall>

            </List>
        }
    />,

    () => <Cover title="Kotlin" subtitle={"JPA"} />,

    () => <TextLayout
        title="Koltin"
        subtitle="JPA"
        body={
            <List>

                <iframe src="https://pl.kotl.in/VeqSprVLP" style={{ width: '100%', minHeight: '300px' }}></iframe>

            </List>
        }
    />,
    () => <TextLayout
        title="Koltin"
        subtitle="Aufgabe"
        body={
            <List>
                <ListItemSmall component="li">
                    1. Migriere das Produkt zu einer Entity
                </ListItemSmall>

            </List>
        }
    />,
    () => <Cover title="Kotlin" subtitle={"Coroutines"} />,

    () => <TextLayout
        title="Koltin"
        subtitle="Coroutines"
        body={
            <List>

                <iframe src="https://pl.kotl.in/lCUuwTYHc" style={{ width: '100%', minHeight: '300px' }}></iframe>

            </List>
        }
    />,() => <TextLayout
        title="Coroutines"
        subtitle="Suspend"
        body={
            <List>

                <iframe src="https://pl.kotl.in/mAPYBhmVH" style={{ width: '100%', minHeight: '300px' }}></iframe>

            </List>
        }
    />,() => <TextLayout
        title="Coroutines"
        subtitle="light weight"
        body={
            <List>

                <iframe src="https://pl.kotl.in/GZu6r67VB" style={{ width: '100%', minHeight: '300px' }}></iframe>

            </List>
        }
    />,() => <TextLayout
        title="Coroutines"
        subtitle="light weight"
        body={
            <List>

                <iframe src="https://pl.kotl.in/bU0SJ55zX" style={{ width: '100%', minHeight: '300px' }}></iframe>

            </List>
        }
    />,
    () => <TextLayout
        title="Coroutines"
        subtitle="Spring"
        body={
            <List>

                <iframe src="https://pl.kotl.in/JiYMKwZ3_" style={{ width: '100%', minHeight: '300px' }}></iframe>
                <a href="https://www.baeldung.com/kotlin/spring-boot-kotlin-coroutines">Doc</a>
         
            </List>
        }
    />,
    () => <TextLayout
        title="Coroutines"
        subtitle="async"
        body={
            <List>
                <iframe src="https://pl.kotl.in/OCdnphWaP?from=6&to=11" style={{ width: '100%', minHeight: '300px' }}></iframe>
                <a href="https://kotlinlang.org/docs/composing-suspending-functions.html#concurrent-using-async">Doc</a>
         
            </List>
        }
    />,
    () => <TextLayout
        title="Koltin"
        subtitle="Aufgabe"
        body={
            <List>

                <ListItemSmall component="li">
                    1. Schreibe eine funktion die 100_000 threads startet
                </ListItemSmall>

                <ListItemSmall component="li">
                    2. Schreibe eine funktion die 100_000 couroutines startet
                </ListItemSmall>

                <ListItemSmall component="li">
                    3. Nutze suspend für deine endpunkte
                </ListItemSmall>

                <ListItemSmall component="li">
                    4. füge ein nachrichten versenden beim speichern ein
                </ListItemSmall>
            </List>
        }
    />,
    () => <Cover title="Kotlin" subtitle={"Migration"} />,
    () => <TextLayout
        title="Koltin"
        subtitle="Aufgabe"
        body={
            <List>

                <ListItemSmall component="li">
                    1. Erweitere folgendes projekt um einen endpunkt mit Kotlin 
                    <a href="https://github.com/syqu22/spring-boot-shop-sample">GitHub</a>
                </ListItemSmall>


                <ListItemSmall component="li">
                    2. Migriere teile des shops 
                  
                </ListItemSmall>
                
            </List>
        }
    />,
    () => <Cover title="Kotlin" subtitle={"ktor"} />,
    () => <TextLayout
        title="Koltin"
        subtitle="Aufgabe"
        body={
            <List>

                <ListItemSmall component="li">
                    1. schreibe den shop mit ktor
                </ListItemSmall>
                
            </List>
        }
    />,
];

export default KoltinOptimization;
