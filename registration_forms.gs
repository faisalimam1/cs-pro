/**
 * IEEE CS Pro 2026 — Registration Forms builder (Google Apps Script)
 * --------------------------------------------------------------------
 * Maintains the TWO existing registration forms IN PLACE (same links every time):
 *   Form 1 — Leadership Round Table   (invited leaders)
 *   Form 2 — CS Professional Connect  (professionals / TPOs / placement / academia)
 *
 * Because the forms are opened by ID and their contents rebuilt, the EDIT and LIVE
 * links never change — any edits we make here apply to the links you already have.
 *
 * Form 2 uses section-based BRANCHING on "Are you a current IEEE member?":
 *   Yes -> asks membership number, then submits (skips the interest question).
 *   No  -> asks "interested in IEEE membership?", then submits (never sees the number field).
 *
 * HOW TO RUN
 *   1. Go to https://script.google.com  ->  open your existing project.
 *   2. Replace the code with this file, Save.
 *   3. Select a function in the toolbar  ->  Run:
 *        - "updateForms"               rebuilds BOTH forms in place.
 *        - "updateProfessionalsForm"   rebuilds ONLY Form 2 in place.
 *        - "updateLeadersForm"         rebuilds ONLY Form 1 in place.
 *   4. Open View -> Logs (or Execution log) to confirm the (unchanged) links.
 *
 * NOTE: rebuilding clears the form's existing questions before re-adding them. Do this
 * BEFORE you start collecting responses (clearing questions orphans old response data).
 * The "createForms" function at the bottom makes brand-new forms (NEW links) — only for
 * first-time setup; you normally do NOT want it.
 */

var EVENT = {
  name: 'IEEE CS Pro 2026',
  date: 'Sunday, 26 July 2026 · 9:00 AM – 1:00 PM',
  contact: 'ieeecspro@gmail.com · +91 96089 53402',
  org: 'IEEE Computer Society – Bangalore Chapter',
};

// Existing forms — edited in place so their links stay constant.
var FORM_ID = {
  leaders: '1sqoDtrqLN3npFUqAUVstvyE9JDgisUnF5SLZx-vBQyQ',
  professionals: '125kWBxDp5Wb9Qnq-oGKcHQPevquZYb-zCAPnVYAbdWI',
};

/* ============================================================
 *  PRIMARY ENTRY POINTS — edit the existing forms (same links)
 * ============================================================ */

function updateForms() {
  updateLeadersForm();
  updateProfessionalsForm();
}

function updateLeadersForm() {
  var form = FormApp.openById(FORM_ID.leaders);
  clearForm(form);
  buildLeaders(form);
  logForm('FORM 1 — Leadership Round Table', form);
}

function updateProfessionalsForm() {
  var form = FormApp.openById(FORM_ID.professionals);
  clearForm(form);
  buildProfessionals(form);
  logForm('FORM 2 — CS Professional Connect', form);
}

/* ---------- helpers ---------- */

function clearForm(form) {
  var items = form.getItems();
  for (var i = items.length - 1; i >= 0; i--) {
    form.deleteItem(items[i]);
  }
}

function logForm(label, form) {
  Logger.log('============================================================');
  Logger.log(label);
  Logger.log('  Edit : ' + form.getEditUrl());
  Logger.log('  Live : ' + form.getPublishedUrl());
  Logger.log('============================================================');
}

function emailValidation() {
  return FormApp.createTextValidation()
    .setHelpText('Please enter a valid email address.')
    .requireTextIsEmail()
    .build();
}

function configureForm(form) {
  form.setCollectEmail(false)
      .setAllowResponseEdits(true)
      .setProgressBar(true)
      .setLimitOneResponsePerUser(false)
      .setConfirmationMessage(
        'Thank you for registering for ' + EVENT.name + '. ' +
        'This is an invite-based event; our team will be in touch with further details. ' +
        'For queries: ' + EVENT.contact);
}

/* ============================================================
 *  FORM CONTENT
 * ============================================================ */

