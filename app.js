const views = {
  dashboard: 'Home Dashboard',
  notices: 'Notices and Announcements',
  surveys: 'Surveys and Evaluations',
  feedback: 'Feedback and Complaints',
  resources: 'Resource Library',
  qualitybot: 'QualityBot Assistant',
  admin: 'Basic Admin Dashboard',
};

const initialNotices = [
  {
    title: 'Items Now Up for Review',
    category: 'QA Notice',
    message: 'The following are now up for review: Staff Satisfaction Survey, Department Service Survey, academic department quality audits, and the UWI Quality Evaluation Survey Template. Please note all stated deadlines and upcoming UWI quality assurance activities.',
  },
  {
    title: 'Staff Satisfaction Survey Review',
    category: 'QA Notice',
    message: 'The Staff Satisfaction Survey is now up for review. The deadline for completion is May 31, 2026.',
  },
  {
    title: 'Department Service Survey Review',
    category: 'QA Notice',
    message: 'The Department Service Survey is now up for review. The deadline for completion is May 31, 2026.',
  },
  {
    title: 'Academic Department Quality Audits',
    category: 'Audit Update',
    message: 'Quality audits are scheduled for the Mathematics Department, Professional Studies Department, and Modern Languages Department.',
  },
  {
    title: 'UWI Quality Evaluation Survey Template',
    category: 'QA Notice',
    message: 'Submission of the completed UWI Quality Evaluation Survey Template is due June 30, 2026.',
  },
  {
    title: 'Upcoming UWI Quality Assurance Events',
    category: 'Audit Update',
    message: 'Upcoming events include the UWI Quality Assurance Self-Assessment Report and the UWI Quality Assurance Unit visit scheduled for May 17-21, 2027.',
  },
];

const surveys = [
  {
    title: 'Student Satisfaction Survey',
    audience: 'Students',
    due: 'June 14, 2026',
    progress: 64,
  },
  {
    title: 'Staff Satisfaction Survey',
    audience: 'Academic and administrative staff',
    due: 'June 21, 2026',
    progress: 41,
  },
  {
    title: 'Course Evaluation',
    audience: 'Students',
    due: 'June 28, 2026',
    progress: 72,
  },
];

const resources = [
  {
    title: 'Staff Handbook',
    description: 'Staff procedures, professional expectations, appraisal guidance, institutional rules, and employment-related policies.',
    category: 'Handbook',
    url: '#',
    audience: 'staff',
  },
  {
    title: 'Student Handbook',
    description: 'Student rights, responsibilities, conduct, academic guidance, support services, and college procedures.',
    category: 'Handbook',
    url: '#',
    audience: 'all',
  },
  {
    title: 'Student Policies',
    description: 'Access official student-related college policies, procedures, and guidance documents through the Sam Sharpe Teachers’ College SharePoint folder.',
    category: 'Policies',
    url: 'https://samsharpeedu-my.sharepoint.com/:f:/g/personal/quality_assurance_samsharpe_edu_jm/IgA_NiOc1Id7Q4t5hq07TLqvAdVnjjVruW0NMYwVIo6ugpM?e=LbbIpv',
    audience: 'all',
  },
  {
    title: 'Teaching and Learning Manual',
    description: 'Guidance for teaching standards, lesson delivery, learner engagement, assessment practice, and classroom quality.',
    category: 'Manual',
    url: '#',
    audience: 'staff',
  },
  {
    title: 'College Strategic Plan',
    description: 'The college priorities, strategic goals, development targets, and institutional improvement direction.',
    category: 'Plan',
    url: '#',
    audience: 'all',
  },
  {
    title: 'Quality Assurance Manual',
    description: 'Core quality assurance processes, monitoring systems, reporting expectations, audits, evidence, and improvement cycles.',
    category: 'QA Manual',
    url: '#',
    audience: 'staff',
  },
  {
    title: 'College Policies',
    description: 'Approved institutional policies covering academic, administrative, student support, assessment, and operational matters.',
    category: 'Policies',
    url: '#',
    audience: 'all',
  },
  {
    title: 'Human Resource Department Resources',
    description: 'Staff-only resources for human resource procedures, employment guidance, and internal staff support.',
    category: 'Staff Only',
    url: '#',
    audience: 'staff',
  },
];

