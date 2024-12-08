select "customers"."firstName" as "FirstName",
"customers"."lastName" as "LastName",
sum("payments"."amount") as "totalAmount"
from "payments"


join "customers" using("customerId")
group by "customers"."customerId",
"customers"."firstName",
"customers"."lastName"
order by "totalAmount" desc;
