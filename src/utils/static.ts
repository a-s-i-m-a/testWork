import {Calendar, Files, Notes, Roadmap, Tasks} from "../assets/icons";
import {renderColumn, renderTask} from "./utils";

export const STATIC_BOARD = [
    renderColumn('New tasks', [
        renderTask('Check email', '0:20h', 'green'),
        renderTask('Compare PPC agencies and make a report for Steven', '3:00h', 'purple'),
        renderTask('Meeting with Amanda (PR department)', '0:30h', 'green'),
        renderTask("Get Patrick's approval for homepage new design", '0:20h', 'purple'),
    ]),
    renderColumn('Scheduled', [
        renderTask('Check email', '0:20h', 'orange'),
        renderTask('Write a blogpost "7 best strategies for SEO in 2020"', '5:00h', 'red'),
        renderTask('New Ad copies for Manamaja', '2:00h', 'salad'),
    ]),
    renderColumn('In progress', [
        renderTask('Check email', '0:20h', 'orange'),
        renderTask("Record a video comment about last week's analytics report", '0:20h', 'pink'),
        renderTask('Process all resumes for Content Marketer position', '1:00h', 'orange'),
    ]),
    renderColumn(
        'Completed',
        [
            renderTask('Check email', '0:20h', 'red'),
            renderTask('Weekly planning session', '0:45h', 'green'),
            renderTask('Create 5+ target audiences in Facebook for Samsung ...', '2:30h', 'purple'),
            renderTask('Check FB Banner Design and give feedback', '0:20h', 'pink'),
            renderTask('Check email', '0:30h', 'orange'),
        ],
        true,
    ),
];

export const DROPDOWN = [
    ['Board view', 'Table view', 'Kanban'],
    ['Filter', 'Table view', 'Kanban'],
];

export const LINKS = [
    { title: 'Favorites', links: ['Marketing', 'Mobile App'] },
    {
        title: 'My Projects',
        links: ['Marketing', 'Landing Pages', 'Wedding', 'Mobile App', 'House Construction'],
    },
];

export const STATIC_TOOLS = [
    { title: 'Roadmap', Icon: Roadmap },
    { title: 'Schedule', Icon: Calendar, active: true },
    { title: 'Tasks', Icon: Tasks },
    { title: 'Notes', Icon: Notes },
    { title: 'Files', Icon: Files },
];