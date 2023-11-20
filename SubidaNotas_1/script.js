document.addEventListener("DOMContentLoaded",()=>{
    const calculateBtn=document.getElementById("calculateBtn");
    const resultPara=document.getElementsById("result");

    calculateBtn.addEventListener("click",()=>{
        const jobInput=document.getElementById("jobInput").value.toLowerCase();
        const salary=getSalary(jobInput);
        if(salary !==null){
        resultPara.textContent=`El salario para "${jobInput} es de ${salary} euros`;
        }else{
            resultPara.textContent="No se encuentra el trabajo";
        }
});



function getSalary(job){
    const jobsData=[
        {job:"developer",salary:100000},
        {job:"designer",salary:80000},
        {job:"manager",salary:50000},
        {job:"sales",salary:40000},
        {job:"accountant",salary:30000},
        {job:"hr",salary:20000},
        {job:"teacher",salary:10000},
        {job:"student",salary:0}
       
    ];
    const foundJob=jobsData.find(obj=>obj.title===job);
    return foundJob ? foundJob.salary : null;
}
});