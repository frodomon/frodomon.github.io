---
layout: case
lang: en
ref: janus
permalink: /cases/janus/
body_class: dark-header
dark_hero_image: /assets/images/Cases.webp
date: 2021-05-01
date_modified: 2021-05-01
image: /assets/images/cases/janus/janus.webp
image_width: 880
image_height: 1160
categories: [Banking, Digital Product]

title: "Janus: End-to-End Digital Mortgage in Peru"
meta_title: "Janus: Peru's First Fully Digital Mortgage | Alfredo Vásquez"
meta_description: "UX strategy and service design for Interbank's fully digital mortgage — from simulation to disbursement, with a multi-role back office for risk and legal."
cover_image: /assets/images/cases/janus/janus-cover.webp

headline: "Janus: End-to-End Digital Mortgage in Peru"
subheadline: "Service Design and UX Strategy in a Regulated Fintech Environment"
excerpt: "Thirteen months on the project that took Interbank's mortgage end to end without a single branch visit — replacing an income assessment run in Excel with an adaptive form, and designing the back office where risk, legal and commercial teams work on the same case file."

industry: "Fintech · Banking · Regulated Financial Products"
client: "Interbank"
---

## Context

Interbank set out to become the first bank in Peru to offer a fully digital, end-to-end mortgage: from simulation to disbursement, without a single branch visit. It is the most regulated and document-heavy transaction in a person's life, and it cuts across four organizations that don't coordinate with each other — the bank, the developer selling the unit, the notary who formalizes it, and the internal risk and legal teams assessing exposure.

Given its scale, the program ran in three successive phases. I took part in all three over thirteen months as a Senior UX Designer, leading design decisions within my technology squad.

<figure class="case-figure">
  <img src="/assets/images/cases/janus/janus-roadmap.webp" alt="Timeline of the Janus program in three phases: MVP, Phase I and Phase II">
  <figcaption>The program's three phases and the scope of each.</figcaption>
</figure>

## The Problem Wasn't the Interface, It Was the Language

The brief arrived framed as a screen design. Exploratory research said otherwise: applicants weren't dropping out because the process was long, but because they didn't understand what they were agreeing to. Financial and legal terminology — including state programs like Mi Vivienda, whose benefits many couldn't explain — created friction at every step.

Mapping the applicant's pain points alongside the bank's showed both came from the same cause: a manual process with inconsistent digital patches added on top. The client faced unclear information and no guidance; the bank faced rework, obsolete systems and capacity that didn't scale. The promise of speed was impossible to keep even when there was every intention to keep it.

Mapping the quotation sub-flow step by step — thirteen in all, with the emotion recorded at each one — turned up something that contradicted the team's hypothesis. The highest point of the entire curve comes at step 3, when the applicant decides the base rate is worth negotiating: the best moment happens before a single piece of data has been handed over. The lowest comes three steps later, when declaring income — the first moment of real exposure. And nothing that follows comes close to the peak again. The anxiety wasn't where we assumed, and the design was optimizing the wrong steps.

<figure class="case-figure">
  <img src="/assets/images/cases/janus/janus-quote-emotional-curve.webp" alt="Emotional curve of the Janus quotation sub-flow, thirteen steps">
  <figcaption>A zoom into the simulation and quote stages: thirteen steps, with the emotion recorded at each one.</figcaption>
</figure>

That produced the principle that shaped the rest of the project: for the applicant this is an emotional decision before it is a financial one. They weren't comparing rates in a spreadsheet — they were looking for someone to tell them clearly what to expect and cut down how often they had to guess. Clarity and guidance over feature completeness.

## Mapping a Journey the Bank Doesn't Control

The scope was the application flow. Even so, it was necessary to map the buyer's full journey — which until then we treated as a black box — from searching for a property to years after moving in, because the pain points weren't concentrated where the bank's product lived: distrust of real estate agencies, fear of a discriminatory credit assessment, confusing legal terms with nobody from the bank present at the notary, and complete disengagement after disbursement.

<figure class="case-figure">
  <img src="/assets/images/cases/janus/janus-journeymap.webp" alt="Mortgage acquisition journey: eight stages, emotional curve, pain points and design opportunities">
  <figcaption>The full journey: the emotion at each stage, the pain point stated there, and the design opportunity it opened.</figcaption>
</figure>

That changed the design question. It was no longer "how do we build a mortgage app," but "where and how does the bank show up across a journey it doesn't control." The answer was a service model with three commitments holding up every stage: 360° advisory, unified digital platforms, and visible tracking.

