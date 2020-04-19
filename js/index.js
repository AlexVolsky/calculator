import {creatInput} from './module';
import {createButton} from './module';
import {createButtonOperator} from './module';
import {createButtonOutput} from './module';
import {createButtonBackspace} from './module';
import {createButtonClear} from './module';
import {createButtonOpenList} from './module';
import {createButtonCloseList} from './module';








creatInput();
createButton ("7");
createButton ("8");
createButton ("9");
createButtonOperator ("/");
createButton ("4");
createButton ("5");
createButton ("6");
createButtonOperator ("*");
createButton ("1");
createButton ("2");
createButton ("3");
createButtonOperator ("+");
createButton (".");
createButton ("0");
createButtonOutput ("=");
createButtonOperator ("-");
createButtonBackspace();
createButtonClear(); 

createButtonOpenList();
createButtonCloseList();


export  const inputCalc = document.querySelector('.account');
export  const resultCalc = document.querySelector('.result');
export  const ListHistory = document.querySelector('.ListHistory');