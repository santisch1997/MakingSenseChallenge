DOCUMENTACION DEL PROCESOS DEL CHALLENGE



1) Lo primero que hice fue ver el diseño, identificar posibles componentes y divisiones de los elementos de mayor a menor.
Empecé a cranear cómo podía encararlo en cuestión de anidar estilos y componentes de la manera mas eficiente. Detectando de mas grande a mas chico todos los elementos del diseño dado. Lo primero que vi fue un grid de 4 columnas donde se estructuraba el contenedor de las cards.
Decidí que iba a levantarlo con React + Vite, usando Javascript y CSS in JS con Styled Components así tenía menos carpetas y manejaba los componentes de a 1 bloque en este caso.
2) Vi un video de Styled Components para entender lo básico de cómo estructurar los estilos y sobre todo el pase de props en relación al código y la nomenclatura.
3) Al principio levante el proyecto, instale dependencia, le pregunte a chat gpt también como sugería que comience a anidar los estilos principales de los Themes para que sea mas fácil y organizado a la hora de pasar props y etc. Con eso entendí mucho mejor el concepto general para encerrar App en el ThemeProvider, crear el objeto theme, al que luego van a acceder las props.theme cuando se las llame.
4) Luego empecé a crear componentes en src. Las Cards, el modal, etc. Y no me acordaba bien como se configuraba el ruteo General de React en App.jsx asique fui a otro proyecto a ver como era. En cada componente me detuve mas tiempo de lo común ya que quería que los estilos queden iguales. 

5) Hice las primeras 4 cards, y me doy cuenta que el componente es totalmente reutilizable pero cuando quiero agregar una suponiendo que se suma una red social, ocupa todo el ancho. Tengo que encontrar la manera (supongo que usando Grid) para que el container general se divida en 4 columnas las cuales cada Card tendrá un ancho determinado. Y si se suma una quedará en la primera columna.
       

6) Otra situación es que el segundo Header que dice “Overview - Today” en un Theme utiliza el color secundario para textos y en el otro el primario, entonces no lo puedo hacer con una prop porque sino uno siempre va a quedar mal (con respecto a la imagen). Pero si pongo un estilo solo se aplica a los dos. Una opción viable que me dio la IA es que en la guía de estilos que armé para pasar por porp, ponga un “mode: dark” y “mode:light” , entonces hago los estilos por separado y les marco el “mode” correspondiente a cada uno. Lo mismo me paso con otros estilos que tenia que poner este tipo de condicionales para manejar un color en cada Theme:

![alt text](image.png)

7) El 11.000 de la tercer card no se ponía como 11K, así que concatene number con string {11 + “K”}.
8) Las Cards las pensé con un esquema tipo Grid (flex) de 4 columnas, tanto las Cards de arriba como las de abajo, para que tengan una alineación correcta siempre. 
9) En cuanto a la parte responsive, busque priorizar 2 cosas, diseño y visualización. Que se vea el dashboard de manera sencilla y amigable (cards centradas, información bien distribuida) y que en la pantalla se llegue a ver bastante información sin perder de vista que la información debe ser legible y clara. 
10) Cuando termine el proyecto, lo empecé a hacer de 0 nuevamente pero con CSS plano, a ver si llegaba al mismo resultado, si bien no llegué a terminarlo al detalle, llegue al mismo resultado con css plano, lo cual me era mas familiar. Elegí hacerlo con styled components para familiarizarme mas y la verdad me pareció mucho mas cómodo en cuestión de orden de estilos, evitar problemas de classnames, componentizar mucho mejor en bloques, entre otras cosas. Lo único que note es que quizás el archivo de un componente con sus estilos a veces se hace muy largo. 

Este es el resultado de la segunda vez que hice el challenge pero con plain css, react+vite y js:

![alt text](image-1.png)

(faltaban todavía muchos detalles de colores, espacios, tipografía, etc, los cuales pude hacer de manera fina en el que entregue)




