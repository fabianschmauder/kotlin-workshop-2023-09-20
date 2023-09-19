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
    />, () => <TextLayout
        title="Koltin"
        subtitle="If"
        body={
            <List>
                <iframe src="https://pl.kotl.in/Dp3DVMmS1?from=3&to=12" style={{ width: '100%', minHeight: '300px' }}></iframe>
                <a href="https://kotlinlang.org/docs/control-flow.html#if-expression">Doc</a>
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
    />,() => <TextLayout
        title="Koltin"
        subtitle="loops"
        body={
            <List>
                <iframe src="https://pl.kotl.in/Eb1k1ByFE?from=2&to=6" style={{ width: '100%', minHeight: '300px' }}></iframe>
                <a href="https://kotlinlang.org/docs/control-flow.html#for-loops">Doc</a>
            </List>
        }
    />,() => <TextLayout
        title="Koltin"
        subtitle="Ranges"
        body={
            <List>
                <iframe src="https://pl.kotl.in/TXkE1fOTk" style={{ width: '100%', minHeight: '300px' }}></iframe>
                <a href="https://kotlinlang.org/docs/kotlin-tour-control-flow.html#ranges">Doc</a>
            </List>
        }
    />,  () => <TextLayout
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
                  1. Finde anwendungsfälle für die gezeigten Beispiele und setzte diese im Shop um
                </ListItemSmall>
                
           </List>
        }
    />

];

export default KoltinOptimization;