const botAnswers = [
  {
    keywords: ['complaint', 'complaints', 'concern', 'submit'],
    answer: 'A complaint is a formal way to report a concern that needs review or action. To submit one, go to Feedback, choose Complaint, select the category, write the details, and submit the ticket. You may use the anonymous option if confidentiality is needed. If your college has an official suggestion form link, use the Suggestion Forms button in Feedback.',
  },
  {
    keywords: ['plagiarism', 'integrity', 'misconduct'],
    answer: 'The academic integrity policy explains plagiarism, cheating, unauthorized collaboration, and misuse of sources. Plagiarism means using another person’s words, ideas, or work without proper credit. Students should submit original work, cite sources, and follow assessment instructions. Go to College Resources to open the Academic Integrity Policy or College Policies when the official link is added.',
  },
  {
    keywords: ['assessment', 'grade', 'appeal', 'grading', 'marks'],
    answer: 'The assessment policy explains how assignments, tests, examinations, grading, moderation, feedback, and appeals should be handled. It helps ensure fairness, consistency, and transparency for students and lecturers. Go to College Resources to open the College Policies or Teaching and Learning Manual when the official links are added.',
  },
  {
    keywords: ['attendance', 'absent', 'absence', 'class attendance'],
    answer: 'The attendance policy explains expectations for attending classes, reporting absences, and meeting course requirements. Students should follow the attendance requirements stated by the college and their programme. Go to College Resources to check the Student Handbook or College Policies when the official links are added.',
  },
  {
    keywords: ['data', 'privacy', 'confidential', 'confidentiality', 'protection'],
    answer: 'The data protection and confidentiality policy explains how personal information, student records, staff records, complaints, and survey responses should be handled. Information should be used responsibly and shared only with authorized persons. Go to College Resources to open College Policies when the official link is added.',
  },
  {
    keywords: ['staff handbook', 'appraisal', 'staff policy', 'staff policies'],
    answer: 'The staff handbook explains staff responsibilities, professional expectations, appraisal procedures, institutional rules, and employment-related guidance. Go to College Resources and select Staff Handbook when the official link is added.',
  },
  {
    keywords: ['student handbook', 'student policy', 'student policies', 'student rules'],
    answer: 'The student handbook explains student rights, responsibilities, conduct, support services, academic procedures, and college expectations. Go to College Resources and select Student Handbook when the official link is added.',
  },
  {
    keywords: ['teaching', 'learning', 'manual', 'classroom standards'],
    answer: 'The Teaching and Learning Manual explains expected standards for lesson delivery, learner engagement, assessment practice, classroom quality, and support for student learning. Go to College Resources and select Teaching and Learning Manual when the official link is added.',
  },
  {
    keywords: ['quality assurance', 'qa', 'quality'],
    answer: 'Quality assurance is the process of checking, improving, and maintaining standards across teaching, learning, student support, administration, services, and institutional reporting. It helps students receive better support, helps staff improve practice, and helps management make evidence-based decisions. Use Dashboard for notices, Surveys for evaluations, Feedback for concerns, and College Resources for policies.',
  },
  {
    keywords: ['iso', '21001', 'classroom', 'standards'],
    answer: 'ISO 21001 focuses on learner needs, documented processes, communication, evidence, improvement, and evaluation of educational services. Classroom standards should support accessibility, safety, learning outcomes, and feedback. Go to College Resources for the Quality Assurance Manual or ISO-related documents when the official links are added.',
  },
  {
    keywords: ['j-tec', 'jtec', 'tec'],
    answer: 'J-TEC requirements usually include approved programmes, qualified staff, proper records, assessment controls, student support, institutional policies, and evidence of quality assurance monitoring. Check Notices for review deadlines and College Resources for standards, policies, and manuals when links are added.',
  },
  {
    keywords: ['course report', 'reports', 'due'],
    answer: 'Course reports should be submitted through the department reporting process by the deadline set by the QA Office or department head. Check Notices for due dates and updates. This prototype can later include a Department Reporting Centre with automated reminders.',
  },
  {
    keywords: ['survey', 'evaluation', 'complete'],
    answer: 'To complete a survey, go to Surveys, select the active survey, and submit your responses before the due date. Surveys help the college understand student satisfaction, staff satisfaction, service quality, and areas for improvement.',
  },
  {
    keywords: ['handbook', 'policy', 'policies', 'resource', 'resources', 'where can i find'],
    answer: 'Go to College Resources and search for the handbook, policy, manual, strategic plan, or quality assurance document you need. When the official links are added, click Open Resource to view the document.',
  },
];

