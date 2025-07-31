---
title: The Future of Activism
date: 2025-07-30
summary: My concerns on future pain points in the civil rights space.
tags: [mlops, ethics, privacy, research]
reading_time: 10 min
---
What happens when we can no longer handle the data produced during lawsuits? Handle here means something specific: receive, store, process, and analyze data. When we sue an agency, we eventually enter a process called ‘production’. Here, the defendants must produce records (data) relevant to our requests within the scope of the lawsuit. If I were to sue, for example, a book maker for problematic practices in their writings then the production period of the case might look like the book maker supplying records of books they have created, for example.

When we sued [REDACTED] over infractions related to Law Enforcement Officers’ behaviors we were supplied Terabytes-worth of video footage from Body Wearable Cameras. Any single file would typically be around 100 MB and 10 minutes of footage. In this case, we were looking for either A) Systemic (en aggregate) prejudice or discrimination and B) Individual infringements in a specific interaction. Both of these objectives require investigators doing their due diligence; painstakingly reviewing each and every document, making notes of behaviors and individuals, logging these results, and continuing onward. This is a task that requires literally hundreds of hours just for ingesting the video. Administrative tasks like logging, characterizing, and finding a narrative that supports the case adds an unquantifiable additional burden. All of this with the prerequisite of the investigator being infallible and possessing strong critical thinking skills.

We present this as a legitimate strategy for overwhelming advocacy groups. As the world becomes increasingly data-driven, we expect that any singular advocacy org will be overwhelmed by the literal data that is produced during a case. Presently, organizations find themselves inundated by data, terabytes of it dumped indiscriminately onto those attempting to defend those who are being mistreated by the system. Lawyers then risk squandering the opportunity of pursuing the case 

In order to meet the requirements of the era of data driven business and lawsuits, firms must prepare themselves adequately. Being able to handle and process this data is essential for not only the survival of organizations, but also for the success of the lawsuits. If organizations are unable to handle the data that is produced, they will be forced to adapt in less than ideal ways: contracting agencies at higher costs, passing these cases onto better equipped (and eventually over burdened) firms, or miss critical case details. None of these choices is ideal. 

The hardware cost to keep up is minimal. Agencies do not need to worry about training large language models, generative diffusion models, or complicated inferences. But they do need to be able to run these models, on in house hardware. Local models allow for total governance and strict adherences to any court orders related to the dissemination or viewing of case materials. Utilizing OpenAI, Anthropic’s Claude, or any other third party hosted model is NOT an acceptable practice (and in most cases violates the bar). 

Recommended infrastructure includes an in-house computer with at least one 4k+ series Nvidia GPU, but larger firms or orgs handling more complex cases may wish to adopt an in-house server rack solution. Multiple GPUs will generally allow for faster processing utilizing parallel processing. These will also require additional power, potentially cooling depending on where the technology is placed within the building. OpSec would also require this tech to be in a locked server room with keys available to a few trusted employees. 

Additional considerations are having a system resource engineer. We envision a scenario where different offices (within the same org) may wish to coordinate their efforts in a manner that protects the anonymity of the data.

