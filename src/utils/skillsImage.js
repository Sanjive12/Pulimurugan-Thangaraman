import adobeXd from '../assets/svg/skills/adobe-xd.svg'
import adobeaudition from '../assets/svg/skills/adobeaudition.svg'
import bootstrap from '../assets/svg/skills/bootstrap.svg'
import c from '../assets/svg/skills/c.svg'
import cplusplus from '../assets/svg/skills/cplusplus.svg'
import csharp from '../assets/svg/skills/csharp.svg'
import css from '../assets/svg/skills/css.svg'
import dart from '../assets/svg/skills/dart.svg'
import django from '../assets/svg/skills/django.svg'
import firebase from '../assets/svg/skills/firebase.svg'
import git from '../assets/svg/skills/git.svg'
import html from '../assets/svg/skills/html.svg'
import illustrator from '../assets/svg/skills/illustrator.svg'
import java from '../assets/svg/skills/java.svg'
import javascript from '../assets/svg/skills/javascript.svg'
import kotlin from '../assets/svg/skills/kotlin.svg'
import lightroom from '../assets/svg/skills/lightroom.svg'
import mongoDB from '../assets/svg/skills/mongoDB.svg'
import mysql from '../assets/svg/skills/mysql.svg'
import photoshop from '../assets/svg/skills/photoshop.svg'
import php from '../assets/svg/skills/php.svg'
import premierepro from '../assets/svg/skills/premierepro.svg'
import python from '../assets/svg/skills/python.svg'
import react from '../assets/svg/skills/react.svg'
import swift from '../assets/svg/skills/swift.svg'
import figma from '../assets/svg/skills/figma.svg'
import flutter from '../assets/svg/skills/flutter.svg'
import microsoftoffice from '../assets/svg/skills/microsoftoffice.svg'
import picsart from '../assets/svg/skills/picsart.svg'
import sketch from '../assets/svg/skills/sketch.svg'

import canva from '../assets/svg/skills/canva.svg'
import nodejs from '../assets/svg/skills/nodejs.svg'
import ubuntu from '../assets/svg/skills/ubuntu.svg'
import androidstudio from '../assets/svg/skills/androidstudio.svg'


export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'html-5':
            return html;
        case 'photoshop':
            return photoshop;
        case 'illustrator':
            return illustrator;
        case 'adobe xd':
            return adobeXd;
        case 'css-3':
            return css;
        case 'javascript':
            return javascript;
        case 'nodejs':
            return nodejs;
        case 'ubuntu':
            return ubuntu;
        case 'react':
            return react;
        case 'bootstrap':
            return bootstrap;
        case 'mongodb':
            return mongoDB;
        case 'android studio':
            return androidstudio;
        case 'mysql':
            return mysql;
        case 'c':
            return c;
        case 'c++':
            return cplusplus;
        case 'c#':
            return csharp;
        case 'dart':
            return dart;
        case 'java':
            return java;
        case 'kotlin':
            return kotlin;
        case 'php':
            return php;
        case 'python':
            return python;
        case 'swift':
            return swift;
        case 'adobe audition':
            return adobeaudition;
        case 'django':
            return django;
        case 'firebase':
            return firebase;
        case 'git':
            return git;
        case 'lightroom':
            return lightroom;
        case 'premiere pro':
            return premierepro;
        case 'figma':
            return figma;
        case 'flutter':
            return flutter;
        case 'haxe':
        case 'microsoft office':
            return microsoftoffice;
        case 'picsart':
            return picsart;
        case 'sketch':
            return sketch;
        case 'canva':
            return canva;
        default:
            break;
    }
}
