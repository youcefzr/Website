@@ .. @@
 import { CornerDownRight, HelpCircle } from "lucide-react";
 import { Metadata } from "next";
 import Link from "next/link";
+import { motion } from "framer-motion";
 
 import { css } from "styled-system/css";
 import { flex } from "styled-system/patterns";
@@ .. @@
 export default function FrequentlyAskedQuestions() {
   const questions: {
     [category: string]: { question: string; answer: string }[];
   } = {
     General: [
       {
-        question: "Where can I get tools?",
+        question: "🔧 Where can I get tools?",
         answer:
           "Most of the tools are hosted on our <a class='underline' target=_blank href='https://github.com/ForzaMods'>GitHub</a> or this website.",
       },
       {
-        question: "How do I use the tools on console?",
+        question: "🎮 How do I use the tools on console?",
         answer: "You don't. Get a pc or get someone with a pc to mod for you.",
       },
       {
-        question: "Do these tools contain viruses?",
+        question: "🦠 Do these tools contain viruses?",
         answer:
           "No, they don't. You can view the source code of every tool on our <a class='underline' target=_blank href='https://github.com/ForzaMods'>GitHub</a>.",
       },
       {
-        question: "Is anything paid?",
+        question: "💰 Is anything paid?",
         answer: "No. We believe mods should be free.",
       },
     ],
     AIO: [
       {
-        question: "Game crashes upon opening the AIO",
+        question: "💥 Game crashes upon opening the AIO",
         answer:
           "If your game crashes upon opening the AIO, update the AIO to the latest version. It will always be <a style='text-decoration: underline' href='/mods-and-tools'>here</a>.",
       },
       {
-        question:
+        question: "⚠️ " +
           "The AIO says 'Launch FH4 or FH5' or Windows can't access the path...",
         answer: "Try starting it with Administrator permissions.",
       },
       {
-        question: "Address wasn't found for this feature",
+        question: "🔍 Address wasn't found for this feature",
         answer:
           "Choose the appropriate versions for the game/AIO: Currently for FH4, use the older version <a style='text-decoration: underline' href='https://github.com/ForzaMods/AIO/releases/tag/0.0.0.52'>here</a> (for best compatibility ~ AIO is being worked on so you don't have to use such an old version, but that's coming soon). For FH5, use the latest version available unless you're playing singleplayer, for that, you need to match the AIO release date with the game's update date (usually shortly after the game has been updated, that's the AIO version you should go for).",
       },
       {
-        question: "What dependencies do I need for the AIO?",
+        question: "📦 What dependencies do I need for the AIO?",
         answer:
           "You just need <a style='text-decoration: underline' target=_blank href='https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/runtime-8.0.4-windows-x64-installer'>Dot NET 8.0.4</a>.",
       },
@@ .. @@
   return (
     <div
       className={css({
         maxWidth: "768px",
         marginX: "auto",
       })}
     >
-      <Heading
+      <motion.div
+        initial={{ opacity: 0, y: 20 }}
+        animate={{ opacity: 1, y: 0 }}
+        transition={{ duration: 0.5 }}
+      >
+        <Heading
         size="2xl"
         className={css({
           marginBottom: 2,
           textDecoration: "underline",
           textDecorationColor: "accent.emphasized",
           textDecorationThickness: 2,
         })}
       >
         Frequently Asked Questions
       </Heading>
       <Text>
         Do you have any questions or issues about everything related to Forza
         Mods? You might find your answer here.
       </Text>
+      </motion.div>
 
       {Object.keys(questions).map((category) => (
-        <div
+        <motion.div
+          initial={{ opacity: 0, x: -20 }}
+          animate={{ opacity: 1, x: 0 }}
+          transition={{ duration: 0.5, delay: 0.2 }}
           key={category}
           className={css({
             maxWidth: "768px",
             marginX: "auto",
           })}
         >
           <Heading
             className={css({
               marginTop: 4,
               marginBottom: 2,
               textDecoration: "underline",
               textDecorationColor: "accent.emphasized",
               textDecorationThickness: 2,
             })}
             size="xl"
           >
             {category}
           </Heading>
           <Accordion.Root collapsible multiple unmountOnExit>
             {questions[category].map((entry, index) => (
-              <Accordion.Item key={index} value={category + index}>
+              <motion.div
+                initial={{ opacity: 0, y: 10 }}
+                animate={{ opacity: 1, y: 0 }}
+                transition={{ duration: 0.3, delay: 0.1 * index }}
+              >
+                <Accordion.Item key={index} value={category + index}>
                 <Accordion.ItemTrigger fontSize={15} className={css({ textDecoration: "underline", textDecorationThickness: 0.2 })}>
                   {entry.question}
                 </Accordion.ItemTrigger>
                 <Accordion.ItemContent
                   className={flex({
                     gap: 2,
                   })}
                 >
                   <CornerDownRight
                     size={20}
                     className={css({
                       flexShrink: 0,
                     })}
                     strokeWidth={1.5}
                   />
                   <span
                     dangerouslySetInnerHTML={{ __html: entry.answer }}
                   ></span>
                 </Accordion.ItemContent>
               </Accordion.Item>
+              </motion.div>
             ))}
           </Accordion.Root>
-        </div>
+        </motion.div>
       ))}
-      <Alert.Root className={css({ marginTop: 6 })}>
+      <motion.div
+        initial={{ opacity: 0, y: 20 }}
+        animate={{ opacity: 1, y: 0 }}
+        transition={{ duration: 0.5, delay: 0.4 }}
+      >
+        <Alert.Root className={css({ marginTop: 6 })}>
         <Alert.Icon asChild>
           <HelpCircle />
         </Alert.Icon>
         <Alert.Content>
           <Alert.Title>Still no answer?</Alert.Title>
           <Alert.Description>
             Ask on our <Link className={css({
               textDecoration: "underline"
             })} target="_blank" href="https://discord.com/invite/forzamods">Discord Server</Link>!
           </Alert.Description>
         </Alert.Content>
       </Alert.Root>
+      </motion.div>
     </div>
   );
 }