const complaintFormUrl = '#';
const noticeVersion = '2026-05-28-uwi-review-notices-v2';
const storedNoticeVersion = localStorage.getItem('eqc_notice_version');
let storedNotices = storedNoticeVersion === noticeVersion ? JSON.parse(localStorage.getItem('eqc_notices')) || [] : [];
let notices = [...initialNotices, ...storedNotices.filter((notice) => !initialNotices.some((item) => item.title === notice.title))];
localStorage.setItem('eqc_notice_version', noticeVersion);
let feedbackTickets = JSON.parse(localStorage.getItem('eqc_feedback')) || [];
let currentUser = JSON.parse(localStorage.getItem('eqc_user')) || { email: '', role: 'guest' };

function saveState() {
  localStorage.setItem('eqc_notices', JSON.stringify(notices));
  localStorage.setItem('eqc_feedback', JSON.stringify(feedbackTickets));
  localStorage.setItem('eqc_user', JSON.stringify(currentUser));
}

function detectUserRole(email) {
  const cleanEmail = email.trim().toLowerCase();
  if (!cleanEmail.endsWith('@samsharpe.edu.jm')) return 'guest';
  const localPart = cleanEmail.split('@')[0];
  return localPart.includes('.') ? 'staff' : 'student';
}

function roleLabel(role) {
  if (role === 'staff') return 'Staff Access';
  if (role === 'student') return 'Student Access';
  return 'Guest Access';
}

function updateAccessState(email) {
  currentUser = {
    email: email.trim().toLowerCase(),
    role: detectUserRole(email),
  };

  document.getElementById('user-email').value = currentUser.email;
  document.getElementById('user-role-label').textContent = roleLabel(currentUser.role);
  document.getElementById('feedback-email').value = currentUser.email;
  document.getElementById('feedback-user-type').value = roleLabel(currentUser.role);

  document.querySelectorAll('#feedback-department option[data-staff-only="true"]').forEach((option) => {
    option.disabled = currentUser.role !== 'staff';
  });

  if (currentUser.role !== 'staff' && document.getElementById('feedback-department').value === 'Human Resource Department') {
    document.getElementById('feedback-department').value = 'Quality Assurance Office';
  }

  saveState();
  renderResources(document.getElementById('resource-search')?.value || '');
}

function setView(viewName) {
  document.querySelectorAll('.view').forEach((view) => view.classList.remove('active-view'));
  document.querySelectorAll('.nav-item').forEach((item) => item.classList.remove('active'));
  document.getElementById(viewName).classList.add('active-view');
  document.querySelector(`[data-view="${viewName}"]`).classList.add('active');
  document.getElementById('page-title').textContent = views[viewName];
}

function renderNotices() {
  const dashboardNotices = document.getElementById('dashboard-notices');
  const noticeList = document.getElementById('notice-list');

  dashboardNotices.innerHTML = notices
    .slice(0, 3)
    .map(
      (notice) => `
        <article class="notice-item">
          <span class="tag">${notice.category}</span>
          <strong>${notice.title}</strong>
          <p>${notice.message}</p>
        </article>
      `,
    )
    .join('');

  noticeList.innerHTML = notices
    .map(
      (notice) => `
        <article class="notice-card">
          <span class="tag">${notice.category}</span>
          <h3>${notice.title}</h3>
          <p>${notice.message}</p>
        </article>
      `,
    )
    .join('');
}

