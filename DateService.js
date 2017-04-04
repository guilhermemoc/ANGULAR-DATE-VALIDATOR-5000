angular.module('starter.services')

.service('DateService', function() {

  var today = moment();
  var diaSelecionado = "";
  
  return {

    // FUNÇÃO QUE VALIDA DATA E ANO NOS INPUTS ======================================================
    validaData: function(data, ano) {
      if (moment(data, 'DD-MM-YYYY').isValid() && moment(data, 'DD-MM-YYYY').format('YYYY') > ano)

      {
        //validação de data para nào permitir abertura de sisnistro em datas futuras
        if (moment(data, 'DD-MM-YYYY') <= today) {
          diaSelecionado = data;
          return true;
        }

      } else {
        return false;
      }
    },
    // FIM =============================================================================================

    // FUNÇÃO QUE VALIDA hora NOS INPUTS
    validaHora: function(hora) {

      horaAtual = moment(today).format('HH:mm');

      if (!moment(hora, 'hh:mm').isValid() || !moment(hora, 'hh:mm').format('hh:mm')) {
        return false;
      } else {
        //validação para não permitir abertura de sisnitro em horários futuros
        if (diaSelecionado == moment(today).format('DDMMYYYY') && hora > horaAtual) {
          return false;
        } else {
          return true;
        }

      }
    },
    // FIM

  }
})
