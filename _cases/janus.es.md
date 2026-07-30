---
layout: case
lang: es
ref: janus
permalink: /es/cases/janus/
body_class: dark-header
dark_hero_image: /assets/images/Cases.webp
date: 2021-05-01
date_modified: 2021-05-01
image: /assets/images/cases/janus/janus.webp
image_width: 880
image_height: 1160
categories: [Banking, Digital Product]

title: "Janus: Crédito Hipotecario Digital E2E en Perú"
meta_title: "Janus: El Primer Crédito Hipotecario 100% Digital en Perú | Alfredo Vásquez"
meta_description: "Estrategia UX y diseño de servicios del crédito hipotecario 100% digital de Interbank — de la simulación al desembolso, con un back office multi-rol para riesgos y legal."
cover_image: /assets/images/cases/janus/janus-cover.webp

headline: "Janus: Crédito Hipotecario Digital E2E en Perú"
subheadline: "Diseño de Servicios y Estrategia UX en un Entorno Fintech Regulado"
excerpt: "Trece meses en el proyecto que llevó el crédito hipotecario de Interbank de extremo a extremo sin una sola visita a la agencia — reemplazando una evaluación de ingresos hecha en Excel por un formulario adaptativo, y diseñando el back office donde riesgos, legal y comercial trabajan sobre el mismo expediente."

industry: "Fintech · Banca · Productos Financieros Regulados"
client: "Interbank"
---

## Contexto

Interbank se propuso ser el primer banco en Perú en ofrecer un crédito hipotecario completamente digital, de extremo a extremo: de la simulación al desembolso, sin una sola visita a la agencia. Es la transacción más regulada y documentada en la vida de una persona, y atraviesa cuatro organizaciones que no se coordinan entre sí — el banco, la inmobiliaria que vende la unidad, la notaría que formaliza y los equipos internos de riesgos y legal que evalúan la exposición.

Por su magnitud, el programa se ejecutó en tres fases sucesivas. Participé en las tres durante trece meses como UX Designer Senior, liderando las decisiones de diseño dentro de mi squad de tecnología.

<figure class="case-figure">
  <img src="/assets/images/cases/janus/janus-roadmap_es.webp" alt="Línea de tiempo del programa Janus en tres fases: MVP, Fase I y Fase II">
  <figcaption>Las tres fases del programa y el alcance de cada una.</figcaption>
</figure>

## El Problema No Era la Interfaz, Era el Lenguaje

El brief llegó enmarcado como un diseño de pantallas. La investigación exploratoria decía otra cosa: los solicitantes no abandonaban porque el proceso fuera largo, sino porque no entendían qué estaban aceptando. La terminología financiera y legal — incluyendo programas del Estado como Mi Vivienda, cuyos beneficios muchos no lograban explicar — generaba fricción en cada paso.

Mapear los dolores del solicitante junto a los del banco mostró que ambos venían de la misma causa: un proceso manual al que se le habían añadido parches digitales inconsistentes. El cliente enfrentaba información poco clara y sin acompañamiento; el banco, reprocesos, sistemas obsoletos y una capacidad que no escalaba. La promesa de velocidad era imposible de cumplir incluso cuando había voluntad de cumplirla.

Al mapear el subflujo de cotización paso a paso — trece en total, con la emoción registrada en cada uno — apareció algo que contradecía la hipótesis del equipo. El punto más alto de toda la curva llega en el paso 3, cuando el solicitante decide que la tasa base es buena para negociar: el mejor momento ocurre antes de haber entregado un solo dato. El más bajo llega tres pasos después, al declarar los ingresos — el primer momento en que se expone de verdad. Y nada de lo que viene después vuelve a acercarse al pico. La ansiedad no estaba donde suponíamos, y el diseño estaba optimizando los pasos equivocados.

<figure class="case-figure">
  <img src="/assets/images/cases/janus/janus-quote-emotional-curve_es.webp" alt="Curva emocional del subflujo de cotización de Janus, trece pasos">
  <figcaption>Acercamiento a las etapas de simulación y cotización: trece pasos, con la emoción registrada en cada uno.</figcaption>
</figure>

De ahí salió el principio que ordenó el resto del proyecto: para el solicitante esta es una decisión emocional antes que financiera. No estaba comparando tasas en una hoja de cálculo — buscaba alguien que le dijera con claridad qué esperar y le redujera la cantidad de veces que tenía que adivinar. Claridad y acompañamiento por encima de completitud funcional.

## Mapeando un Recorrido que el Banco No Controla

El alcance era el flujo de solicitud. Sin embargo, era necesario mapear el recorrido completo del comprador, que hasta entonces tratábamos como una caja negra, desde que busca el inmueble hasta años después de mudarse, porque los puntos de dolor no se concentraban donde vivía el producto del banco: desconfianza en las inmobiliarias, temor a una evaluación crediticia discriminatoria, términos legales confusos sin nadie del banco presente en la notaría, y desenganche total después del desembolso.

<figure class="case-figure">
  <img src="/assets/images/cases/janus/janus-journeymap_es.webp" alt="Journey de adquisición del crédito hipotecario: ocho etapas, curva emocional, dolores y oportunidades de diseño">
  <figcaption>El recorrido completo: la emoción por etapa, el dolor declarado en cada una y la oportunidad de diseño que abría.</figcaption>
</figure>

Eso cambió la pregunta de diseño. Ya no era "cómo construimos una app hipotecaria", sino "dónde y cómo aparece el banco a lo largo de un recorrido que no controla". La respuesta fue un modelo de servicio con tres compromisos sosteniendo cada etapa: asesoría 360°, plataformas digitales unificadas y seguimiento visible.

## De una Hoja de Cálculo Compartida a un Sistema

