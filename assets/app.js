const pilots = [
  {
    id: "institution",
    number: "Pilot 1",
    label: "Institution-Facing Agentic AI",
    status: "Planning",
    phase: "Element451 cohort and workflow documentation",
    audience: "Colleges and institutional operations teams",
    summary:
      "Track colleges already using Element451 and document how agentic workflows support enrollment, engagement, and institutional operations.",
    highlights: [
      "Partner with approximately 15-18 Element451 colleges.",
      "Assess proactive outreach, application completion, and communication workflows.",
      "Collect monthly or quarterly updates and participate in the CCC E451 Zoom Users Group.",
    ],
    unique: [
      "Data-sharing agreement and update cadence with Element451 colleges.",
      "Monthly or quarterly evidence collection from participating colleges.",
      "Shared workflow library for proactive outreach, application completion, and enrollment support.",
    ],
    deliverables: [
      "Element451 CCC cohort roster",
      "Use-case inventory and best-practice library",
      "Pilot college evidence template",
      "Enrollment and engagement impact summary",
    ],
    systems: ["Element451", "CRM", "SMS and messaging channels", "CCCCO Datamart"],
    next: "Confirm participating colleges, data-sharing expectations, and a repeatable reporting rhythm.",
    outcomes: ["Student engagement", "Enrollment yield", "Staff efficiency"],
  },
  {
    id: "student",
    number: "Pilot 2",
    label: "Student-Facing Personal Agent",
    status: "MVP design",
    phase: "Student-owned digital assistant prototype",
    audience: "Students across onboarding, enrollment, persistence, career, funding, and transfer workflows",
    summary:
      "Prototype a persistent, goal-oriented student agent that can support onboarding, enrollment, persistence, career, transfer, and funding workflows.",
    highlights: [
      "Support secured uploads such as resumes, transcripts, and paychecks.",
      "Maintain memory, goals, reminders, nudges, and task-completion support.",
      "Allow students to activate targeted agents such as Transfer, Career, FAFSA, Scholarship, and Degree Completion.",
    ],
    unique: [
      "Student-owned agent with memory, goals, and activated specialty agents.",
      "Secure student uploads for artifacts such as resumes, transcripts, and paychecks.",
      "Multi-step guidance across onboarding, enrollment, persistence, funding, career, and transfer.",
    ],
    deliverables: [
      "Functional MVP prototype",
      "Student workflow map",
      "Specialty agent menu",
      "Readiness criteria for pilot colleges",
    ],
    systems: ["Student profile and goals", "Secure document upload", "SIS and CRM integrations", "SMS/web/chat"],
    next: "Define the MVP scope, first student workflows, secured upload model, and pilot readiness criteria.",
    outcomes: ["24/7 support", "Personalized guidance", "Milestone completion"],
  },
  {
    id: "faculty",
    number: "Pilot 3",
    label: "Faculty-Facing Agentic AI",
    status: "Future track",
    phase: "Teaching and learning innovation",
    audience: "Faculty, instructional designers, and CTE programs",
    summary:
      "Design a Faculty Companion Agent that supports Canvas course shells, syllabi, OER materials, assignments, rubrics, and continuous CTE content updates.",
    highlights: [
      "Integrate with Canvas LMS APIs for course-shell and module creation.",
      "Generate instructional materials aligned to course learning outcomes.",
      "Keep faculty in the loop for review, modification, and approval.",
    ],
    unique: [
      "Canvas-connected course shell, syllabus, module, assignment, quiz, and rubric generation.",
      "OER-aligned materials to support zero-cost course resources.",
      "Continuous CTE content updates from industry and workforce signals.",
    ],
    deliverables: [
      "Faculty Companion Agent specification",
      "Canvas API workflow map",
      "OER course shell prototype",
      "Faculty review and approval protocol",
    ],
    systems: ["Canvas LMS APIs", "OER repositories", "Course outcomes", "CTE industry update sources"],
    next: "Draft a future-pilot specification for Canvas workflows, OER generation, and faculty approval loops.",
    outcomes: ["Faculty workload reduction", "OER adoption", "Course quality"],
  },
];

