/* ===========================================================================
   BEFORE / AFTER CHECKS — #/pretest/<track> and #/posttest/<track>
   Eight new questions per maintenance track, aligned to the track outcomes
   and not used anywhere else, so the "after" score measures learning rather
   than memory of a lesson check. The same eight are used before and after
   (options shuffled). The "before" check shows only the score, so it doesn't
   teach the answers; the "after" check shows the answers and the change.
   Results: state.prepost[track] = { pre: {score, total, at}, post: {...} };
   each answer is also recorded as an attempt (context "pre" / "post").
   =========================================================================== */
const PREPOST = {
  beginner: [
    { t: 'mc', q: 'A driver calls: "My truck is making a weird noise." What do you ask first?', o: ['Which shop the driver would like to use for the repair', 'Which unit it is, where they are, and whether it is safe to keep going', 'How many miles are left until the next PM is due', 'Whether the noise started after the last fuel stop'], a: 1, e: 'Unit, location and safety come first. Everything else depends on them.' },
    { t: 'mc', q: 'A driver reports that the trailer\'s marker lights are out. Which unit do you open the case on?', o: ['The trailer, using its own unit number', 'The tractor, since it supplies power to the lights', 'Both units, under one shared case number', 'Neither: lights are the driver\'s job to fix'], a: 0, e: 'Tractor and trailer have separate records. The defect is on the trailer.' },
    { t: 'mc', q: 'Which report means the truck should stop safely now?', o: ['Amber check-engine lamp, power normal', 'Fuel gauge showing a quarter tank', 'Low-air warning with a steady hiss', 'Dash clock showing the wrong time'], a: 2, e: 'A low-air warning with a hiss is a brake-system defect.' },
    { t: 'mc', q: 'A post-trip DVIR lists a cracked mirror. What must happen before the truck is dispatched again?', o: ['The next driver decides whether to fix it', 'Dispatch signs the report for the driver', 'Nothing, since mirrors are not on the checklist', 'It is repaired, or certified as not needing repair'], a: 3, e: 'A reported defect is repaired or certified before the vehicle runs again (49 CFR 396.11).' },
    { t: 'mc', q: 'Which update helps dispatch most?', o: ['"T-120 at shop: alternator, ETR 15:00, next update 13:00"', '"Truck is at the shop, I will update you later today"', '"Driver says it should be fine fairly soon"', '"The shop is busy today, not sure when it\'s done"'], a: 0, e: 'Unit, cause, ETR and the next update let dispatch plan.' },
    { t: 'mc', q: 'Which note belongs in the case record?', o: ['"Driver sounded annoyed on the phone again"', '"Shop is probably overcharging us as usual"', '"08:40 driver reports coolant leak, T-114, mile 142"', '"Same old problem with this truck, nothing new"'], a: 2, e: 'Records are factual: time, unit, what was reported and where.' },
    { t: 'mc', q: 'What is the U.S. minimum tread depth on a steer tire?', o: ['2/32 in', '4/32 in', '6/32 in', '8/32 in'], a: 1, e: '49 CFR 393.75: 4/32 in on steer tires, 2/32 in on other positions.' },
    { t: 'mc', q: 'The shop says the repair is done. What comes before closing the case?', o: ['Closing it right away, since the shop said so', 'Paying the invoice before it has arrived', 'Confirming with the driver that the problem is gone', 'Asking dispatch to close the case for you'], a: 2, e: 'Confirm the fix with the driver, then document and close.' }
  ],
  advanced: [
    { t: 'mc', q: 'PM-A is due every 25,000 mi or 90 days, whichever comes first. A truck ran 9,000 mi in 90 days. When is PM-A due?', o: ['At 25,000 miles', 'At 90 days', 'When the driver asks for it', 'At the next annual inspection'], a: 1, e: 'Whichever limit comes first: here, 90 days.' },
    { t: 'mc', q: 'A coolant temperature fault shows FMI 0. What does that suggest?', o: ['The sensor wiring is shorted to ground', 'The code is left over from a past repair', 'The temperature really is above normal', 'The engine computer needs a software update'], a: 2, e: 'FMI 0: data valid but above the normal range. The condition is real.' },
    { t: 'mc', q: 'An estimate is $3,900 and your approval limit is $2,500. What do you do?', o: ['Send it to your manager with a short summary', 'Approve it to avoid more downtime', 'Ask the shop to split it into two bills', 'Tell the shop to wait until next week'], a: 0, e: 'Route it within authority, quickly, with the facts.' },
    { t: 'mc', q: 'A reman starter costs $310 plus a $90 core charge. What is the final cost once the old starter is returned and accepted?', o: ['$220', '$400', '$490', '$310'], a: 3, e: '$310 + $90 paid, then $90 credited back: $310.' },
    { t: 'mc', q: 'Diagnosis isn\'t finished yet. What do you tell dispatch?', o: ['An ETR of 14:00, just to be safe', 'No ETR yet; diagnosis is due by 11:00', 'That the truck will be ready today', 'Nothing until the repair is finished'], a: 1, e: 'Say what is known and when you will know more.' },
    { t: 'mc', q: 'A driver waited 3 hours at a shop after driving 6 hours. Is a 30-minute break still due before driving on?', o: ['Yes, after 2 more hours of driving', 'Yes, before driving at all', 'No: the shop wait counts as the break', 'Only if the driver had no lunch'], a: 2, e: 'Any 30 straight minutes not driving, on duty or off, satisfies the break (49 CFR 395.3).' },
    { t: 'mc', q: 'A unit cost $9,000 in maintenance over 75,000 miles. What is its cost per mile?', o: ['$0.08', '$0.12', '$0.83', '$8.33'], a: 1, e: '$9,000 ÷ 75,000 mi = $0.12 per mile.' },
    { t: 'mc', q: 'A water pump fails 6 months after a shop replaced it under a 12-month warranty. What first?', o: ['Send the truck to the nearest shop', 'Buy a new pump and file a claim later', 'Call the shop that did it, with the RO', 'Have the driver top up the coolant'], a: 2, e: 'Start with the shop that did the work, before anyone else repairs it.' }
  ],
  expert: [
    { t: 'mc', q: 'Which of these is a root cause, not a failure?', o: ['The alternator stopped charging', 'The battery light came on', 'The truck would not restart', 'Belt checks were missing from the PM list'], a: 3, e: 'A root cause explains why the failure happened and can be fixed in the process.' },
    { t: 'mc', q: '50 units over 30 days had 1,800 downtime hours in total. What is fleet availability?', o: ['90%', '64%', '95%', '98%'], a: 2, e: '50 × 30 × 24 = 36,000 h; (36,000 − 1,800) ÷ 36,000 = 95%.' },
    { t: 'mc', q: 'A truck has its third DPF derate in 60 days. What is the best next step?', o: ['Ask for a root-cause diagnosis with the full history', 'Clear the codes and release it again', 'Move it to a new shop without the history', 'Replace the DPF without any diagnosis'], a: 0, e: 'Repeats need the history and a root cause, and a warranty check.' },
    { t: 'mc', q: 'Three calls at once: a driver stranded on a shoulder at −10°F, a reefer drifting slowly, a yard no-start. Who gets the first mobile truck?', o: ['The yard no-start, since it is closest', 'The reefer load, since cargo is costly', 'Whoever called first this morning', 'The stranded driver on the shoulder'], a: 3, e: 'Life safety first; protect cargo in parallel; low-risk work waits.' },
    { t: 'mc', q: 'What belongs in a leadership update during a disruption?', o: ['Every message received so far', 'Units down, risks, actions, asks, next update', 'Only the units that are already fixed', 'The phone numbers of every vendor'], a: 1, e: 'A decision-ready summary with a clear ask and the next update time.' },
    { t: 'mc', q: 'Why must "repeat repair" have a written definition?', o: ['So the number means the same thing every month', 'So shops will accept warranty claims', 'So the number looks lower to management', 'So technicians finish jobs faster'], a: 0, e: 'Without a fixed definition, the KPI can\'t be compared over time.' },
    { t: 'mc', q: 'Vendor A is fastest but has a 12% comeback rate; Vendor B is slower with 2%. Why can B win on a scorecard?', o: ['B is cheaper per labor hour', 'Comebacks add downtime and repeat cost', 'Scorecards ignore repair speed', 'A has fewer shop locations'], a: 1, e: 'A comeback is a second breakdown, a second invoice and more downtime.' },
    { t: 'mc', q: 'How does a forecast differ from a budget?', o: ['It never changes during the year', 'It ignores the planned miles', 'It covers only parts, not labor', 'It updates with actual results and known events'], a: 3, e: 'A forecast is the budget updated with what has actually happened.' }
  ]
};

