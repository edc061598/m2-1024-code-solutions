select

"customers"."firstName",
  "customers"."lastName",
  "payments"."amount"
from "customers"

join "payments" on "customers"."customerId" = "payments"."customerId"
 order by "payments"."amount" desc
limit  10;