function buildLeaders(form) {
  form.setTitle('IEEE CS Pro 2026 · Leadership Round Table');
  form.setDescription(
    'You’re personally invited to the IEEE CS Pro 2026 Leadership Round Table — a select morning ' +
    'gathering of founders, industry leaders and academia, in candid conversation on the ideas shaping our ' +
    'AI-ready future.\n\n' +
    '🗓  ' + EVENT.date + '\n' +
    '📍  Venue — to be announced\n' +
    '✦  By invitation only\n\n' +
    'This takes about two minutes and confirms your seat at the table.\n' +
    'Questions? ' + EVENT.contact);
  configureForm(form);

  /* --- Step 1: About you --- */
  form.addSectionHeaderItem()
      .setTitle('About you')
      .setHelpText('A few details for your name badge and our records.');

  form.addTextItem().setTitle('Full name').setRequired(true);
  form.addTextItem().setTitle('Designation / Role').setRequired(true);
  form.addTextItem().setTitle('Organisation / Company').setRequired(true);

  form.addMultipleChoiceItem()
      .setTitle('Organisation type')
      .setChoiceValues(['Startup', 'Industry / Corporate', 'Investment', 'Academia', 'Other'])
      .showOtherOption(true)
      .setRequired(true);

  form.addTextItem()
      .setTitle('Domain / sector of expertise')
      .setHelpText('e.g. AI / ML, FinTech, Semiconductors, EdTech, Healthcare…')
      .setRequired(true);

  form.addTextItem().setTitle('LinkedIn profile URL').setRequired(false);

  /* --- Step 2: At the round table --- */
  form.addPageBreakItem()
      .setTitle('At the round table')
      .setHelpText('Three parallel tables run in the morning, each a focused 45-minute conversation. ' +
                   'Tell us where you’d like to sit — and what you’d love the room to explore.');

  form.addMultipleChoiceItem()
      .setTitle('Which round table speaks to you most?')
      .setHelpText('Indicative only — our moderators finalise seating to keep each table balanced.')
      .setChoiceValues([
        'Round Table 1 — Driving Organisational Transformation',
        'Round Table 2 — Building the AI-Ready Workforce Together',
        'Round Table 3 — Beyond the Machine: Human-Centred, Ethical & Purpose-Driven Innovation',
        'No preference — seat me where I’m needed'])
      .setRequired(true);

  form.addParagraphTextItem()
      .setTitle('A perspective or question you’d like to bring to the table')
      .setHelpText('Optional — a line or two helps our moderator shape a richer discussion.')
      .setRequired(false);

  /* --- Step 3: Final details --- */
  form.addPageBreakItem()
      .setTitle('A few final details')
      .setHelpText('So we can confirm your seat and host you well on the day.');

  form.addTextItem()
      .setTitle('Official email')
      .setHelpText('We’ll send your confirmation and venue details here.')
      .setValidation(emailValidation())
      .setRequired(true);

  form.addTextItem().setTitle('Mobile number').setRequired(true);

  form.addMultipleChoiceItem()
      .setTitle('Dietary preference')
      .setChoiceValues(['Vegetarian', 'Non-vegetarian', 'Jain'])
      .setRequired(true);

  form.addMultipleChoiceItem()
      .setTitle('May we keep you posted on IEEE CS Bangalore initiatives?')
      .setChoiceValues(['Yes, please', 'No, thanks'])
      .setRequired(true);
}