function viewPrePost(kind, tid) {
  const t = TRACK_BY_ID[tid]; const qs = PREPOST[tid];
  if (!t || !qs || !['pre', 'post'].includes(kind)) return viewNotFound();
  const prev = (state.prepost[tid] || {})[kind];
  const pre = (state.prepost[tid] || {}).pre;
  const order = qs.map((q) => shuffle(q.o.map((_, i) => i)));
  const html = `<div class="page page--narrow pp">
    ${pageHead({ eyebrow: `${icon(t.icon, 'icon--sm')} ${esc(t.level)} track`, title: kind === 'pre' ? 'Before you start' : 'After the track', text: kind === 'pre'
      ? `Eight questions, about 5 minutes. It isn't graded and doesn't affect anything: it shows where you start, so you can see what you learn. Answer what you can; guessing is fine.`
      : `The same eight questions as the before check. Your result shows how much you have learned${pre ? `, compared with your before score of ${pre.score}/${pre.total}` : ''}.` })}
    ${prev ? `<p class="callout callout--info small" role="note"><span class="callout__icon">${icon('info')}</span><span>You took this ${kind === 'pre' ? 'before check' : 'after check'} on ${new Date(prev.at).toLocaleDateString()} and scored ${prev.score}/${prev.total}. Taking it again ${kind === 'pre' ? 'won\'t change your before score.' : 'replaces your after score.'}</span></p>` : ''}
    <form class="pp-form" novalidate>
      ${qs.map((q, i) => `<div class="q card card--pad" data-qi="${i}">${questionHTML(q, `pp-${tid}-${i}`, order[i])}</div>`).join('')}
      <div class="q__actions"><button type="submit" class="btn btn--primary">${icon('check')} ${kind === 'pre' ? 'See my starting score' : 'See my result'}</button><span class="small muted" data-pp-status role="status"></span></div>
    </form>
    <div data-pp-result aria-live="polite"></div>
  </div>`;
  return {
    html, title: `${kind === 'pre' ? 'Before' : 'After'} check · ${t.level}`, nav: `track-${t.id}`, bottom: 'curriculum',
    crumbs: [['Curriculum', '#/curriculum'], [t.level, `#/track/${t.id}`], [kind === 'pre' ? 'Before check' : 'After check']],
    after: (v) => {
      const form = $('.pp-form', v);
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const qels = $$('.q', form);
        if (qels.some((el) => !$('input:checked', el))) { $('[data-pp-status]', v).textContent = 'Answer every question first. Guessing is fine.'; return; }
        let ok = 0;
        qels.forEach((el, i) => {
          const q = qs[i]; const sel = $('input:checked', el); const chosen = +sel.value; const good = chosen === q.a; if (good) ok++;
          recordAttempt(`pp.${tid}#${i}`, chosen, good, null, kind); // answers are submitted together: no per-question time
          $$('input', el).forEach((x) => { x.disabled = true; });
          if (kind === 'post') $$('.opt', el).forEach((o) => { const oi = +o.dataset.oi; if (oi === q.a) o.classList.add('is-correct'); else if (oi === chosen) o.classList.add('is-wrong'); });
        });
        const res = { score: ok, total: qs.length, at: Date.now() };
        state.prepost[tid] = Object.assign({}, state.prepost[tid]);
        if (kind === 'post' || !state.prepost[tid].pre) state.prepost[tid][kind] = res;
        touch('pp:' + tid); save();
        $('.q__actions', form).remove();
        const gain = kind === 'post' && pre ? ok - pre.score : null;
        $('[data-pp-result]', v).innerHTML = `<div class="card card--pad pp-result mt-4"><h2>${ok}/${qs.length}</h2>
          <p>${kind === 'pre' ? 'That is your starting point. Work through the track, then take the after check to see the difference.' : gain == null ? 'Take the before check next time you start a track, to see the change.' : gain > 0 ? `Up ${gain} from your before score of ${pre.score}/${pre.total}.` : gain === 0 ? `The same as your before score. Review the lessons on the questions you missed.` : `Down ${-gain} from your before score. Review the lessons on the questions you missed.`}</p>
          <div class="row row--wrap mt-3"><a class="btn btn--primary" href="#/track/${t.id}">Back to the ${esc(t.level)} track</a></div></div>`;
      });
    }
  };
}
/* Card on each track page that has a before/after check. */
function prePostCardHTML(t) {
  if (!PREPOST[t.id]) return '';
  const r = state.prepost[t.id] || {};
  const cell = (kind, label) => { const x = r[kind]; return `<a class="pp-card__cell ${x ? 'is-done' : ''}" href="#/${kind}test/${t.id}"><span class="small muted">${label}</span><strong>${x ? `${x.score}/${x.total}` : 'Start'}</strong></a>`; };
  const gain = r.pre && r.post ? r.post.score - r.pre.score : null;
  return `<section class="card card--pad mb-6 pp-card"><div class="grow"><span class="eyebrow">Before and after check · 8 questions · ~5 min</span>
      <p class="small mt-2">Take it before you start and again when you finish, to see what you learned${gain != null ? `: <strong>${gain >= 0 ? '+' : ''}${gain}</strong> so far` : ''}.</p></div>
    <div class="pp-card__cells">${cell('pre', 'Before')}${cell('post', 'After')}</div></section>`;
}
