/**
 * Created by ostrovskij on 05.05.2017.
 */
function GetPifagor(a,b,c) {
    return {cos:(b*b+c*c-a*a)/(2*b*c),sin:a/c,tg:a/b};
}

exports.pifagor = GetPifagor;