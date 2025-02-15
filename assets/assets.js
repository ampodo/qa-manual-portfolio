
import logo from './logo.png';
import arrow_icon from './arrow_icon.png';
import header_background from './header-bg-color.png'
import night from './night.png'
import menu_black from './menu_black.png'
import close_black from './close_black.png'
import hero from './hero.png'
import hand_icon from './hand_icon.png'
import right_arrow_white from './right_arrow_white.png'
import download_icon from './download_icon.png'
import user_image from './user_image.png'
import code_icon from './code_icon.png'
import code_icon_dark from './code_icon_dark.png'
import edu_icon from './edu_icon.png'
import edu_icon_dark from './edu_icon_dark.png'
import project_icon from './project_icon.png'
import project_icon_dark from './project_icon_dark.png'
import git from './git.png'
import mysql from './mysql.png'
import postman from './postman.png'
import mongodb from './mongodb.png'
import vscode from './vscode.png'
import api108 from './api108.png'
import database from './database.png'
import android from './android.png'
import integration from './integration.png'
import right_white_arrow from './right_white_arrow.png'
import mail_icon from './mail_icon.png'

export const assets = {
   
    logo,
    arrow_icon,
    header_background,
    night,
    menu_black,
    close_black,
    hero,
    hand_icon,
    right_arrow_white,
    download_icon,
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    git,
    mysql,
    postman,
    mongodb,
    vscode,
    api108,
    database,
    android,
    integration,
    right_white_arrow,
    mail_icon


};

export const serviceData = [
    { icon: assets.api108, title: 'API testing', description: 'Ready to perform functional testing, validate that the API behaves as expected, write autotests in Postman.'},
    { icon: assets.database, title: 'Database testing', description: 'Capable of testing database functionality, validating data integrity, setting up test data for test cases with SQL.'},
    { icon: assets.android, title: 'Mobile testing', description: 'Can utilize emulator to ensure that the native app meets the highest standards of functionality, user experience, and design consistency.'},
    { icon: assets.integration, title: 'Integration testing', description: 'Able to execute integration testing between all components and develop high priority test cases.'},
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Dev knowledge', description: 'Worked with Git, VSCode, DevTools, JavaScript & React'},
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Certified', description: 'Attained certificate from MYEDU education club in Manual QA' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Real project', description: 'Tested a fully-fledged food delivery service consisting of a website and mobile app' }
];

export const toolsData = [
    assets.git, assets.postman, assets.mysql, assets.mongodb, assets.vscode
];