function renderSurveys() {
  document.getElementById('survey-list').innerHTML = surveys
    .map(
      (survey) => `
        <article class="survey-card">
          <span class="tag">${survey.audience}</span>
          <h3>${survey.title}</h3>
          <p>Due: ${survey.due}</p>
          <div class="bar"><span style="width: ${survey.progress}%"></span></div>
          <strong>${survey.progress}% completed</strong>
        </article>
      `,
    )
    .join('');
}

function renderResources(filter = '') {
  const cleanFilter = filter.toLowerCase();
  const visibleResources = resources.filter((resource) => `${resource.title} ${resource.description} ${resource.category}`.toLowerCase().includes(cleanFilter));

  document.getElementById('resource-list').innerHTML = visibleResources
    .map(
      (resource) => {
        const restricted = resource.audience === 'staff' && currentUser.role !== 'staff';
        return `
        <article class="resource-card">
          <span class="tag">${restricted ? 'Staff Only' : resource.category}</span>
          <h3>${resource.title}</h3>
          <p>${resource.description}</p>
          ${
            restricted
              ? '<p class="restricted-note">Restricted resource. Staff email access is required.</p>'
              : `<a class="resource-link" href="${resource.url}" target="_blank" rel="noreferrer" data-resource-link="${resource.title}">Open Resource</a>`
          }
        </article>
      `;
      },
    )
    .join('');

  document.querySelectorAll('[data-resource-link]').forEach((link) => {
    if (link.getAttribute('href') !== '#') return;
    link.addEventListener('click', (event) => {
      event.preventDefault();
      alert(`Add the official link for ${link.dataset.resourceLink} in app.js.`);
    });
  });
}

function renderFeedback() {
  const openCount = feedbackTickets.filter((ticket) => ticket.status !== 'Closed').length;
  document.getElementById('open-feedback-count').textContent = openCount;

  const empty = '<p class="notice-item">No tickets have been submitted yet.</p>';
  const ticketMarkup = feedbackTickets
    .map(
      (ticket) => `
        <article class="ticket-item">
          <div class="ticket-meta">
            <span class="tag">${ticket.id || 'EQC-TICKET'}</span>
            <span class="tag">${ticket.status || 'Open'}</span>
            <span class="tag">${ticket.department || 'Quality Assurance Office'}</span>
            <span class="tag">${ticket.userRole || 'Guest Access'}</span>
          </div>
          <strong>${ticket.type} - ${ticket.category}</strong>
          <p><strong>Service rating:</strong> ${ticket.rating || 'Not rated'}${ticket.rating ? ' out of 5' : ''}</p>
          <p>${ticket.details}</p>
          <p>${ticket.anonymous ? 'Submitted anonymously' : `Contact: ${ticket.contact || ticket.email || 'Not provided'}`} | Submitted: ${ticket.date}</p>
          <div class="ticket-actions">
            <button type="button" data-ticket-status="${ticket.id}" data-status="Open">Open</button>
            <button type="button" data-ticket-status="${ticket.id}" data-status="In Progress">In Progress</button>
            <button type="button" data-ticket-status="${ticket.id}" data-status="Resolved">Resolved</button>
            <button type="button" data-ticket-status="${ticket.id}" data-status="Closed">Closed</button>
          </div>
        </article>
      `,
    )
    .join('');

  document.getElementById('feedback-list').innerHTML = ticketMarkup || empty;
  document.getElementById('admin-feedback-list').innerHTML = ticketMarkup || empty;

  document.querySelectorAll('[data-ticket-status]').forEach((button) => {
    button.addEventListener('click', () => {
      const ticket = feedbackTickets.find((item) => item.id === button.dataset.ticketStatus);
      if (!ticket) return;
      ticket.status = button.dataset.status;
      saveState();
      renderFeedback();
    });
  });
}