const portfolioFoundations = [
  {
    title: "Project-wide research",
    copy: "Landscape analysis, needs assessment, and priority use-case definition belong to the full portfolio, not only one pilot.",
  },
  {
    title: "Shared governance",
    copy: "FERPA, privacy, bias mitigation, autonomy levels, and human-in-the-loop protocols should be designed once and applied across every track.",
  },
  {
    title: "Evaluation and scale",
    copy: "KPIs, metrics collection, college participation evidence, quarterly reporting, and the systemwide roadmap should connect all pilot tracks.",
  },
];

const defaultTasks = [
  {
    id: "landscape-analysis",
    track: "institution",
    title: "Complete landscape analysis and needs assessment",
    due: "Planning phase",
    status: "in-progress",
    assignees: ["Hongling Yang", "Gary Graves"],
    details:
      "Document agentic AI use cases across 15-20 community colleges and partner institutions, including gaps and priority workflows.",
  },
  {
    id: "use-case-prioritization",
    track: "all",
    title: "Define and prioritize 5-8 high-impact use cases",
    due: "Planning phase",
    status: "not-started",
    assignees: ["Gary Graves", "Hongling Yang"],
    details:
      "Align each use case with Vision 2030 outcomes, workflow requirements, autonomy levels, and success metrics.",
  },
  {
    id: "element451-cohort",
    track: "institution",
    title: "Build Element451 college cohort",
    due: "Pilot setup",
    status: "not-started",
    assignees: ["Gary Graves", "Savanna McDada", "Jackie Hester"],
    details:
      "Confirm participating colleges, data-sharing expectations, update cadence, and shared best-practice documentation.",
  },
  {
    id: "student-agent-mvp",
    track: "student",
    title: "Design student personal agent MVP",
    due: "Prototype phase",
    status: "not-started",
    assignees: ["Gary Graves", "Alicia Cardenas"],
    details:
      "Define student lifecycle workflows, secure upload needs, memory model, agent menu, and readiness criteria for pilot colleges.",
  },
  {
    id: "faculty-agent-spec",
    track: "faculty",
    title: "Draft Faculty Companion Agent specification",
    due: "Future track",
    status: "not-started",
    assignees: ["Gary Graves", "Donnell Layne"],
    details:
      "Map Canvas API workflows, OER generation, syllabus and module creation, faculty review loops, and evaluation measures.",
  },
  {
    id: "governance-framework",
    track: "all",
    title: "Establish data, integration, and governance frameworks",
    due: "Before pilot launch",
    status: "not-started",
    assignees: ["Donnell Layne", "COCI API Access", "CPL API Access", "CCCCO Datamart API"],
    details:
      "Document FERPA, privacy, security, human-in-the-loop protocols, API requirements, and autonomy boundaries.",
  },
  {
    id: "evaluation-roadmap",
    track: "all",
    title: "Develop evaluation metrics and scaling roadmap",
    due: "Evaluation phase",
    status: "not-started",
    assignees: ["Hongling Yang", "Gary Graves"],
    details:
      "Define KPIs, capture pilot outcomes, identify technology and staffing needs, and prepare systemwide scaling guidance.",
  },
];

const timeline = [
  {
    phase: "Research and Landscape",
    window: "Spring 2026",
    track: "all",
    copy:
      "Scan community college and national higher education use cases, document partner capabilities, and distinguish rule-based automation from agentic systems.",
  },
  {
    phase: "Use Case Design",
    window: "Spring - Summer 2026",
    track: "all",
    copy:
      "Prioritize high-impact workflows for enrollment, advising, student support, course design, data integration, and human oversight.",
  },
  {
    phase: "Pilot Setup",
    window: "Summer - Fall 2026",
    track: "institution",
    copy:
      "Confirm Element451 colleges, data-sharing expectations, update cadence, readiness criteria, and common evidence templates.",
  },
  {
    phase: "Prototype and Implementation",
    window: "Fall 2026 - Spring 2027",
    track: "student",
    copy:
      "Build and test personal agent workflows for student lifecycle support, reminders, uploads, goal memory, and multi-step guidance.",
  },
  {
    phase: "Teaching and Learning Track",
    window: "Future pilot",
    track: "faculty",
    copy:
      "Prototype Canvas-connected faculty agent workflows for course shells, OER materials, instructional activities, and CTE content updates.",
  },
  {
    phase: "Evaluation and Scaling",
    window: "Spring - Summer 2027",
    track: "all",
    copy:
      "Evaluate engagement, FTES impact, completion signals, workload reduction, governance maturity, and systemwide scaling requirements.",
  },
];

