import React from "react";
import Cover from "../cover";
import TextLayout from "../text-layout";
import List from "../../atoms/list";
import ListItemSmall from "../../atoms/list-item-small";
const KotlinOptimization = [

    () => <Cover title="Kotlin Basics" subtitle={"Part 2"} />,

    () => <TextLayout
        title="Kotlin"
        subtitle="Null Saftey"
        body={
            <List>

                <iframe src="https://pl.kotl.in/MDmzqd75e" style={{ width: '100%', minHeight: '300px' }}></iframe>

                <a href="https://kotlinlang.org/docs/basic-syntax.html#nullable-values-and-null-checks">Doc</a>
            </List>
        }
    />,
    () => <TextLayout
        title="Kotlin"
        subtitle="Default values, Named arguments"
        body={
            <List>
                <iframe src="https://pl.kotl.in/Tn9rjrTFb" style={{ width: '100%', minHeight: '300px' }}></iframe>
                <a href="https://kotlinlang.org/docs/functions.html#default-arguments">Doc</a>
            </List>
        }
    />
    , () => <TextLayout
        title="Kotlin"
        subtitle="Extension Functions"
        body={
            <List>
                <iframe src="https://pl.kotl.in/dybPazJeb" style={{ width: '100%', minHeight: '300px' }}></iframe>
                <a href="https://kotlinlang.org/docs/extensions.html#extension-functions">Doc</a>
            </List>
        }
    />,
    () => <TextLayout
        title="Kotlin"
        subtitle="Multi line Strings"
        body={
            <List>
                <iframe src="https://pl.kotl.in/Qm5DoO9mX?from=2&to=8" style={{ width: '100%', minHeight: '300px' }}></iframe>
                <a href="https://kotlinlang.org/docs/java-to-kotlin-idioms-strings.html#use-multiline-strings">Doc</a>
            </List>
        }
    />,



    () => <TextLayout
        title="Kotlin"
        subtitle="Post"
        body={
            <List>
                <iframe src="https://pl.kotl.in/YRvXNbIMc" style={{ width: '100%', minHeight: '300px' }}></iframe>
            </List>
        }
    />,
    () => <TextLayout
        title="Kotlin"
        subtitle="Excercise"
        body={
            <List>
                <ListItemSmall component="li">
                    1. Add a post endpoint
                </ListItemSmall>
                <ListItemSmall component="li">
                    2. Add a validation
                </ListItemSmall>

            </List>
        }
    />,

    () => <TextLayout
        title="Kotlin"
        subtitle="If"
        body={
            <List>
                <iframe src="https://pl.kotl.in/Dp3DVMmS1?from=3&to=12" style={{ width: '100%', minHeight: '300px' }}></iframe>
                <a href="https://kotlinlang.org/docs/control-flow.html#if-expression">Doc</a>
            </List>
        }
    />,
    () => <TextLayout
        title="Kotlin"
        subtitle="Enum"
        body={
            <List>
                <iframe src="https://pl.kotl.in/AKIY44csv" style={{ width: '100%', minHeight: '300px' }}></iframe>
            </List>
        }
    />, () => <TextLayout
        title="Kotlin"
        subtitle="When"
        body={
            <List>
                <iframe src="https://pl.kotl.in/97h-NGr_m?from=4&to=10" style={{ width: '100%', minHeight: '300px' }}></iframe>
                <a href="https://kotlinlang.org/docs/control-flow.html#when-expression">Doc</a>
            </List>
        }
    />, () => <TextLayout
        title="Kotlin"
        subtitle="loops"
        body={
            <List>
                <iframe src="https://pl.kotl.in/Eb1k1ByFE?from=2&to=6" style={{ width: '100%', minHeight: '300px' }}></iframe>
                <a href="https://kotlinlang.org/docs/control-flow.html#for-loops">Doc</a>
            </List>
        }
    />, () => <TextLayout
        title="Kotlin"
        subtitle="Ranges"
        body={
            <List>
                <iframe src="https://pl.kotl.in/TXkE1fOTk" style={{ width: '100%', minHeight: '300px' }}></iframe>
                <a href="https://kotlinlang.org/docs/kotlin-tour-control-flow.html#ranges">Doc</a>
            </List>
        }
    />,

    () => <TextLayout
        title="Kotlin"
        subtitle="Excercise"
        body={
            <List>
                <ListItemSmall component="li">
                    1. Add an enum for category to the product
                </ListItemSmall>

                <ListItemSmall component="li">
                    2. Add an int value to the product (e.g. shelf life)
                </ListItemSmall>

                <ListItemSmall component="li">
                    3. add a validation. 
                  If the int value is less than 0 throw an error, between 0 and 100, greater than 100 throw an error
                </ListItemSmall>


                <ListItemSmall component="li">
                    4. Use a for loop to add 50 products at the start of the server
                </ListItemSmall>
            </List>
        }
    />,

    () => <TextLayout
        title="Kotlin"
        subtitle="Infix"
        body={
            <List>
                <iframe src="https://pl.kotl.in/AWxEeoSG5" style={{ width: '100%', minHeight: '300px' }}></iframe>
                <a href="https://kotlinlang.org/docs/functions.html#infix-notation">Doc</a>
            </List>
        }
    />,
    () => <TextLayout
        title="Kotlin"
        subtitle="Excercise"
        body={
            <List>
                <ListItemSmall component="li">
                    1. Add an infix function to your product
                </ListItemSmall>

            </List>
        }
    />,
    () => <TextLayout
        title="Kotlin"
        subtitle="Map"
        body={
            <List>
                <iframe src="https://pl.kotl.in/kq5ch9v0p" style={{ width: '100%', minHeight: '300px' }}></iframe>
                <a href="https://kotlinlang.org/docs/kotlin-tour-collections.html#map">Doc</a>
            </List>
        }
    />,
    () => <TextLayout
        title="Kotlin"
        subtitle="Excercise"
        body={
            <List>
                <ListItemSmall component="li">
                    1. write a function that sorts products by their category into a map and list and returns them via an endpoint
                </ListItemSmall>

            </List>
        }
    />,
    () => <TextLayout
        title="Kotlin"
        subtitle="Typealias"
        body={
            <List>
                <iframe src="https://pl.kotl.in/2Tu6JtVx-" style={{ width: '100%', minHeight: '300px' }}></iframe>
               
            </List>
        }
    />,
    () => <TextLayout
        title="Kotlin"
        subtitle="Excercise"
        body={
            <List>
                <ListItemSmall component="li">
                    1. Use type alias for the map and list of products
                </ListItemSmall>

            </List>
        }
    />,

    () => <Cover title="Kotlin" subtitle={"JPA"} />,

    () => <TextLayout
        title="Kotlin"
        subtitle="JPA"
        body={
            <List>

                <iframe src="https://pl.kotl.in/VeqSprVLP" style={{ width: '100%', minHeight: '300px' }}></iframe>

            </List>
        }
    />,
    () => <TextLayout
        title="Kotlin"
        subtitle="Excercise"
        body={
            <List>
                <ListItemSmall component="li">
                    1. Migrate the product to an entity
                </ListItemSmall>

            </List>
        }
    />,
    () => <Cover title="Kotlin" subtitle={"MockK"} />,
    () => <TextLayout
        title="Kotlin"
        subtitle="MockK start"
        body={
            <List>

                <iframe src="https://pl.kotl.in/qbHvxkdDX" style={{ width: '100%', minHeight: '300px' }}></iframe>
                <a href="https://mockk.io/">Doc</a>
         
            </List>
        }
    />,

    () => <TextLayout
        title="Kotlin"
        subtitle="MockK spring"
        body={
            <List>

                <iframe src="https://pl.kotl.in/kAKVmRUQg" style={{ width: '100%', minHeight: '300px' }}></iframe>
                <a href="https://spring.io/guides/tutorials/spring-boot-kotlin/">Doc</a>
            </List>
        }
    />,


    () => <Cover title="Kotlin" subtitle={"Coroutines"} />,

    () => <TextLayout
        title="Kotlin"
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
        subtitle="scope"
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
        title="Kotlin"
        subtitle="Excercise"
        body={
            <List>

                <ListItemSmall component="li">
                    1. Write a function that starts 100_000 threads
                </ListItemSmall>

                <ListItemSmall component="li">
                    2. Write a function that starts 100_000 couroutines
                </ListItemSmall>

                <ListItemSmall component="li">
                    3. Use suspend for your endpoints
                </ListItemSmall>

                <ListItemSmall component="li">
                    4. Add a send message when saving
                </ListItemSmall>
            </List>
        }
    />,
    () => <Cover title="Kotlin" subtitle={"Migration"} />,
    () => <TextLayout
        title="Kotlin"
        subtitle="Excercise"
        body={
            <List>

                <ListItemSmall component="li">
                    1.  Add an endpoint to the following project with Kotlin  
                    <a href="https://github.com/syqu22/spring-boot-shop-sample">GitHub</a>
                </ListItemSmall>


                <ListItemSmall component="li">
                    2. Migrate parts of the store  
                  
                </ListItemSmall>
                
            </List>
        }
    />,
    () => <Cover title="Kotlin" subtitle={"ktor"} />,
    () => <TextLayout
        title="Kotlin"
        subtitle="Excercise"
        body={
            <List>

                <ListItemSmall component="li">
                    1. Write the store with ktor
                </ListItemSmall>
                
            </List>
        }
    />,
];

export default KotlinOptimization;
