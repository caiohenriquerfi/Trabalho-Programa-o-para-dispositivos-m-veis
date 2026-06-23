const faturamentoBruto = 1000; 
const kmRodada = 540;

const precoCombustivel = 5.80;
const consumoCarro = 10; 

const custoCombustivel = (kmRodada / consumoCarro) * precoCombustivel;
const custoAlimentacao = 120; 

const reservaPneuPerKm = 0.05; 
const custoPneu = kmRodada * reservaPneuPerKm;

const seguroSemanal = 114;          
const financiamentoSemanal = 0;   

const totalCustosOperacionais = custoCombustivel + custoAlimentacao + custoPneu + seguroSemanal + financiamentoSemanal;
const lucroLiquidoReal = faturamentoBruto - totalCustosOperacionais;

console.log("=== APP CONTABILIDADEMOTORA ===");
console.log("Relatorio Financeiro da Semana");
console.log("===============================");
console.log(`Faturamento Bruto: R$ ${faturamentoBruto.toFixed(2)}`);
console.log(`KM Rodada na Semana: ${kmRodada} km`);
console.log("-------------------------------");
console.log(`(-) Gasto com Combustivel: R$ ${custoCombustivel.toFixed(2)}`);
console.log(`(-) Alimentacao na Rua: R$ ${custoAlimentacao.toFixed(2)}`);
console.log(`(-) Reserva Troca de Pneus: R$ ${custoPneu.toFixed(2)}`);

if (seguroSemanal > 0) {
    console.log(`(-) Seguro Proporcional: R$ ${seguroSemanal.toFixed(2)}`);
}

if (financiamentoSemanal > 0) {
    console.log(`(-) Parcela Financiamento: R$ ${financiamentoSemanal.toFixed(2)}`);
}


console.log(`TOTAL DE CUSTOS: R$ ${totalCustosOperacionais.toFixed(2)}`);
console.log(`LUCRO LIQUIDO REAL: R$ ${lucroLiquidoReal.toFixed(2)}`);
console.log("===============================");

if (lucroLiquidoReal > 0) {
    console.log("Resultado: Semana lucrativa! Guarde as reservas do carro.");
} else {
    console.log("Resultado: Alerta! Os custos engoliram o lucro. Revise as metas.");
}