const outcomes = [
  "Improved application completion, enrollment yield, FTES growth, and student progression through key milestones.",
  "Expanded equitable access to 24/7 support for non-traditional, working, and underserved students.",
  "Reduced repetitive administrative work so staff can focus on advising, counseling, and high-impact human support.",
  "Validated agentic use cases that can execute multi-step tasks across systems with appropriate human oversight.",
  "Clear privacy, FERPA, bias mitigation, autonomy, and human-in-the-loop governance frameworks.",
  "A systemwide implementation roadmap for broader CCCCO adoption.",
];

const guideSections = [
  {
    title: "Target Populations",
    tags: "students equity populations",
    items: [
      "K-12 dual enrollment",
      "First-generation students",
      "Justice-involved or impacted students",
      "Students with disabilities",
      "Foster youth",
      "Low-income students",
      "Veterans",
      "LGBT students",
      "Homeless students",
      "Adult learners 25+",
    ],
  },
  {
    title: "Key Activities",
    tags: "activities research pilots",
    items: [
      "Conduct a systemwide and national landscape analysis.",
      "Engage partner organizations and participating colleges to document capabilities and gaps.",
      "Define high-impact use cases aligned with student success and Vision 2030.",
      "Design and implement three pilot tracks.",
      "Develop data, API, autonomy, and human-in-the-loop governance frameworks.",
    ],
  },
  {
    title: "Objectives",
    tags: "objectives measures implementation",
    items: [
      "Analyze 15-20 colleges or partner institutions.",
      "Develop and validate 5-8 prioritized agentic AI use cases.",
      "Track institution-facing solutions across at least 3-5 pilot colleges.",
      "Launch an MVP prototype of a student-facing personal agent system.",
      "Prepare a future faculty companion pilot across 2-3 courses or colleges.",
      "Create evaluation metrics and a scaling roadmap.",
    ],
  },
  {
    title: "Vision 2030 Alignment",
    tags: "vision 2030 alignment goals",
    items: [
      "Outcome 1: Increase equitable attendance at California community colleges.",
      "Outcome 2: Increase equitable completion of meaningful educational outcomes.",
      "Outcome 3c: Increase equitable transfer to four-year institutions.",
      "Outcome 5: Increase access to state and federal aid.",
      "Future of Learning: Apply data infrastructure and GenAI to timely, proactive support.",
    ],
  },
  {
    title: "Demonstration Project SOP",
    tags: "sop reporting sharepoint metrics closeout",
    items: [
      "Initiation: complete the Project Development Template and RACI document.",
      "Activation: prepare BOG record entry and complete Metrics Phase I within three weeks.",
      "Reporting: submit midterm and quarterly reports twice per quarter.",
      "Closeout: decide whether to scale, transition, or close and archive final deliverables.",
    ],
  },
];

const guardrails = [
  "FERPA-aligned privacy and data governance.",
  "Defined autonomy levels before any agent can take action.",
  "Human-in-the-loop oversight for high-stakes workflows.",
  "Bias, safety, and automation-error mitigation.",
  "Data and API standards for Datamart, COCI, CPL, CRM, SIS, LMS, and other college systems.",
];

const roles = [
  { label: "Internal PM", value: "Gary Graves / Hongling Yang, CCCCO AI Fellows" },
  { label: "External Co-Leads", value: "Gary Graves, Fullerton College / Hongling Yang, San Diego CCD" },
  { label: "Technical Reviewer", value: "Donnell Layne" },
  { label: "College Liaison", value: "Jackie Hester" },
  { label: "Counselor Support", value: "Alicia Cardenas" },
  { label: "CCCCO Lead", value: "Don Daves-Rougeaux, Senior Advisor to the Chancellor" },
  { label: "Sponsors", value: "Student Services and WEDD" },
];

const budgets = {
  mvp: {
    label: "MVP estimate",
    note: "Small proof-of-concept budget for a limited prototype and planning sprint.",
    items: [
      ["Prototype build and configuration", 4000],
      ["Student or stakeholder discovery", 2000],
      ["Data and workflow mapping", 1500],
      ["Documentation and demo materials", 1500],
      ["Contingency", 1000],
    ],
  },
  live: {
    label: "Go Live estimate",
    note: "Broader implementation budget aligned with the original project estimate.",
    items: [
      ["Personnel", 150000],
      ["Consultants", 100000],
      ["Convenings", 50000],
      ["Communications", 50000],
      ["Technology, licensing, development, and testing", 300000],
      ["Research or evaluation", 50000],
      ["Contracts for services", 100000],
      ["Payments to colleges", 100000],
      ["Stipends, honoraria, awards", 50000],
    ],
  },
};