Antes de Janus, saber si un solicitante calificaba significaba que un analista de crédito abría un Excel compartido y trabajaba a mano: un bloque de fórmulas distinto por cada categoría de renta — quinta, cuarta, primera, tercera — cada uno con sus propias reglas de descuento de ley. Funcionaba. Pero era lento, propenso a error, y dependía de que una persona específica estuviera disponible.

<figure class="case-figure">
  <img src="/assets/images/cases/janus/janus-excel-simulator.webp" alt="Simulador de endeudamiento en Excel usado por los analistas de crédito antes de Janus">
  <figcaption>El simulador de endeudamiento en Excel, operado por un analista de crédito para cada solicitud.</figcaption>
</figure>

Lo rediseñé como una capacidad de autoservicio. Los tipos de ingreso se declaran de entrada — dependiente, profesional independiente, microempresario, rentista, accionista, jubilado y trabajador informal, pudiendo tener varios a la vez — y el formulario adapta campos, preguntas y su calculadora en vivo a esa combinación. La lógica regulatoria quedó codificada en el flujo en lugar de vivir en la cabeza de un analista.

Incluir al trabajador informal como tipo de ingreso declarable fue la decisión con más consecuencias del formulario: es el perfil que el scoring tradicional deja fuera, y el mismo que en la investigación sentía que su tipo de ingreso jugaba en su contra.

<figure class="case-figure">
  <img src="/assets/images/cases/janus/janus-income-form.webp" alt="Pantalla de selección de tipos de ingreso en el formulario de cotización">
  <figcaption>Selección de tipos de ingreso en canal oficinas: el formulario se reconfigura según lo declarado.</figcaption>
</figure>

## Cuatro Organizaciones en un Solo Expediente

La otra mitad del producto no la usa el cliente. Antes de diseñar una interfaz de back office, mapeé cómo se incorpora un proyecto inmobiliario a Janus como service blueprint: cada sistema, cada entrega entre áreas, cada rol interno, y la experiencia del equipo de la inmobiliaria a lo largo del proceso.

<figure class="case-figure">
  <img src="/assets/images/cases/janus/janus-service-blueprint-add-a-project_es.webp" alt="Service blueprint del alta de un proyecto inmobiliario en Janus">
  <figcaption>Service blueprint del alta de un proyecto inmobiliario.</figcaption>
</figure>

De ese blueprint salieron dos herramientas: un panel para que las inmobiliarias registren los datos legales, financieros y de cuentas de cada proyecto, y ASSI, el sistema donde evaluadores de riesgo y revisores legales gestionan el expediente de punta a punta.

Los caminos de excepción ocuparon tanto diseño como el camino ideal. Una tasación rechazada, por ejemplo, no es un error del sistema: es una decisión que el cliente tiene que tomar antes de que el expediente pueda seguir, y si la interfaz no la resuelve con claridad, el expediente se anula solo.

<figure class="case-figure">
  <img src="/assets/images/cases/janus/janus-assi-property-appraisal.webp" alt="Pantalla de ASSI mostrando el caso de una tasación rechazada">
  <figcaption>ASSI: el caso de una tasación rechazada y la decisión que habilita al ejecutivo comercial.</figcaption>
</figure>

## Acompañar al Cliente Hasta el Desembolso

El flujo de simulación se rediseñó para mostrar una cifra real temprano y revelar el resto de forma progresiva, incluyendo una recomendación cuando un producto subsidiado como Crédito MiVivienda le convenía más que el hipotecario tradicional. Esto exigió negociar con el equipo de riesgos la exposición de resultados parciales antes de la evaluación completa — el costo de mostrar un número antes es que el cliente puede anclarse en una cifra que después cambia, y hubo que resolver cómo comunicar ese margen sin perder la utilidad de ver algo concreto desde el inicio.

Iniciada la solicitud, la bandeja del cliente mostraba el estado de cada cotización activa, los siguientes pasos explícitos y el nombre y teléfono del asesor asignado — la traducción más directa del hallazgo de la investigación: alguien concreto a quién preguntar.

<figure class="case-figure">
  <img src="/assets/images/cases/janus/janus-client-inbox.webp" alt="Bandeja de cotizaciones del cliente con el asesor hipotecario asignado">
  <figcaption>Bandeja del cliente: estado de cada cotización y asesor asignado con datos de contacto.</figcaption>
</figure>

Después de la aprobación, el seguimiento de desembolso desglosaba cada requisito pendiente — documentos, datos del inmueble, seguros, AFP — sin obligar a completarlos en orden.

<figure class="case-figure">
  <img src="/assets/images/cases/janus/janus-disbursement.webp" alt="Pantalla de seguimiento de requisitos pendientes para el desembolso">
  <figcaption>Seguimiento de desembolso: qué falta, en cualquier orden.</figcaption>
</figure>

## Impacto

- Flujo de simulación de 4 pasos, con una cifra visible antes de pedir datos personales
- Primer crédito hipotecario regulado completamente digital, de extremo a extremo, en el Perú
- La evaluación de ingresos pasó de un Excel operado por un analista a un formulario adaptativo de autoservicio segmentado por tipo de renta
- Riesgos, legal y comercial trabajando sobre el mismo expediente en un solo sistema, con los caminos de excepción diseñados
- Los patrones quedaron como base replicable para otros productos financieros regulados del banco: revelación progresiva bajo restricción, formularios adaptativos y diseño de servicios multi-rol

## El Framework

> Lo que me quedó de Janus: los dolores se mapean antes que las pantallas. El servicio se diseña alrededor de la transacción, no solo la transacción. El back office es una superficie de diseño de primer nivel, no un pendiente. Y lo que se revela y cuándo lo decide la ansiedad real de quien decide, no la teoría de arquitectura de información.
