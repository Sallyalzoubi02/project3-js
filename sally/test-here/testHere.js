

function go_to(testId) {
    // تخزين testId في الـ sessionStorage
    sessionStorage.setItem('testId', testId);

    
    // الانتقال إلى صفحة الاختبار
    window.location.href = '../tests/test.html';
}

function go_to_result(testId) {
    // تخزين testId في الـ sessionStorage
    sessionStorage.setItem('resultId', testId);

    
    // الانتقال إلى صفحة الاختبار
    window.location.href = '../../Saja/result/result/result.html';
}


window.onload = () => {
    if (sessionStorage.getItem('iq') == 'true' && sessionStorage.getItem('tech') == 'true' && sessionStorage.getItem('eng') == 'true') {
        document.getElementById('s3').disabled = true;
        document.getElementById('r3').disabled = false;
        document.getElementById('s2').disabled = true;
        document.getElementById('r2').disabled = false;
        document.getElementById('s1').disabled = true;
        document.getElementById('r1').disabled = false;
    } else if (sessionStorage.getItem('tech') == 'true' && sessionStorage.getItem('eng') == 'true') {
        document.getElementById('s3').disabled = true;
        document.getElementById('r3').disabled = false;
        document.getElementById('s2').disabled = true;
        document.getElementById('r2').disabled = false;
    } else if (sessionStorage.getItem('iq') == 'true' && sessionStorage.getItem('eng') == 'true') {
        document.getElementById('s1').disabled = true;
        document.getElementById('r1').disabled = false;
        document.getElementById('s2').disabled = true;
        document.getElementById('r2').disabled = false;
    } else if (sessionStorage.getItem('iq') == 'true' && sessionStorage.getItem('tech') == 'true') {
        document.getElementById('s3').disabled = true;
        document.getElementById('r3').disabled = false;
        document.getElementById('s1').disabled = true;
        document.getElementById('r1').disabled = false;
    } else if (sessionStorage.getItem('iq') == 'true') {
        document.getElementById('s1').disabled = true;
        document.getElementById('r1').disabled = false;
    } else if (sessionStorage.getItem('eng') == 'true') {
        document.getElementById('s2').disabled = true;
        document.getElementById('r2').disabled = false;
    } else if (sessionStorage.getItem('tech') == 'true') {
        document.getElementById('s3').disabled = true;
        document.getElementById('r3').disabled = false;
    }
};
