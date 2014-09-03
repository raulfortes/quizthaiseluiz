
var corrects = 0;
var active_question = 0;

var questions =
     [{
        "question" : "Qual a bebida do casal ?",
        "answers" : {
            "a" : "Cerveja",
            "b" : "Vinho",
            "c" : "Cachaça",
            "d" : "Licor",
            "e" : "Rum"
        },
        "correct" : "a"
    },
     {
        "question" : "Qual a cidade que o casal ira morar ?",
        "answers" : {
            "a" : "São Paulo",
            "b" : "Jacareí",
            "c" : "Santos",
            "d" : "Limeira",
            "e" : "São José dos Campos"
        },
        "correct" : "b"
    },
     {
        "question" : "Qual o time de futebol do casal ?",
        "answers" : {
            "a" : "São Paulo",
            "b" : "Palmeiras",
            "c" : "Santos",
            "d" : "Corinthians",
            "e" : "Flamengo"
        },
        "correct" : "d"
    },
     {
        "question" : "Onde foi o primeiro beijo ?",
        "answers" : {
            "a" : "Show da Ivete Sangalo",
            "b" : "Bar Funil",
            "c" : "No carro",
            "d" : "Pagodão de domingo",
            "e" : "Atras do poste"
        },
        "correct" : "a"
    },
     {
        "question" : "Qual o carro dos sonhos dele ?",
        "answers" : {
            "a" : "Nissan",
            "b" : "Ferrari",
            "c" : "Fusca",
            "d" : "Harley Davidson",
            "e" : "Mercedes (AMG)"
        },
        "correct" : "e"
    },
     {
        "question" : "Ao visita-los o que devo levar ?",
        "answers" : {
            "a" : "Bebidas",
            "b" : "Presentes",
            "c" : "Flores",
            "d" : "Musica",
            "e" : "Nada"
        },
        "correct" : "a"
    },
     {
        "question" : "Quem é o mais romantico ?",
        "answers" : {
            "a" : "Thais",
            "b" : "Luiz",
            "c" : "os dois são iguais",
            "d" : "o Carteiro",
            "e" : "Ninguém"
        },
        "correct" : "a"
    },
     {
        "question" : "Quem mandou o outro a merda primeiro ?",
        "answers" : {
            "a" : "Thais",
            "b" : "Luiz",
            "c" : "a Sogra",
            "d" : "o Sogro",
            "e" : "ainda não aconteceu"
        },
        "correct" : "b"
    },
     {
        "question" : "Qual foi o primeiro a falar sobre casamento ?",
        "answers" : {
            "a" : "Thais",
            "b" : "Luiz",
            "c" : "a Sogra",
            "d" : "o Sogro",
            "e" : "os amigos"
        },
        "correct" : "a"
    },
     {
        "question" : "Onde foi o primeiro encontro ?",
        "answers" : {
            "a" : "No trabalho",
            "b" : "Na rua",
            "c" : "No bar",
            "d" : "Na faculdade",
            "e" : "Na academia"
        },
        "correct" : "d"
    },
     {
        "question" : "Qual a maior loucura que fizeram juntos ?",
        "answers" : {
            "a" : "Viajar",
            "b" : "Casar",
            "c" : "Terminar o namoro",
            "d" : "Perder um churrasco",
            "e" : "Deixar a cerveja esquentar"
        },
        "correct" : "c"
    },
     {
        "question" : "Há quanto tempo, estão juntos ?",
        "answers" : {
            "a" : "3 anos",
            "b" : "5 anos",
            "c" : "7 anos",
            "d" : "9 anos",
            "e" : "a muito tempo"
        },
        "correct" : "d"
    },
     {
        "question" : "Quem é o mais teimoso ?",
        "answers" : {
            "a" : "Thais",
            "b" : "Luiz",
            "c" : "a Porta",
            "d" : "o Cobrador",
            "e" : "os dois"
        },
        "correct" : "b"
    },
     {
        "question" : "Qual a data de aniversário de namoro ?",
        "answers" : {
            "a" : "07 - 05 - 2000",
            "b" : "07 - 03 - 2005",
            "c" : "04 - 07 - 2005",
            "d" : "30 - 11 - 2005",
            "e" : "não tem"
        },
        "correct" : "e"
    },
     {
        "question" : "Qual a comida preferida da Thais ?",
        "answers" : {
            "a" : "Dobradinha",
            "b" : "Feijoada",
            "c" : "Alguma coisa com creme de milho",
            "d" : "Tudo menos creme de milho",
            "e" : "Salada"
        },
        "correct" : "c"
    },
     {
        "question" : "Qual a comida preferida da Thais ?",
        "answers" : {
            "a" : "Dobradinha",
            "b" : "Feijoada",
            "c" : "Alguma coisa com creme de milho",
            "d" : "Tudo menos creme de milho",
            "e" : "Salada"
        },
        "correct" : "b"
    },
     {
        "question" : "Qual é a história mais engraçada do casal ?",
        "answers" : {
            "a" : "Aniversario da Tia",
            "b" : "Corrida pelo parque",
            "c" : "Pediram informação",
            "d" : "Bebados estragaram o jardim da D. Edna",
            "e" : "não tem"
        },
        "correct" : "d"
    },
     {
        "question" : "Quem ronca mais ?",
        "answers" : {
            "a" : "Thais",
            "b" : "Luiz",
            "c" : "o Vizinho",
            "d" : "o Sogro",
            "e" : "não sabem"
        },
        "correct" : "b"
    },
     {
        "question" : "Qual a viagem dos sonhos ?",
        "answers" : {
            "a" : "Praia Grande",
            "b" : "Hawai",
            "c" : "Russia",
            "d" : "República Tcheca",
            "e" : "Haiti"
        },
        "correct" : "d"
    },
     {
        "question" : "Qual a data do casamento ?",
        "answers" : {
            "a" : "20 - 08 - 2014",
            "b" : "20 - 10 - 2014",
            "c" : "27 - 09 - 2014",
            "d" : "27 - 09 - 2015",
            "e" : "já foi"
        },
        "correct" : "c"
    }
     ];