const taskStoreKey = "agentic-ai-demo-project-tasks-v2";
const oldStatusKey = "agentic-ai-demo-project-task-statuses";
const state = {
  trackFilter: "institution",
  taskTrackFilter: "all",
  taskStatusFilter: "all",
  budgetMode: "mvp",
  guideSearch: "",
  tasks: loadTasks(),
  editingTaskId: "",
  pendingDeleteTaskId: "",
};

const els = {
  pilotDetail: document.querySelector("#pilotDetail"),
  portfolioFoundation: document.querySelector("#portfolioFoundation"),
  taskTrackFilter: document.querySelector("#taskTrackFilter"),
  taskStatusFilter: document.querySelector("#taskStatusFilter"),
  addTaskButton: document.querySelector("#addTaskButton"),
  resetTasksButton: document.querySelector("#resetTasksButton"),
  boardMetrics: document.querySelector("#boardMetrics"),
  taskList: document.querySelector("#taskList"),
  taskDialog: document.querySelector("#taskDialog"),
  taskForm: document.querySelector("#taskForm"),
  taskDialogTitle: document.querySelector("#taskDialogTitle"),
  closeTaskDialogButton: document.querySelector("#closeTaskDialogButton"),
  cancelTaskButton: document.querySelector("#cancelTaskButton"),
  deleteTaskButton: document.querySelector("#deleteTaskButton"),
  taskIdInput: document.querySelector("#taskIdInput"),
  taskTitleInput: document.querySelector("#taskTitleInput"),
  taskTrackInput: document.querySelector("#taskTrackInput"),
  taskStatusInput: document.querySelector("#taskStatusInput"),
  taskDueInput: document.querySelector("#taskDueInput"),
  taskOtherAssigneesInput: document.querySelector("#taskOtherAssigneesInput"),
  taskDetailsInput: document.querySelector("#taskDetailsInput"),
  assigneeOptions: document.querySelector("#assigneeOptions"),
  confirmDialog: document.querySelector("#confirmDialog"),
  confirmTitle: document.querySelector("#confirmTitle"),
  confirmMessage: document.querySelector("#confirmMessage"),
  cancelDeleteButton: document.querySelector("#cancelDeleteButton"),
  confirmDeleteButton: document.querySelector("#confirmDeleteButton"),
  timeline: document.querySelector("#timeline"),
  outcomeList: document.querySelector("#outcomeList"),
  guideSearch: document.querySelector("#guideSearch"),
  guideGrid: document.querySelector("#guideGrid"),
  guardrailList: document.querySelector("#guardrailList"),
  roleList: document.querySelector("#roleList"),
  budgetList: document.querySelector("#budgetList"),
};

function init() {
  hydrateTrackFilter();
  hydrateTaskFormOptions();
  bindEvents();
  render();
}

function hydrateTrackFilter() {
  const options = [
    ["all", "All tracks"],
    ...pilots.map((pilot) => [pilot.id, pilot.label.replace(" Agentic AI", "")]),
  ];
  els.taskTrackFilter.innerHTML = options
    .map(([value, label]) => `<option value="${value}">${escapeHtml(label)}</option>`)
    .join("");
}

function hydrateTaskFormOptions() {
  const trackOptions = [
    ["all", "Full portfolio / all pilots"],
    ...pilots.map((pilot) => [pilot.id, `${pilot.number}: ${pilot.label}`]),
  ];
  els.taskTrackInput.innerHTML = trackOptions
    .map(([value, label]) => `<option value="${value}">${escapeHtml(label)}</option>`)
    .join("");

  els.assigneeOptions.innerHTML = getKnownAssignees()
    .map(
      (name) => `
        <label class="assignee-choice">
          <input type="checkbox" value="${escapeAttr(name)}" />
          <span>${escapeHtml(name)}</span>
        </label>
      `
    )
    .join("");
}

