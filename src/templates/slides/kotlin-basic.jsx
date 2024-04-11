import React from "react";
import Cover from "../cover";

import TextLayout from "../text-layout";
import List from "../../atoms/list";
import ListItemSmall from "../../atoms/list-item-small";

const KotlinBasic = [

    () => <Cover title="Basic" subtitle={"Kotlin"} />,
    () => <TextLayout
        title="Kotlin"
        subtitle="Why Kotlin?"
        body={
            <List>
                <ListItemSmall component="li">
                    - Development of Java very slow
                </ListItemSmall>
                <ListItemSmall component="li">
                    - Less Boilerplate Code
                </ListItemSmall>
                <ListItemSmall component="li">
                    - Better maintainability
                </ListItemSmall>
                <ListItemSmall component="li">
                    - We can translate to Java bytecode or JavaScript
                </ListItemSmall>
                <ListItemSmall component="li">
                    - We can use the Java ecosystem (e.g. Spring Boot)
                </ListItemSmall>
                <ListItemSmall component="li">
                    - We can migrate step by step from Java
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
                    Explicit type specification
                </ListItemSmall>
                <iframe src="https://pl.kotl.in/R11jwUxSK?from=1&to=3" style={{ width: '100%' }}></iframe>
                <ListItemSmall component="li">
                   Implicit type specification
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
                 Explicit type specification
                </ListItemSmall>
            <iframe src="https://pl.kotl.in/jiy9jOm6d?from=2&to=6" style={{ width: '100%' }}></iframe>
            <ListItemSmall component="li">
            Implicit type specification
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
        subtitle="Excercise"
        body={
           <List>
                <ListItemSmall component="li">
                  1. Create a user class and think about 3 properties of a user
                </ListItemSmall>
                 <ListItemSmall component="li">
                  2. Create a user service that manages a list of users
                </ListItemSmall>
                 <ListItemSmall component="li">
                  3. Add a user add method
                </ListItemSmall>
                 <ListItemSmall component="li">
                  4. Add a list users method
                </ListItemSmall>
                 <ListItemSmall component="li">
                  6. Bonus: Make sure that the returned list is not modifiable
                </ListItemSmall>
                 <ListItemSmall component="li">
                  7. Bonus: Add a remove user method
                </ListItemSmall>
           </List>
        }
    />


];

export default KotlinBasic;