var phrases_success = [
    "A próxima será mais difícil !",
    "Ta achando que conhece o casal !",
    "Boa !",
    "Ah Vá !",
    "Isso ai !",
    "Pode tomar uma para comemorar !"
];

var phrases_fail = [
    "Chutou feio, hein !",
    "Tem certeza que conhece o casal ?",
    "Putz !",
    "Ainda da tempo de pesquisar no Google.",
    "Certeza que recebeu convite do casamento ?",
    "Mais sorte da proxima vez.",
    "Não foi dessa vez.",
    "Mais sorte na proxima.",
    "Precisa de ajuda ?",
    "Quer o telefone da noiva ?",
    "Ja bebeu hoje ?"
];

function get_phrase_sucess() {
    var max = phrases_success.length;
    return phrases_success[randomIntFromInterval(0,max-1)];
}

function get_phrase_fail() {
    var max = phrases_fail.length;
    return phrases_fail[randomIntFromInterval(0,max-1)];
}

function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

function get_photo_url() {
    return "img/thais_luiz_"+randomIntFromInterval(1,26)+".jpg";
}

function init (){
    corrects = 0;
    active_question = 0;

    $('#answer_a').click(function () {
        var btn = $(this);
        process_question('a');
    });

    $('#answer_b').click(function () {
        var btn = $(this);
        process_question('b');
    });

    $('#answer_c').click(function () {
        var btn = $(this);
        process_question('c');
    });

    $('#answer_d').click(function () {
        var btn = $(this);
        process_question('d');
    });

    $('#answer_e').click(function () {
        var btn = $(this);
        process_question('e');
    });

    $('#send_button').click(function () {
        var btn = $(this);
        send_result();
    });

}

function load_question(question_number) {
    active_question = question_number;
    $('#photo').attr("src",get_photo_url());
    $('#active_question').html(active_question+1);
    $('#question_total').html(questions.length);

    $('#question').html(questions[question_number].question);
    $('#answer_a').html(questions[question_number].answers.a);
    $('#answer_b').html(questions[question_number].answers.b);
    $('#answer_c').html(questions[question_number].answers.c);
    $('#answer_d').html(questions[question_number].answers.d);
    $('#answer_e').html(questions[question_number].answers.e);
}

function process_question(answer) {
    var success = false;

    // Verifica se respondeu certo
    if (questions[active_question].correct == answer) {
        corrects = corrects + 1;
        success = true;
    }

    if (active_question == questions.length - 1) {
        show_result();
    } else {

        var phrase = '';
        if (success) {
            phrase = get_phrase_sucess();
        } else {
            phrase = get_phrase_fail();
        }

        $('#message').html(phrase);
        $('#modal').modal('show');
        setTimeout(function() {$('#modal').modal('hide');}, 2000);

        // Carrega proxima
        load_question(active_question + 1);
    }
}

function show_result(){
    $('#quiz_div').hide();

    // Verifica qual msg apresentar e tb a foto
    var total = questions.length;
    var x = 0;
    if (corrects > 0 ) {
        x = ( 100 * corrects ) / total;
    }

    var result_photo = '';
    var result_phrase = '';

    if ( x < 10) {
        // pior
        result_photo = 'img/horror.jpg';
        result_phrase = 'Que horror, só quer saber da festa neh !?';
    } else if (x < 50) {
        // medio
        result_photo = 'img/precisa-estudar-mais.jpg';
        result_phrase = 'Na Média, precisa estudar mais !';
    } else {
        // sucesso
        result_photo = 'img/pronto-casamento.jpg';
        result_phrase = 'Parabéns ! Você realmente conhece o casal.';
    }

    $('#result_phrase').html(result_phrase);
    $('#result_photo').attr("src",result_photo);
    $('#questions_corrects').html(corrects);

    $('#result_div').show();
}

function centerModal() {
    $(this).css('display', 'block');
    var $dialog = $(this).find(".modal-dialog");
    var offset = ($(window).height() - $dialog.height()) / 2;
    // Center modal vertically in window
    $dialog.css("margin-top", offset);
}

$('.modal').on('show.bs.modal', centerModal);
$(window).on("resize", function () {
    $('.modal:visible').each(centerModal);
});

function send_result() {
    name = $('#name').val();
    email = $('#email').val();

    if (name.length < 3 || email.length < 3) {
        alert('Dados invalidos');
        return;
    }

    $.ajax({
        url:'http://thaiseluizcasamento.appspot.com/',
        type:'GET',
        data:{"name":name,"email":email,"points":corrects},
        error:function(jqXHR,text_status,strError){
                alert('no connection');
        },
        timeout:10000,
        success:function(data){
            window.location.href = "ranking.html";
        }
    });
}

function load_ranking() {
    $.ajax({
        url:'http://thaiseluizcasamento.appspot.com/ranking',
        type:'GET',
        dataType:'json',
        error:function(jqXHR,text_status,strError){
                $("#ranking_div").html('no connection');
        },
        timeout:10000,
        success:function(data){
                for(var i in data){
                    num = parseInt(i) + 1;
                    $("#ranking_table tbody").append("<tr><td>"+num+"</td><td>" + data[i].name+ "</td><td>" + data[i].points+"</td></tr>");
                }
        }
    });
}

