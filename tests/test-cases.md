# Test Cases

| # | Test | Expected |
|---|---|---|
|1|Valid report submission|Report is stored and routed|
|2|Missing description|400 validation error|
|3|Invalid zone|400 validation error|
|4|Invalid relevant code|400 validation error|
|5|Duplicate report ID|Mongo unique constraint prevents duplicate|
|6|Chemical keywords|Chemical Spill classification|
|7|Critical urgency|Critical priority/severity|
|8|Available matching handler|Handler assigned|
|9|Full handler|Skipped by routing|
|10|No eligible handler|Escalated queue|
|11|Handler status update|History entry created|
|12|Resolution|Resolved with notes|
|13|Analytics|Counts reflect MongoDB data|
|14|Unauthorized API|401/403|
|15|Mobile layout|Sidebar/table/form adapt|