function bindEvents() {
  document.querySelectorAll("[data-home-link]").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      history.replaceState(null, "", `${window.location.pathname}${window.location.search}#top`);
    });
  });

  document.querySelectorAll("[data-track-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      state.trackFilter = button.dataset.trackFilter;
      document.querySelectorAll("[data-track-filter]").forEach((item) => {
        item.classList.toggle("is-active", item === button);
        item.setAttribute("aria-pressed", item === button ? "true" : "false");
      });
      renderPilots();
    });
  });

  document.querySelectorAll("[data-budget-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      state.budgetMode = button.dataset.budgetMode;
      document.querySelectorAll("[data-budget-mode]").forEach((item) => {
        item.classList.toggle("is-active", item === button);
      });
      renderGovernance();
    });
  });

  els.taskTrackFilter.addEventListener("change", () => {
    state.taskTrackFilter = els.taskTrackFilter.value;
    renderWorkboard();
  });

  els.taskStatusFilter.addEventListener("change", () => {
    state.taskStatusFilter = els.taskStatusFilter.value;
    renderWorkboard();
  });

  els.addTaskButton.addEventListener("click", () => openTaskDialog());

  els.resetTasksButton.addEventListener("click", () => {
    localStorage.removeItem(taskStoreKey);
    localStorage.removeItem(oldStatusKey);
    state.tasks = loadTasks();
    hydrateTaskFormOptions();
    renderWorkboard();
  });

  els.closeTaskDialogButton.addEventListener("click", closeTaskDialog);
  els.cancelTaskButton.addEventListener("click", closeTaskDialog);
  els.deleteTaskButton.addEventListener("click", requestCurrentTaskDelete);
  els.taskForm.addEventListener("submit", saveTaskFromForm);
  els.cancelDeleteButton.addEventListener("click", closeDeleteDialog);
  els.confirmDeleteButton.addEventListener("click", confirmDeleteTask);
  els.confirmDialog.addEventListener("close", () => {
    if (els.confirmDialog.returnValue !== "delete") state.pendingDeleteTaskId = "";
    els.confirmDialog.returnValue = "";
  });

  els.guideSearch.addEventListener("input", () => {
    state.guideSearch = els.guideSearch.value.trim().toLowerCase();
    renderGuide();
  });
}

function render() {
  renderPilots();
  renderWorkboard();
  renderTimeline();
  renderOutcomes();
  renderGuide();
  renderGovernance();
}

