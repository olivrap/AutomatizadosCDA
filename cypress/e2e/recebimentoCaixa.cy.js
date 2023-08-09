/// <reference types="Cypress" />

//nome do arquivo com dados importantes para o fluxo
const filename = 'cypress/downloads/dataRecebimentoCaixa.json';
const dayjs = require('dayjs'); // função para pegar o dia de hoje


var amostra ;
var lote ;
let numEtiqueta ;

describe('Login - My Pardini', () => {
    it('Login - My Pardini', () => {
        cy.on('uncaught:exception', () => false);
        //refresh my DataFile
        cy.writeFile(filename, {  });

        //cy.visit('http://172.19.231.19:8080/mypardini/faces/login.xhtml');
        cy.visit('http://172.19.231.19:8080/mypardini/faces/pages/dashboard.xhtml')
        cy.get('#onetrust-accept-btn-handler').type('{enter}');
        cy.get('#loginForm\\:form-username').type('gabriel.tureck');
        cy.get('#loginForm\\:form-password').type('Balu1006,,');
        cy.get('.ui-button-text').type('{enter}');
        cy.get('#convenioFilialFormId\\:pesCodigo').type('6408').type('{enter}');
        cy.get('#convenioFilialFormId\\:dtListaId_data > .ui-widget-content > :nth-child(1)').click();
        //cy.get('.usuarioFotoIcon').click()
        cy.wait(500)
        cy.get(':nth-child(1) > .ui-submenu-link').click()
        cy.wait(1000)
        cy.get('.ui-menuitem-active > .ui-widget-content > :nth-child(1) > .ui-menuitem-link > .ui-menuitem-text').click()
      
        //Acesso ao MySEVI
        cy.get('#novoPedido > .MuiButton-label').click();
        cy.contains('Pedidos Próprios').click();
        cy.contains('Nome do paciente').click().type('RAFAEL-QA Cypress Testing Automation');
        cy.wait(100)
        //cy.get('#genero > .css-1mrvvgb-control > .css-1hwfws3 > .css-lcobns').click()
        //cy.contains('Gênero').click().type('{enter}')
        //cy.get('.css-1raykwf-control > .css-1hwfws3').click({force: true})
        cy.get('#genero > .css-1mrvvgb-control > .css-1hwfws3 > .css-lcobns').click({force: true})
        //cy.get('#genero > .css-1raykwf-control > .css-1hwfws3 > .css-lcobns').click()
        //cy.wait(100)
        //cy.get('#react-select-3-option-1').click()
        //cy.wait(1000);
        //cy.get('#genero > .css-1mrvvgb-control > .css-1hwfws3 > .css-lcobns').click({force: true});
        //cy.get('.css-1raykwf-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer').click()
        //cy.contains('Gênero').click()
       // cy.get('.css-1oesuo1-control > .css-1hwfws3 > .css-lcobns').click()
        //cy.wait(1000);
        //cy.contains('Masculino').click();
        //cy.get('#react-select-3-option-1').click()
        
        
        //cy.get('#dataNascimento').click().type('09021987');

        //cy.get('#dataColeta').type('07082023');
        //cy.get('#horaColeta').type('1500');
      
      
      
      })
})
        