function addChatMessage(text, sender = 'bot') {
  const messages = document.getElementById('chat-messages');
  const message = document.createElement('div');
  message.className = `chat-message ${sender}`;
  message.textContent = text;
  messages.appendChild(message);
  messages.scrollTop = messages.scrollHeight;
}

function answerQuestion(question) {
  const cleanQuestion = question.toLowerCase();
  const match = botAnswers.find((item) => item.keywords.some((keyword) => cleanQuestion.includes(keyword)));
  return match
    ? match.answer
    : 'I can help with complaints, surveys, policies, handbooks, ISO 21001, J-TEC, course reports, and QA procedures. Try asking a more specific question.';
}

document.querySelectorAll('[data-view]').forEach((button) => {
  button.addEventListener('click', () => setView(button.dataset.view));
});

document.querySelectorAll('[data-view-jump]').forEach((button) => {
  button.addEventListener('click', () => setView(button.dataset.viewJump));
});

document.getElementById('user-email').addEventListener('input', (event) => {
  updateAccessState(event.target.value);
});

document.getElementById('feedback-email').addEventListener('input', (event) => {
  updateAccessState(event.target.value);
});

document.getElementById('notice-form').addEventListener('submit', (event) => {
  event.preventDefault();
  notices.unshift({
    title: document.getElementById('notice-title').value,
    category: document.getElementById('notice-category').value,
    message: document.getElementById('notice-message').value,
  });
  event.target.reset();
  saveState();
  renderNotices();
});

document.getElementById('feedback-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const feedbackEmail = document.getElementById('feedback-email').value;
  updateAccessState(feedbackEmail);
  if (document.getElementById('feedback-department').value === 'Human Resource Department' && currentUser.role !== 'staff') {
    alert('Human Resource Department feedback is available to staff email access only.');
    return;
  }
  const nextNumber = String(feedbackTickets.length + 1).padStart(4, '0');
  feedbackTickets.unshift({
    id: `EQC-${new Date().getFullYear()}-${nextNumber}`,
    email: currentUser.email,
    userRole: roleLabel(currentUser.role),
    type: document.getElementById('feedback-type').value,
    category: document.getElementById('feedback-category').value,
    department: document.getElementById('feedback-department').value,
    contact: document.getElementById('feedback-contact').value,
    rating: document.getElementById('feedback-rating').value,
    details: document.getElementById('feedback-details').value,
    anonymous: document.getElementById('feedback-anonymous').checked,
    status: 'Open',
    date: new Date().toLocaleDateString(),
  });
  event.target.reset();
  document.getElementById('feedback-email').value = currentUser.email;
  document.getElementById('feedback-user-type').value = roleLabel(currentUser.role);
  saveState();
  renderFeedback();
});

document.getElementById('resource-search').addEventListener('input', (event) => {
  renderResources(event.target.value);
});

document.getElementById('chat-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const input = document.getElementById('chat-input');
  const question = input.value.trim();
  if (!question) return;
  addChatMessage(question, 'user');
  addChatMessage(answerQuestion(question));
  input.value = '';
});

document.querySelectorAll('.question-chip').forEach((button) => {
  button.addEventListener('click', () => {
    addChatMessage(button.textContent, 'user');
    addChatMessage(answerQuestion(button.textContent));
  });
});

renderNotices();
renderSurveys();
updateAccessState(currentUser.email);
renderFeedback();
addChatMessage('Hello. I am QualityBot. Ask me about policies, complaints, surveys, ISO 21001, J-TEC, handbooks, or QA procedures.');

const complaintLink = document.getElementById('complaint-link');
complaintLink.href = complaintFormUrl;
if (complaintFormUrl === '#') {
  complaintLink.addEventListener('click', (event) => {
    event.preventDefault();
    alert('Add your official complaint form link in app.js by replacing complaintFormUrl.');
  });
}