## From a Shared Spreadsheet to a System

Before Janus, finding out whether an applicant qualified meant a credit analyst opened a shared Excel file and worked it by hand: a different block of formulas for each income category — salaried, professional fees, rental, business — each with its own statutory deduction rules. It worked. But it was slow, error-prone, and dependent on one specific person being available.

<figure class="case-figure">
  <img src="/assets/images/cases/janus/janus-excel-simulator.webp" alt="Debt capacity simulator in Excel used by credit analysts before Janus">
  <figcaption>The debt capacity simulator in Excel, run by a credit analyst for every application.</figcaption>
</figure>

I redesigned it as a self-service capability. Income types are declared upfront — salaried, self-employed professional, micro-business owner, landlord, shareholder, retiree, and informal worker, with more than one allowed at a time — and the form adapts its fields, questions and live calculator to that combination. The regulatory logic ended up encoded in the flow instead of living in an analyst's head.

Including informal workers as a declarable income type was the form's most consequential decision: it's the profile traditional scoring leaves out, and the same one that told us in research that their income type was working against them.

<figure class="case-figure">
  <img src="/assets/images/cases/janus/janus-income-form.webp" alt="Income type selection screen in the quotation form">
  <figcaption>Income type selection in the branch channel: the form reconfigures itself according to what's declared.</figcaption>
</figure>

## Four Organizations, One Case File

The other half of the product isn't used by the client. Before designing a single back-office interface, I mapped how a real estate project gets onboarded into Janus as a service blueprint: every system, every handoff between areas, every internal role, and the developer team's experience across the process.

<figure class="case-figure">
  <img src="/assets/images/cases/janus/janus-service-blueprint-add-a-project.webp" alt="Service blueprint for onboarding a real estate project into Janus">
  <figcaption>Service blueprint for onboarding a real estate project.</figcaption>
</figure>

Two tools came out of that blueprint: a panel for developers to register each project's legal, financial and account details, and ASSI, the system where risk assessors and legal reviewers manage the case file end to end.

The exception paths took as much design as the happy path. A rejected appraisal, for instance, isn't a system error: it's a decision the client has to make before the file can move forward, and if the interface doesn't resolve it clearly, the file cancels itself.

<figure class="case-figure">
  <img src="/assets/images/cases/janus/janus-assi-property-appraisal.webp" alt="ASSI screen showing a rejected appraisal case">
  <figcaption>ASSI: a rejected appraisal and the decision that unblocks the commercial executive.</figcaption>
</figure>

## Guiding the Client to Disbursement

The simulation flow was redesigned to show a real figure early and reveal the rest progressively, including a recommendation when a subsidized product like Crédito MiVivienda suited the applicant better than a traditional mortgage. This required negotiating with the risk team to expose partial results before the full assessment — the cost of showing a number earlier is that the client can anchor on a figure that later changes, and we had to work out how to communicate that margin without losing the value of seeing something concrete from the start.

Once the application was underway, the client inbox showed the status of every active quote, the explicit next steps, and the name and phone number of the assigned advisor — the most direct translation of the research finding: someone specific to ask.

<figure class="case-figure">
  <img src="/assets/images/cases/janus/janus-client-inbox.webp" alt="Client quotation inbox with the assigned mortgage advisor">
  <figcaption>Client inbox: the status of each quote and the assigned advisor with contact details.</figcaption>
</figure>

After approval, the disbursement tracker broke down every outstanding requirement — documents, property details, insurance, pension fund — without forcing them to be completed in order.

<figure class="case-figure">
  <img src="/assets/images/cases/janus/janus-disbursement.webp" alt="Disbursement tracking screen showing outstanding requirements">
  <figcaption>Disbursement tracking: what's still missing, in any order.</figcaption>
</figure>

## Impact

- A 4-step simulation flow, with a figure visible before asking for personal data
- Peru's first fully digital, end-to-end regulated mortgage
- Income assessment moved from an Excel file run by an analyst to an adaptive self-service form segmented by income type
- Risk, legal and commercial teams working on the same case file in a single system, with the exception paths designed
- The patterns became a replicable basis for other regulated financial products at the bank: progressive disclosure under constraint, adaptive forms, and multi-role service design

## The Framework

> What stayed with me from Janus: pain points get mapped before screens do. The service is designed around the transaction, not just the transaction itself. The back office is a first-class design surface, not a leftover. And what gets revealed, and when, is decided by the real anxiety of the person deciding — not by information architecture theory.