describe('Incluindo novo pedido - MySEVI', () => {
    it.skip('inclusao de novo pedido', () => {
        // tem que pegar o sessionID 
        //cy.visit('http://dotnethml.hermespardini.com.br/mysevin/?sessionId=acf4c980-315c-ac0d-1280-81d49a10c7fc');
        //cy.visit('http://dotnethml.hermespardini.com.br/mysevin/?sessionId=52195023-593d-b6b7-e377-dbb2542de74f');
        //cy.visit('http://dotnethml.hermespardini.com.br/mysevin/?sessionId=1e785e5d-fd4d-b35a-b696-325baef70ca1');
        //
        //cy.visit('http://dotnethml.hermespardini.com.br/mysevin/?sessionId=d04fe26a-7945-a9f4-c81d-c44e768fe3a4');
        cy.visit('http://dotnethml.hermespardini.com.br/mysevin/?sessionId=1b6a0dbd-40d0-88ee-dbb3-cf989e2cd49e');
        cy.wait(2000);
        cy.get('#novoPedido > .MuiButton-label').click();
        cy.contains('Pedidos Próprios').click();
        cy.contains('Nome do paciente').click().type('RAFAEL-QA Cypress Testing Automation');
        cy.wait(1000);
        cy.get('#genero > .css-1mrvvgb-control > .css-1hwfws3').click({force: true});
        cy.contains('Masculino').click();

        cy.get('#dataNascimento').click().type('09021987');

        cy.get('#dataColeta').type(15062023);
        cy.get('#horaColeta').type('1500');


        cy.get('#prosseguirParaExames').click();
        cy.wait(2000)

        cy.get('#react-select-7-input').type('FEZES', {force: true});
        cy.contains('ZONULI-F ZONULINA, FEZES').click({force: true});
        
         
        cy.wait(2000);
        cy.get('#botaoIncluirExame').click({force: true});
        cy.wait(2000)

        cy.get('#enviarLote > .MuiButton-label').click({force: true});
        cy.wait(2000);

         
        //imprime lote ('precisam de ID nos elementos')
        cy.get(':nth-child(2) > .MuiButtonBase-root > .MuiButton-label').click({force: true});
        cy.wait(5000);
          //cy.get(':nth-child(1) > :nth-child(2) > .jss1161').invoke('text').then(text => {
          cy.get(':nth-child(1) > :nth-child(2) > .jss1126').invoke('text').then(text => {
          let part1 = text.substring(0, 3);
          let part2 = text.substring(4,11);  
          
          amostra = part1+part2+'01';
          cy.readFile(filename).then((obj)=>{
            obj.amostra = amostra;
            cy.writeFile(filename, obj)
          })
          cy.log(amostra);
        
        });
    }) 
  })


  describe('Criar Lote - My Pardini', () => {
    it.skip('Logar e Criar Lote', () => {
        cy.visit('http://172.19.231.19:8080/mypardini/faces/login.xhtml');
        cy.get('#onetrust-accept-btn-handler').type('{enter}');
        cy.get('#loginForm\\:form-username').type('gabriel.tureck');
        cy.get('#loginForm\\:form-password').type('Balu1006,,');
        cy.get('.ui-button-text').type('{enter}');
        cy.get('#convenioFilialFormId\\:pesCodigo').type('6408').type('{enter}');
        cy.get('#convenioFilialFormId\\:dtListaId_data > .ui-widget-content > :nth-child(1)').click();
        
        // alguns elementos abaixo precisam de id para melhorar
        cy.visit('http://172.19.231.19:8080/mypardini/faces/pages/onboarding/geralote2.xhtml');
        cy.get('#frmListaId\\:tipoLoteId > :nth-child(1) > .ui-g-12 > .ui-radiobutton > .ui-radiobutton-box > .ui-radiobutton-icon').click();
        cy.wait(500)
        cy.get('#frmListaId\\:conservacaoId > :nth-child(2) > .ui-g-12 > .ui-radiobutton > .ui-radiobutton-box > .ui-radiobutton-icon').click();

        cy.wait(500);
        var amostraValue;
        cy.readFile(filename).then((data) => {
          amostraValue = data.amostra;
          cy.log(data.amostra);
          //cy.log(String(amostraValue));
          cy.get('#frmListaId\\:amostraId').type(data.amostra);
          cy.wait(1000);
         });

        
        cy.get('#frmListaId\\:j_idt118 > .ui-button-text').click();
        cy.wait(1000);
        cy.get('#frmListaId\\:geraLoteId > .ui-button-text').click();
        
        cy.wait(1000);
        cy.get('#frmDlgId\\:temperatura').type('0');
        cy.get('#frmDlgId\\:j_idt141 > .ui-button-text').click();

        cy.get('.ui-growl-message > p').invoke('text').then(text => {
          let partLote = text.substring(8, 20);
              lote = partLote;
            cy.log('Num de lote gerado '+lote);

            cy.readFile(filename).then((data) => {
              data.lote = lote
              cy.writeFile(filename, data)
            })
        });
    })
})

  describe('Criar caixa - Onboarding', () => {
    it.skip('Onboarding->Login->CriarCaixa', () => {
      
      cy.on('uncaught:exception', () => false);
      cy.visit('http://webhomol.hermespardini.com.br:9085/onboarding/faces/login.xhtml')
      cy.get('#loginForm\\:form-username').type('gabriel.tureck');
      cy.get('#loginForm\\:form-password').type('Balu1006,,');
     
      cy.get('#loginForm\\:j_idt28 > .ui-button-text').click();
      cy.wait(2000);
      cy.get(':nth-child(4) > .ui-submenu-link').click();
      cy.wait(2000);

      cy.visit('http://webhomol.hermespardini.com.br:9085/onboarding/faces/pages/geraloteetiquetascaixa.xhtml?podeAlterar=true&podeExcluir=true&podeIncluir=true&podeVisualizar=true');
     // cy.get(':nth-child(4) > .ui-submenu-link').contains('Etiquetas de Caixa');
      cy.wait(2000);

      cy.get('#frmListaId\\:btnPesqSeqEtqBase > .ui-button-text').click();
      cy.wait(2000);

      cy.get('#frmListaId\\:dtListaId\\:0\\:newButton > .ui-button-icon-left').click();
      cy.wait(2000);

      cy.get('#insertEditDialogFormId\\:qtdEtq').clear().type('1');
      cy.wait(2000);

      cy.get('#insertEditDialogFormId\\:btnGerar > .ui-button-text').click();
      cy.wait(2000);

      //pegar numero de etiqueta criado para depois consolidar caixa.
      cy.get('.ui-selectlistbox-item').invoke('text').then(text => {
          //let numEtiquetaNova = text;
            numEtiqueta = text;
            cy.readFile(filename).then((data) => {
              data.etiqueta = text
              cy.writeFile(filename, data)
            })
            cy.log('Num de etiqueta gerado '+numEtiqueta);
      });
          cy.wait(2000);
          
          cy.get('#insertEditDialogFormId\\:btnCancelar > .ui-button-text').click();
          cy.wait(2000);
      
          cy.visit('http://webhomol.hermespardini.com.br:9085/onboarding/faces/pages/listaconsolidarcaixa.xhtml?podeAlterar=true&podeExcluir=true&podeIncluir=true&podeVisualizar=true&funcionalidadeLog=');
          cy.wait(2000);
      
          cy.readFile(filename).then((data) => {
              cy.get('#codCaixa').type(data.etiqueta+'{enter}');
          });
           // cy.get('#codCaixa').type(numEtiqueta+'{enter}');


          cy.get('#destinoNto_label').click();
          cy.get('#destinoNto_2').click();
          cy.get('#observacao').type('CYPRESS - Caixa gerada via teste automatizado');
          cy.wait(2000);

          cy.get('#btnConsolidar > .ui-button-text').click();
          cy.wait(2000);
          
          cy.readFile(filename).then((data) => {

            cy.log('Codigo do lote a ser inserido '+data.lote);
            cy.wait(2000);
            cy.get('#codLote').type(data.lote+'{enter}');
            //cy.get('#codLote').type(data.lote);
          })

          cy.wait(2000);
          cy.get('#tempRefrigerado').type('0');
          cy.wait(2000);
          cy.get('#btnFinalizar').click();
    })
  })

  
  describe('Lis Pardini - Recebimento de amostra', () => {
   it.skip('Login->Recebimento de Amostra', () => {
        //cy.visit('https://lishomol.grupopardini.com.br/HPardini.Basico.Pagina.Login.cls');
        cy.visit('https://lishomol.grupopardini.com.br/');
        cy.get('#control_14').type('gabriel.tureck');
        cy.get('#control_16').type('Balu1006,,');
        cy.get('#control_16').type('{enter}');
        cy.wait(2000);

        cy.get('.principal').click();
        cy.wait(2500);

        cy.get('#iconMenu').click();
        cy.wait(2500);


        cy.get('#pMenu').type('amostras{enter}');
        cy.wait(2500);


        cy.get('#lnkMenu-menuPré\\ Analitico-HPardini\\.PreAnaliticoBE\\.Pagina\\.RecebimentoAmostras\\.cls').click();
        cy.wait(2500);

        //cy.frameLoaded('#iframe_41');
        cy.frameLoaded('iframe[id=iframe_41]');
        cy.iframe('iframe[id=iframe_41]')
          .find('input[id=cellProduction]').type('10446355088124');// numero fixo
          cy.wait(2500);
          cy.iframe('iframe[id=iframe_41]')
          .find('button[type=submit]').click();

          //código para receber a amostra
          cy.readFile(filename).then((data) => {
          cy.iframe('iframe[id=iframe_41]')
              .find('input[id=sampleCode]').type(data.amostra+'{enter}');// código da amostra
          });
         
          cy.wait(2500);
          cy.iframe('iframe[id=iframe_41]')
            .find('button[class="sc-cwHptR lmoBcf"]').click();
          cy.wait(2500);
          
          //tentar achar novamente a amostra
          cy.readFile(filename).then((data) => {
            cy.iframe('iframe[id=iframe_41]')
              .find('input[id=sampleCode]').type(data.amostra+'{enter}');// código da amostra 
            });
            cy.wait(2000)

            cy.iframe('iframe[id=iframe_41]')
              .contains('Rastreabilidade').click();
            
            cy.wait(2000)

            //abrindo o iframe rastreabilidade dentro do iframe_41 e checando recebdimento
            cy.iframe('iframe[id=iframe_41]').within(() => {
              cy.iframe('iframe[title=Rastreabilidade]')
              .find('button[class="sc-ezzafa ciMrnO"]').click();

              //checagem de mensaegm de recebimento, se nao existir vai quebrar o teste
              cy.iframe('iframe[title=Rastreabilidade]')
                .contains('62 - Recebimento do material B2B');
              
              cy.wait(500);

              //checagem de mensaegm de recebimento, se nao existir vai quebrar o teste
              cy.iframe('iframe[title=Rastreabilidade]')
                .contains('70 - Recepcao/Coleta');
              
              cy.wait(500);   
            })

            //FECHA A RASTREABILIDADE E INICIA nova jornada
            cy.get('#iconMenu').click();
            cy.wait(1000);


            cy.get('#pMenu').clear();
            cy.wait(500);
            cy.get('#pMenu').type('caixas{enter}');
            cy.wait(2500);


            cy.get('#lnkMenu-menuPré\\ Analitico-HPardini\\.PreAnaliticoBE\\.Pagina\\.RecebimentoCaixas\\.cls').click();
            cy.wait(5000);
            
            cy.readFile(filename).then((data) => {
              cy.iframe('iframe[id=iframe_41]')
                .find('input[id=boxCode]').type(data.etiqueta+'{enter}');// código da etiqueta
              });
              cy.wait(2000)
            //
            cy.iframe('iframe[id=iframe_41]')
              .find('input[id=frozen]').type('0',{force:true});
            
            cy.iframe('iframe[id=iframe_41]')
              .find('button[class="sc-cwHptR iUbMTM"]').click();
        
    })
  })

  describe('Consultar Evento - Onboarding', () => {
    it.skip('Onboarding->Login->CokipitCDA', () => {

      cy.on('uncaught:exception', () => false);
      cy.visit('http://webhomol.hermespardini.com.br:9085/onboarding/faces/login.xhtml')
      cy.get('#loginForm\\:form-username').type('gabriel.tureck');
      cy.get('#loginForm\\:form-password').type('Balu1006,,');
      cy.get('#loginForm\\:j_idt28 > .ui-button-text').click();
      
      //cy.visit('http://webhomol.hermespardini.com.br:9085/onboarding/faces/pages/main.xhtml');
      cy.wait(4000);
      cy.get(':nth-child(5) > .ui-submenu-link').click();
      cy.wait(2000);
      cy.visit('http://webhomol.hermespardini.com.br:9085/onboarding/faces/pages/cockpitcda.xhtml?podeAlterar=true&podeExcluir=true&podeIncluir=true&podeVisualizar=true&funcionalidadeLog=');
      cy.wait(2000);
      cy.get('#frmListaId\\:calDataInicial_input').click();
      cy.wait(2000);
      cy.get('input[name="frmListaId:calDataInicial_input"]').type(dayjs().format('DD/MM/YYYY'), {force:true});
      cy.wait(2000);
      cy.get('input[name="frmListaId:calDataFinal_input"]').type(dayjs().format('DD/MM/YYYY'), {force:true});
      cy.wait(2000);
      cy.get('#frmListaId\\:btnPesquisar > .ui-button-text').click();
      cy.wait(2000);

      cy.readFile(filename).then((data) => {
        cy.get('#frmListaId\\:dtListaId\\:j_idt54\\:filter').type(data.etiqueta+'{enter}');
        cy.wait(2000);
        cy.get('#frmListaId\\:dtListaId_data > .ui-widget-content > :nth-child(4)')
          .contains(data.etiqueta);
      });
      cy.wait(2000);

      //abrir o item
      cy.get('#frmListaId\\:dtListaId\\:0\\:verRastreabilidade > .ui-button-text').click({force:true});
      cy.wait(5000);

      cy.get('input[id="dialogDetalhesFormId:listaDetalhes:j_idt104:filter"]').type('E9',{force:true});

      //
      cy.get('#dialogDetalhesFormId\\:listaDetalhes_data > .ui-widget-content > :nth-child(1)')
        .contains('E9');
      cy.wait(5000);


      cy.get('#dialogDetalhesFormId\\:j_idt115 > .ui-button-text').click({force:true});
      
      //logout e final do fluxo
      cy.get('#logoutForm\\:j_idt24 > .ui-button-text').click({force:true});
      



      //cy.get('table[class="ui-datepicker-calendar"]').type('{enter}');
      //cy.get('#frmListaId\\:calDataInicial_input').click();


    })
  })
  