function buildProfessionals(form) {
  form.setTitle('IEEE CS Pro 2026 · CS Professional Connect');
  form.setDescription(
    'Join us at CS Professional Connect — a professional networking forum bringing together HR leaders, ' +
    'TPOs, placement coordinators, academia and industry to connect, collaborate and grow with the IEEE ' +
    'community.\n\n' +
    '🗓  ' + EVENT.date + '\n' +
    '📍  Venue — to be announced\n' +
    '✦  Complimentary IEEE annual membership for early registrants\n\n' +
    'Registration takes about two minutes.\n' +
    'Questions? ' + EVENT.contact);
  configureForm(form);

  /* --- Step 1: About you --- */
  form.addSectionHeaderItem()
      .setTitle('About you')
      .setHelpText('A few details for your name badge and our records.');

  form.addTextItem().setTitle('Full name').setRequired(true);

  form.addMultipleChoiceItem()
      .setTitle('Which best describes you?')
      .setChoiceValues([
        'HR Professional',
        'Training & Placement Officer (TPO)',
        'Placement Coordinator',
        'Academician',
        'Faculty',
        'Industry Professional',
        'Other'])
      .showOtherOption(true)
      .setRequired(true);

  form.addTextItem().setTitle('Institution / Organisation').setRequired(true);
  form.addTextItem().setTitle('Designation').setRequired(true);
  form.addTextItem().setTitle('LinkedIn profile URL').setRequired(false);

  /* --- Step 2: Staying in touch --- */
  form.addPageBreakItem()
      .setTitle('Staying in touch')
      .setHelpText('How we’ll reach you with your confirmation and event details.');

  form.addTextItem()
      .setTitle('Official email')
      .setHelpText('We’ll send your confirmation and venue details here.')
      .setValidation(emailValidation())
      .setRequired(true);

  form.addTextItem().setTitle('Mobile number').setRequired(true);

  form.addMultipleChoiceItem()
      .setTitle('Dietary preference')
      .setChoiceValues(['Vegetarian', 'Non-vegetarian', 'Jain'])
      .setRequired(true);

  form.addMultipleChoiceItem()
      .setTitle('May we keep you posted on IEEE CS Bangalore initiatives?')
      .setChoiceValues(['Yes, please', 'No, thanks'])
      .setRequired(true);

  /* --- Step 3: branch point — membership status --- */
  form.addPageBreakItem()
      .setTitle('IEEE membership')
      .setHelpText('IEEE Computer Society membership opens the door to global resources, networking and ' +
                   'recognition — and it’s complimentary for early registrants at this event.');
  var memberQ = form.addMultipleChoiceItem()
      .setTitle('Are you a current IEEE member?')
      .setRequired(true);

  /* --- Members only — membership number --- */
  var memberPage = form.addPageBreakItem()
      .setTitle('Thank you for being part of IEEE')
      .setHelpText('Just one detail to link your registration to your membership.');
  form.addTextItem()
      .setTitle('IEEE membership number')
      .setHelpText('Please enter your IEEE membership number.')
      .setRequired(true);

  /* --- Non-members only — membership interest --- */
  // setGoToPage(SUBMIT) on this break means the members' page submits
  // directly afterwards, so members never see this page.
  var interestPage = form.addPageBreakItem()
      .setTitle('Discover IEEE membership')
      .setHelpText('We’d love to welcome you to the IEEE community.')
      .setGoToPage(FormApp.PageNavigationType.SUBMIT);
  form.addMultipleChoiceItem()
      .setTitle('Would you like to join IEEE? (complimentary for early registrants)')
      .setChoiceValues(['Yes, sign me up', 'Tell me more', 'Not right now'])
      .setRequired(true);

  /* --- wire the branch now that the target pages exist --- */
  memberQ.setChoices([
    memberQ.createChoice('Yes', memberPage),
    memberQ.createChoice('No', interestPage),
  ]);
}

/* ============================================================
 *  FIRST-TIME SETUP ONLY — creates NEW forms (NEW links).
 *  You already have forms; do NOT run this for edits.
 * ============================================================ */

function createForms() {
  var leaders = FormApp.create('IEEE CS Pro 2026 — Leadership Round Table');
  buildLeaders(leaders);
  var professionals = FormApp.create('IEEE CS Pro 2026 — CS Professional Connect');
  buildProfessionals(professionals);
  logForm('FORM 1 — Leadership Round Table (NEW)', leaders);
  logForm('FORM 2 — CS Professional Connect (NEW)', professionals);
}
