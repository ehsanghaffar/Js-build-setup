import parse from 'acorn';

function checkCode(code) {
  try { parse(code); return 'OK'}
  catch (e) { return e.toString(); }
}

checkCode()