function renderPilots() {
  const pilot = pilots.find((item) => item.id === state.trackFilter) || pilots[0];
  els.pilotDetail.innerHTML = `
    <article class="pilot-feature pilot-theme-${escapeAttr(pilot.id)}">
      <div class="pilot-feature-main">
        <div class="card-kicker">${escapeHtml(pilot.number)} | ${escapeHtml(pilot.status)}</div>
        <h3>${escapeHtml(pilot.label)}</h3>
        <p class="feature-copy">${escapeHtml(pilot.summary)}</p>
        <div class="pill-row">
          ${pilot.outcomes.map((outcome) => `<span>${escapeHtml(outcome)}</span>`).join("")}
        </div>
        <h4>Unique to this pilot</h4>
        <ul>
          ${pilot.unique.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ul>
      </div>
      <aside class="pilot-feature-side">
        <div>
          <span>Audience</span>
          <strong>${escapeHtml(pilot.audience)}</strong>
        </div>
        <div>
          <span>Next project move</span>
          <strong>${escapeHtml(pilot.next)}</strong>
        </div>
        <div>
          <span>Systems and data</span>
          <div class="compact-tags">
            ${pilot.systems.map((system) => `<em>${escapeHtml(system)}</em>`).join("")}
          </div>
        </div>
      </aside>
    </article>
    <div class="pilot-grid detail-grid">
      <article class="pilot-card">
        <h3>Core deliverables</h3>
        <ul>${pilot.deliverables.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
      </article>
      <article class="pilot-card">
        <h3>Pilot activities</h3>
        <ul>${pilot.highlights.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
      </article>
    </div>
  `;

  els.portfolioFoundation.innerHTML = `
    <div class="section-heading compact-heading">
      <div>
        <p class="eyebrow">Full Portfolio</p>
        <h3>Items that belong to the entire Agentic AI project.</h3>
      </div>
    </div>
    <div class="foundation-grid">
      ${portfolioFoundations
        .map(
          (item) => `
            <article class="foundation-card">
              <h4>${escapeHtml(item.title)}</h4>
              <p>${escapeHtml(item.copy)}</p>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function renderWorkboard() {
  const filtered = state.tasks.filter((task) => {
    const trackMatch =
      state.taskTrackFilter === "all" || task.track === "all" || task.track === state.taskTrackFilter;
    const statusMatch = state.taskStatusFilter === "all" || task.status === state.taskStatusFilter;
    return trackMatch && statusMatch;
  });

  const complete = state.tasks.filter((task) => task.status === "complete").length;
  const inProgress = state.tasks.filter((task) => task.status === "in-progress").length;
  const total = state.tasks.length;
  const progress = total ? Math.round(((complete + inProgress * 0.5) / total) * 100) : 0;
  const notStarted = total - complete - inProgress;

  els.boardMetrics.innerHTML = [
    ["Weighted progress", `${progress}%`],
    ["Not started", String(notStarted)],
    ["In progress", String(inProgress)],
    ["Complete", String(complete)],
  ]
    .map(([label, value]) => `<article class="mini-metric"><span>${label}</span><strong>${value}</strong></article>`)
    .join("");

  els.taskList.innerHTML = filtered.length
    ? filtered
    .map((task) => {
      const pilot = pilots.find((item) => item.id === task.track);
      const trackLabel = task.track === "all" ? "All tracks" : pilot?.label || task.track;
      return `
        <article class="task-item task-theme-${escapeAttr(task.track)}">
          <div>
            <span class="status-dot ${task.status}"></span>
            <p class="task-track">${escapeHtml(trackLabel)}</p>
            <h3>${escapeHtml(task.title)}</h3>
            <div class="task-meta">
              <span>Due: ${escapeHtml(task.due)}</span>
            </div>
            <p>${escapeHtml(task.details)}</p>
            ${renderAssignees(task.assignees)}
          </div>
          <div class="task-controls">
            <label class="task-select">
              Status
              <select data-task-status-id="${escapeAttr(task.id)}">
                ${["not-started", "in-progress", "complete"]
                  .map(
                    (status) =>
                      `<option value="${status}" ${status === task.status ? "selected" : ""}>${formatStatus(status)}</option>`
                  )
                  .join("")}
              </select>
            </label>
            <div class="task-actions">
              <button class="button text-button" type="button" data-edit-task="${escapeAttr(task.id)}">Edit</button>
              <button class="danger-button subtle" type="button" data-delete-task="${escapeAttr(task.id)}">Delete</button>
            </div>
          </div>
        </article>
      `;
    })
    .join("")
    : `<div class="empty-state">No tasks match the current workboard filters.</div>`;

  els.taskList.querySelectorAll("[data-task-status-id]").forEach((select) => {
    select.addEventListener("change", () => {
      updateTaskStatus(select.dataset.taskStatusId, select.value);
      renderWorkboard();
    });
  });

  els.taskList.querySelectorAll("[data-edit-task]").forEach((button) => {
    button.addEventListener("click", () => openTaskDialog(button.dataset.editTask));
  });

  els.taskList.querySelectorAll("[data-delete-task]").forEach((button) => {
    button.addEventListener("click", () => requestTaskDelete(button.dataset.deleteTask));
  });
}

function renderTimeline() {
  els.timeline.innerHTML = timeline
    .map((item, index) => {
      const pilot = pilots.find((entry) => entry.id === item.track);
      const trackLabel = item.track === "all" ? "Portfolio" : pilot?.label || item.track;
      return `
        <article class="timeline-item">
          <div class="timeline-index">${String(index + 1).padStart(2, "0")}</div>
          <div>
            <p class="task-track">${escapeHtml(trackLabel)} | ${escapeHtml(item.window)}</p>
            <h3>${escapeHtml(item.phase)}</h3>
            <p>${escapeHtml(item.copy)}</p>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderOutcomes() {
  els.outcomeList.innerHTML = outcomes
    .map((outcome, index) => {
      return `
        <article class="outcome-item">
          <span>${index + 1}</span>
          <p>${escapeHtml(outcome)}</p>
        </article>
      `;
    })
    .join("");
}

function renderGuide() {
  const query = state.guideSearch;
  const filtered = guideSections
    .map((section) => {
      if (!query) return section;
      const titleMatches = section.title.toLowerCase().includes(query);
      const itemMatches = section.items.filter((item) => item.toLowerCase().includes(query));
      return { ...section, items: titleMatches ? section.items : itemMatches };
    })
    .filter((section) => section.items.length);

  els.guideGrid.innerHTML = filtered.length
    ? filtered
        .map(
          (section) => `
            <details class="guide-card" open>
              <summary>${highlightMatch(section.title, query)}</summary>
              <ul>
                ${section.items.map((item) => `<li>${highlightMatch(item, query)}</li>`).join("")}
              </ul>
            </details>
          `
        )
        .join("")
    : `<div class="empty-state">No guide sections match that search.</div>`;
}

function renderGovernance() {
  els.guardrailList.innerHTML = guardrails.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  els.roleList.innerHTML = roles
    .map(
      (role) => `
        <div class="role-row">
          <span>${escapeHtml(role.label)}</span>
          <strong>${escapeHtml(role.value)}</strong>
        </div>
      `
    )
    .join("");

  const budget = budgets[state.budgetMode] || budgets.mvp;
  const total = budget.items.reduce((sum, [, amount]) => sum + amount, 0);
  const max = Math.max(...budget.items.map(([, amount]) => amount));
  els.budgetList.innerHTML = `
    <p class="budget-note">${escapeHtml(budget.note)}</p>
    ${budget.items
      .map(([label, amount]) => {
        const width = Math.max(8, Math.round((amount / max) * 100));
        return `
          <div class="budget-row">
            <div>
              <span>${escapeHtml(label)}</span>
              <strong>${formatMoney(amount)}</strong>
            </div>
            <div class="budget-bar" aria-hidden="true"><span style="width:${width}%"></span></div>
          </div>
        `;
      })
      .join("")}
    <div class="budget-total">
      <span>${escapeHtml(budget.label)}</span>
      <strong>${formatMoney(total)}</strong>
    </div>
  `;
}

function renderAssignees(assignees = []) {
  const names = assignees.filter(Boolean);
  if (!names.length) return `<div class="assignee-row muted-row">Unassigned</div>`;
  return `
    <div class="assignee-row" aria-label="Assigned people">
      ${names.map((name) => `<span>${escapeHtml(name)}</span>`).join("")}
    </div>
  `;
}

function getKnownAssignees() {
  const assignees = new Set([
    "Gary Graves",
    "Hongling Yang",
    "Don Daves-Rougeaux",
    "Alicia Cardenas",
    "Donnell Layne",
    "Jackie Hester",
    "Savanna McDada",
    "Student Services",
    "WEDD",
    "COCI API Access",
    "CPL API Access",
    "CCCCO Datamart API",
  ]);
  state.tasks.forEach((task) => (task.assignees || []).forEach((name) => assignees.add(name)));
  return [...assignees].sort((a, b) => a.localeCompare(b));
}

function setAssigneePicker(assignees = []) {
  const selected = new Set(assignees.map(cleanText).filter(Boolean));
  const known = new Set(getKnownAssignees());
  els.assigneeOptions.querySelectorAll('input[type="checkbox"]').forEach((input) => {
    input.checked = selected.has(input.value);
  });
  els.taskOtherAssigneesInput.value = [...selected].filter((name) => !known.has(name)).join(", ");
}

function readAssigneePicker() {
  const selected = [...els.assigneeOptions.querySelectorAll('input[type="checkbox"]:checked')].map(
    (input) => input.value
  );
  return dedupeNames([...selected, ...splitAssignees(els.taskOtherAssigneesInput.value)]);
}

function dedupeNames(names) {
  const seen = new Set();
  return names.filter((name) => {
    const cleanName = cleanText(name);
    const key = cleanName.toLowerCase();
    if (!cleanName || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function openTaskDialog(taskId = "") {
  const task = state.tasks.find((item) => item.id === taskId);
  state.editingTaskId = task?.id || "";
  els.taskDialogTitle.textContent = task ? "Edit task" : "Add task";
  els.deleteTaskButton.hidden = !task;
  els.taskIdInput.value = task?.id || "";
  els.taskTitleInput.value = task?.title || "";
  els.taskTrackInput.value = task?.track || "all";
  els.taskStatusInput.value = task?.status || "not-started";
  els.taskDueInput.value = task?.due || "";
  setAssigneePicker(task?.assignees || []);
  els.taskDetailsInput.value = task?.details || "";
  els.taskDialog.showModal();
  els.taskTitleInput.focus();
}

function closeTaskDialog() {
  state.editingTaskId = "";
  els.taskDialog.close();
}

function saveTaskFromForm(event) {
  event.preventDefault();
  const task = normalizeTask({
    id: els.taskIdInput.value || createTaskId(),
    title: els.taskTitleInput.value,
    track: els.taskTrackInput.value,
    status: els.taskStatusInput.value,
    due: els.taskDueInput.value,
    assignees: readAssigneePicker(),
    details: els.taskDetailsInput.value,
  });

  if (!task.title) return;

  const index = state.tasks.findIndex((item) => item.id === task.id);
  if (index >= 0) {
    state.tasks[index] = task;
  } else {
    state.tasks.push(task);
  }

  saveTasks();
  hydrateTaskFormOptions();
  renderWorkboard();
  closeTaskDialog();
}

function updateTaskStatus(taskId, status) {
  const task = state.tasks.find((item) => item.id === taskId);
  if (!task) return;
  task.status = status;
  saveTasks();
}

function requestCurrentTaskDelete() {
  if (!state.editingTaskId) return;
  requestTaskDelete(state.editingTaskId);
}

function requestTaskDelete(taskId) {
  const task = state.tasks.find((item) => item.id === taskId);
  if (!task) return;
  state.pendingDeleteTaskId = task.id;
  els.confirmTitle.textContent = "Delete this task?";
  els.confirmMessage.textContent = `"${task.title}" will be removed from the workboard. This only affects the task list saved in this browser.`;
  els.confirmDialog.showModal();
  els.confirmDeleteButton.focus();
}

function closeDeleteDialog() {
  els.confirmDialog.close("cancel");
}

function confirmDeleteTask() {
  const taskId = state.pendingDeleteTaskId;
  if (!taskId) return;
  if (state.editingTaskId === taskId && els.taskDialog.open) closeTaskDialog();
  state.tasks = state.tasks.filter((task) => task.id !== taskId);
  state.pendingDeleteTaskId = "";
  saveTasks();
  hydrateTaskFormOptions();
  renderWorkboard();
  els.confirmDialog.close("delete");
}

function loadTasks() {
  try {
    const stored = JSON.parse(localStorage.getItem(taskStoreKey) || "null");
    if (Array.isArray(stored)) return stored.map(normalizeTask).filter((task) => task.title);
  } catch {
    localStorage.removeItem(taskStoreKey);
  }

  const oldStatuses = loadOldTaskStatuses();
  return defaultTasks.map((task) =>
    normalizeTask({
      ...task,
      status: oldStatuses[task.id] || task.status,
    })
  );
}

function saveTasks() {
  localStorage.setItem(taskStoreKey, JSON.stringify(state.tasks, null, 2));
}

function loadOldTaskStatuses() {
  try {
    return JSON.parse(localStorage.getItem(oldStatusKey) || "{}") || {};
  } catch {
    return {};
  }
}

function normalizeTask(task) {
  const status = ["not-started", "in-progress", "complete"].includes(task.status) ? task.status : "not-started";
  const track = ["all", ...pilots.map((pilot) => pilot.id)].includes(task.track) ? task.track : "all";
  return {
    id: cleanText(task.id) || createTaskId(),
    title: cleanText(task.title),
    track,
    status,
    due: cleanText(task.due) || "Unscheduled",
    assignees: Array.isArray(task.assignees) ? task.assignees.map(cleanText).filter(Boolean) : splitAssignees(task.assignees),
    details: cleanText(task.details),
  };
}

function splitAssignees(value) {
  return String(value || "")
    .split(",")
    .map((name) => cleanText(name))
    .filter(Boolean);
}

function highlightMatch(value, query) {
  const safeValue = escapeHtml(value);
  if (!query) return safeValue;
  const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return safeValue.replace(new RegExp(`(${escapedQuery})`, "gi"), "<mark>$1</mark>");
}

function cleanText(value) {
  return typeof value === "string" ? value.trim() : value == null ? "" : String(value).trim();
}

function createTaskId() {
  if (crypto.randomUUID) return crypto.randomUUID();
  return `task-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function formatStatus(status) {
  return status
    .split("-")
    .map((part) => part[0].toUpperCase() + part.slice(1))
    .join(" ");
}

function formatMoney(amount) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[char];
  });
}

function escapeAttr(value) {
  return escapeHtml(value);
}

init();
