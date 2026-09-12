# DevOps Interview Lab — 600-Question Hard Pack

Humanized Advanced/Expert scenarios designed around production judgement, troubleshooting, reliability, and architecture trade-offs.

Total questions: **600**

## Architecture and Incident Response

### Q521 — Advanced

You're the senior engineer in an active incident and several technically possible actions are being suggested. For system architecture or incident response, the queue grows continuously. What is the best decision? Which answer would you be comfortable defending to the team, and why?

- A. Assume a queue solves permanent under-capacity
- B. Process messages with non-idempotent side effects
- C. consumer capacity or processing health is insufficient
- D. Retry producers indefinitely without backpressure

**Answer: C**

**Explanation:** The clue to anchor on is the behavior described in the scenario. A queue absorbs bursts but cannot solve permanent under-capacity. In a real incident, verify that signal before making a disruptive change.

---

### Q522 — Advanced

A production failure is spreading across dependencies and the incident commander asks for the safest next move. For system architecture or incident response, a message can be processed twice. What is the best decision? Which answer would you be comfortable defending to the team, and why?

- A. make side effects idempotent
- B. Retry producers indefinitely without backpressure
- C. Process messages with non-idempotent side effects
- D. Assume a queue solves permanent under-capacity

**Answer: A**

**Explanation:** The clue to anchor on is the behavior described in the scenario. At-least-once systems require duplicate-safe consumers. In a real incident, verify that signal before making a disruptive change.

---

### Q523 — Advanced

You're reviewing an architecture decision through the lens of blast radius, recovery, and operational simplicity. For system architecture or incident response, a cache stores negative lookup results briefly. What is the best decision? Which answer would you be comfortable defending to the team, and why?

- A. Treat cache data as automatically durable
- B. this can reduce repeated misses
- C. Expire every hot key at the same time
- D. Ignore stale-data semantics after writes

**Answer: B**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Negative caching protects backends from nonexistent-key storms. In a real incident, verify that signal before making a disruptive change.

---

### Q524 — Advanced

You're the senior engineer in an active incident and several technically possible actions are being suggested. For system architecture or incident response, cache invalidation is delayed after writes. What is the best decision? Which answer would you be comfortable defending to the team, and why?

- A. Expire every hot key at the same time
- B. Treat cache data as automatically durable
- C. users may observe stale data
- D. Ignore stale-data semantics after writes

**Answer: C**

**Explanation:** The clue to anchor on is the behavior described in the scenario. The consistency model must be explicit. In a real incident, verify that signal before making a disruptive change.

---

### Q525 — Expert

A production failure is spreading across dependencies and the incident commander asks for the safest next move. For system architecture or incident response, the cache is treated as the system of record. What is the best decision? Which answer would you be comfortable defending to the team, and why?

- A. Expire every hot key at the same time
- B. Ignore stale-data semantics after writes
- C. data loss can occur unless it is designed as durable storage
- D. Treat cache data as automatically durable

**Answer: C**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Most caches prioritize speed over durability. In a real incident, verify that signal before making a disruptive change.

---

### Q526 — Advanced

You're reviewing an architecture decision through the lens of blast radius, recovery, and operational simplicity. For system architecture or incident response, every instance opens its breaker independently. What is the best decision? Which answer would you be comfortable defending to the team, and why?

- A. Keep the breaker open forever with no probes
- B. Let every layer create an unbounded fallback chain
- C. Retry a failed dependency continuously
- D. recovery traffic may still surge

**Answer: D**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Distributed breakers need jitter, limits, and coordinated capacity awareness. In a real incident, verify that signal before making a disruptive change.

---

### Q527 — Expert

You're the senior engineer in an active incident and several technically possible actions are being suggested. For system architecture or incident response, fallback data is stale but acceptable. What is the best decision? Which answer would you be comfortable defending to the team, and why?

- A. Keep the breaker open forever with no probes
- B. Retry a failed dependency continuously
- C. Let every layer create an unbounded fallback chain
- D. graceful fallback can preserve partial functionality

**Answer: D**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Fallback quality must be explicit to users and operators. In a real incident, verify that signal before making a disruptive change.

---

### Q528 — Advanced

A production failure is spreading across dependencies and the incident commander asks for the safest next move. For system architecture or incident response, a create operation is naturally non-idempotent. What is the best decision? Which answer would you be comfortable defending to the team, and why?

- A. Acknowledge work before durable side effects
- B. Retry non-idempotent operations blindly
- C. design a stable client token or deduplication record
- D. Delete deduplication records immediately

**Answer: C**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Retries are unavoidable in distributed systems. In a real incident, verify that signal before making a disruptive change.

---

### Q529 — Advanced

You're reviewing an architecture decision through the lens of blast radius, recovery, and operational simplicity. For system architecture or incident response, a consumer marks work complete before committing the result. What is the best decision? Which answer would you be comfortable defending to the team, and why?

- A. Delete deduplication records immediately
- B. Retry non-idempotent operations blindly
- C. Acknowledge work before durable side effects
- D. a crash can lose the side effect

**Answer: D**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Ordering and transactional boundaries determine delivery guarantees. In a real incident, verify that signal before making a disruptive change.

---

### Q530 — Advanced

You're the senior engineer in an active incident and several technically possible actions are being suggested. For system architecture or incident response, replicas lag behind the primary. What is the best decision? Which answer would you be comfortable defending to the team, and why?

- A. eventual reads may return stale data
- B. Use one data model for every consistency need
- C. Assume replicas are always current
- D. Require the strongest consistency without accepting latency tradeoffs

**Answer: A**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Replication delay affects consistency. In a real incident, verify that signal before making a disruptive change.

---

### Q531 — Advanced

A production failure is spreading across dependencies and the incident commander asks for the safest next move. For system architecture or incident response, all operations require linearizability. What is the best decision? Which answer would you be comfortable defending to the team, and why?

- A. Use one data model for every consistency need
- B. Assume replicas are always current
- C. latency and availability tradeoffs increase
- D. Require the strongest consistency without accepting latency tradeoffs

**Answer: C**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Strong consistency has coordination cost. In a real incident, verify that signal before making a disruptive change.

---

### Q532 — Expert

You're reviewing an architecture decision through the lens of blast radius, recovery, and operational simplicity. For system architecture or incident response, a counter is updated concurrently in several regions. What is the best decision? Which answer would you be comfortable defending to the team, and why?

- A. Assume replicas are always current
- B. use a design suited to conflict resolution or centralized coordination
- C. Use one data model for every consistency need
- D. Require the strongest consistency without accepting latency tradeoffs

**Answer: B**

**Explanation:** The clue to anchor on is the behavior described in the scenario. The required semantics determine the data model. In a real incident, verify that signal before making a disruptive change.

---

### Q533 — Advanced

You're the senior engineer in an active incident and several technically possible actions are being suggested. For system architecture or incident response, a single-node database is discussed under CAP. What is the best decision? Which answer would you be comfortable defending to the team, and why?

- A. Apply CAP directly to a single local process
- B. Ignore partitions in distributed design
- C. CAP means a system can never be both consistent and available
- D. the larger practical issue may be availability rather than distributed partition tradeoffs

**Answer: D**

**Explanation:** The clue to anchor on is the behavior described in the scenario. CAP is often misapplied outside distributed replication. In a real incident, verify that signal before making a disruptive change.

---

### Q534 — Expert

A production failure is spreading across dependencies and the incident commander asks for the safest next move. For system architecture or incident response, different operations choose different consistency levels. What is the best decision? Which answer would you be comfortable defending to the team, and why?

- A. Ignore partitions in distributed design
- B. Apply CAP directly to a single local process
- C. the system can make per-operation tradeoffs
- D. CAP means a system can never be both consistent and available

**Answer: C**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Real systems often combine models rather than choose one globally. In a real incident, verify that signal before making a disruptive change.

---

### Q535 — Advanced

You're reviewing an architecture decision through the lens of blast radius, recovery, and operational simplicity. For system architecture or incident response, engineers debate root cause while impact continues. What is the best decision? Which answer would you be comfortable defending to the team, and why?

- A. Stop stakeholder updates until resolution
- B. prioritize mitigation and containment first
- C. Allow all responders to make uncoordinated changes
- D. Debate complete root cause before mitigation

**Answer: B**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Restoring service is usually more urgent than complete diagnosis. In a real incident, verify that signal before making a disruptive change.

---

### Q536 — Expert

You're the senior engineer in an active incident and several technically possible actions are being suggested. For system architecture or incident response, status updates stop during a long incident. What is the best decision? Which answer would you be comfortable defending to the team, and why?

- A. Stop stakeholder updates until resolution
- B. Allow all responders to make uncoordinated changes
- C. maintain a communication cadence with known facts and uncertainty
- D. Debate complete root cause before mitigation

**Answer: C**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Stakeholders need reliable operational visibility. In a real incident, verify that signal before making a disruptive change.

---

### Q537 — Advanced

A production failure is spreading across dependencies and the incident commander asks for the safest next move. For system architecture or incident response, the document lists actions without owners or dates. What is the best decision? Which answer would you be comfortable defending to the team, and why?

- A. Mix assumptions into the factual timeline
- B. Create actions without owners
- C. assign accountable owners and due dates
- D. Assign blame to the last operator

**Answer: C**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Unowned lessons rarely become improvements. In a real incident, verify that signal before making a disruptive change.

---

### Q538 — Advanced

You're reviewing an architecture decision through the lens of blast radius, recovery, and operational simplicity. For system architecture or incident response, the same incident repeats. What is the best decision? Which answer would you be comfortable defending to the team, and why?

- A. Assign blame to the last operator
- B. verify whether prior actions were completed and effective
- C. Mix assumptions into the factual timeline
- D. Create actions without owners

**Answer: B**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Action closure should include evidence of risk reduction. In a real incident, verify that signal before making a disruptive change.

---

### Q539 — Advanced

You're the senior engineer in an active incident and several technically possible actions are being suggested. For system architecture or incident response, one AZ fails and remaining AZs cannot carry traffic. What is the best decision? Which answer would you be comfortable defending to the team, and why?

- A. Ignore N-1 failure capacity
- B. Assume autoscaling removes all capacity planning
- C. Plan only from annual average utilization
- D. the service lacks failure-capacity headroom

**Answer: D**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Resilience requires N-1 capacity or rapid scaling. In a real incident, verify that signal before making a disruptive change.

---

### Q540 — Advanced

A production failure is spreading across dependencies and the incident commander asks for the safest next move. For system architecture or incident response, load tests use unrealistic requests. What is the best decision? Which answer would you be comfortable defending to the team, and why?

- A. their capacity conclusions are unreliable
- B. Plan only from annual average utilization
- C. Assume autoscaling removes all capacity planning
- D. Ignore N-1 failure capacity

**Answer: A**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Workload mix and dependency behavior must resemble production. In a real incident, verify that signal before making a disruptive change.

---

### Q541 — Expert

You're reviewing an architecture decision through the lens of blast radius, recovery, and operational simplicity. For system architecture or incident response, growth is 10% monthly. What is the best decision? Which answer would you be comfortable defending to the team, and why?

- A. Ignore N-1 failure capacity
- B. Assume autoscaling removes all capacity planning
- C. Plan only from annual average utilization
- D. forecast compounding demand and lead times

**Answer: D**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Capacity changes may require procurement or quota approval. In a real incident, verify that signal before making a disruptive change.

---

### Q542 — Advanced

You're the senior engineer in an active incident and several technically possible actions are being suggested. For system architecture or incident response, limits are enforced independently on every replica. What is the best decision? Which answer would you be comfortable defending to the team, and why?

- A. Retry 429 responses immediately
- B. Multiply a per-instance limit and call it global
- C. Allow one client to consume all capacity
- D. the effective global limit may multiply with scale

**Answer: D**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Distributed enforcement needs shared state or intentional per-node semantics. In a real incident, verify that signal before making a disruptive change.

---

### Q543 — Expert

A production failure is spreading across dependencies and the incident commander asks for the safest next move. For system architecture or incident response, critical internal traffic competes with bulk jobs. What is the best decision? Which answer would you be comfortable defending to the team, and why?

- A. Allow one client to consume all capacity
- B. use priority classes or separate capacity pools
- C. Retry 429 responses immediately
- D. Multiply a per-instance limit and call it global

**Answer: B**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Not all traffic has equal business importance. In a real incident, verify that signal before making a disruptive change.

---

### Q544 — Advanced

You're reviewing an architecture decision through the lens of blast radius, recovery, and operational simplicity. For system architecture or incident response, an operation is non-idempotent. What is the best decision? Which answer would you be comfortable defending to the team, and why?

- A. do not retry blindly
- B. Use immediate synchronized retries
- C. Retry non-idempotent work without a key
- D. Let every layer retry independently

**Answer: A**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Retries can duplicate side effects. In a real incident, verify that signal before making a disruptive change.

---

### Q545 — Advanced

You're the senior engineer in an active incident and several technically possible actions are being suggested. For system architecture or incident response, every layer retries three times. What is the best decision? Which answer would you be comfortable defending to the team, and why?

- A. Use immediate synchronized retries
- B. total attempts can multiply dramatically
- C. Let every layer retry independently
- D. Retry non-idempotent work without a key

**Answer: B**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Retry ownership and budgets should be coordinated. In a real incident, verify that signal before making a disruptive change.

---

### Q546 — Advanced

A production failure is spreading across dependencies and the incident commander asks for the safest next move. For system architecture or incident response, a dependency times out slowly. What is the best decision? Which answer would you be comfortable defending to the team, and why?

- A. Use unbounded dependency timeouts
- B. use bounded timeouts and fallback behavior
- C. Fail checkout when recommendations fail
- D. Hide stale fallback data when it affects decisions

**Answer: B**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Slow failure can exhaust threads and connection pools. In a real incident, verify that signal before making a disruptive change.

---

### Q547 — Advanced

You're reviewing an architecture decision through the lens of blast radius, recovery, and operational simplicity. For system architecture or incident response, fallback responses look identical to fresh data. What is the best decision? Which answer would you be comfortable defending to the team, and why?

- A. Fail checkout when recommendations fail
- B. indicate staleness when it matters to user decisions
- C. Use unbounded dependency timeouts
- D. Hide stale fallback data when it affects decisions

**Answer: B**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Degradation should not mislead users. In a real incident, verify that signal before making a disruptive change.

---

### Q548 — Expert

You're the senior engineer in an active incident and several technically possible actions are being suggested. For system architecture or incident response, every feature depends synchronously on one personalization service. What is the best decision? Which answer would you be comfortable defending to the team, and why?

- A. Use unbounded dependency timeouts
- B. Fail checkout when recommendations fail
- C. Hide stale fallback data when it affects decisions
- D. the architecture has a broad failure coupling

**Answer: D**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Optional features should not block the critical path. In a real incident, verify that signal before making a disruptive change.

---

### Q549 — Advanced

A production failure is spreading across dependencies and the incident commander asks for the safest next move. For system architecture or incident response, DNS failover TTL is one hour but RTO is ten minutes. What is the best decision? Which answer would you be comfortable defending to the team, and why?

- A. the design may not meet the RTO
- B. Depend on one expert for disaster failover
- C. Keep obsolete runbooks
- D. Treat successful backup jobs as proven recovery

**Answer: A**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Client caching can delay traffic movement. In a real incident, verify that signal before making a disruptive change.

---

### Q550 — Expert

You're reviewing an architecture decision through the lens of blast radius, recovery, and operational simplicity. For system architecture or incident response, a disaster exercise succeeds only with one expert present. What is the best decision? Which answer would you be comfortable defending to the team, and why?

- A. Depend on one expert for disaster failover
- B. Treat successful backup jobs as proven recovery
- C. reduce key-person dependency through automation and training
- D. Keep obsolete runbooks

**Answer: C**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Recovery must be repeatable by the on-call organization. In a real incident, verify that signal before making a disruptive change.

---

## CI/CD

### Q551 — Advanced

A production deployment pipeline is under pressure and the team wants the safest next move. In a CI/CD pipeline, multiple environments pull the same mutable image tag at different times. What is the strongest practice? Which answer would you be comfortable defending to the team, and why?

- A. Trust node image caches to select the intended version
- B. promote one immutable artifact across environments
- C. Reuse latest and delete all Pods before deployment
- D. Rebuild separately in every environment

**Answer: B**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Artifact promotion prevents environment-specific rebuild drift. In a real incident, verify that signal before making a disruptive change.

---

### Q552 — Advanced

You're reviewing a CI/CD failure just before a release window closes. In a CI/CD pipeline, a rollback needs the exact prior container image. What is the strongest practice? Which answer would you be comfortable defending to the team, and why?

- A. Reuse latest and delete all Pods before deployment
- B. Rebuild separately in every environment
- C. record and redeploy the previous digest
- D. Trust node image caches to select the intended version

**Answer: C**

**Explanation:** The clue to anchor on is the behavior described in the scenario. A digest identifies the exact image content. In a real incident, verify that signal before making a disruptive change.

---

### Q553 — Advanced

The pipeline is green in places but the operational risk is still real. In a CI/CD pipeline, a secret is stored in a repository variable but printed by set -x. What is the strongest practice? Which answer would you be comfortable defending to the team, and why?

- A. Base64-encode a permanent access key
- B. Expose production credentials to all pipeline stages
- C. disable command echo and use masked secret handling
- D. Store the same long-lived key in more secret stores

**Answer: C**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Masking cannot protect a value deliberately echoed into logs. In a real incident, verify that signal before making a disruptive change.

---

### Q554 — Advanced

A production deployment pipeline is under pressure and the team wants the safest next move. In a CI/CD pipeline, a pipeline needs database credentials only during one stage. What is the strongest practice? Which answer would you be comfortable defending to the team, and why?

- A. Expose production credentials to all pipeline stages
- B. Store the same long-lived key in more secret stores
- C. scope the secret to that job and environment
- D. Base64-encode a permanent access key

**Answer: C**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Least privilege includes limiting where and when a secret is available. In a real incident, verify that signal before making a disruptive change.

---

### Q555 — Expert

You're reviewing a CI/CD failure just before a release window closes. In a CI/CD pipeline, a shared runner can access production credentials. What is the strongest practice? Which answer would you be comfortable defending to the team, and why?

- A. separate trusted production runners and protected environments
- B. Store the same long-lived key in more secret stores
- C. Base64-encode a permanent access key
- D. Expose production credentials to all pipeline stages

**Answer: A**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Isolation reduces the chance of untrusted jobs accessing privileged credentials. In a real incident, verify that signal before making a disruptive change.

---

### Q556 — Advanced

The pipeline is green in places but the operational risk is still real. In a CI/CD pipeline, a pipeline repeats expensive setup in every job. What is the strongest practice? Which answer would you be comfortable defending to the team, and why?

- A. Use sleep commands instead of dependency edges
- B. Allow deployment to continue after required tests fail
- C. use a controlled cache keyed by dependency lockfile
- D. Run every stage sequentially regardless of dependency

**Answer: C**

**Explanation:** The clue to anchor on is the behavior described in the scenario. A precise key improves speed without reusing incompatible dependencies. In a real incident, verify that signal before making a disruptive change.

---

### Q557 — Expert

A production deployment pipeline is under pressure and the team wants the safest next move. In a CI/CD pipeline, a job fails but downstream jobs still run with partial outputs. What is the strongest practice? Which answer would you be comfortable defending to the team, and why?

- A. Allow deployment to continue after required tests fail
- B. Run every stage sequentially regardless of dependency
- C. Use sleep commands instead of dependency edges
- D. enforce explicit dependencies and fail-fast behavior

**Answer: D**

**Explanation:** The clue to anchor on is the behavior described in the scenario. The DAG should block consumers when required producers fail. In a real incident, verify that signal before making a disruptive change.

---

### Q558 — Advanced

You're reviewing a CI/CD failure just before a release window closes. In a CI/CD pipeline, dependency downloads are slow but can be regenerated. What is the strongest practice? Which answer would you be comfortable defending to the team, and why?

- A. Transfer artifacts through unversioned shared directories
- B. Use a cache as the authoritative release package
- C. Rebuild the package during deployment
- D. use a cache, not a release artifact

**Answer: D**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Caches are performance optimizations; artifacts are authoritative outputs. In a real incident, verify that signal before making a disruptive change.

---

### Q559 — Advanced

The pipeline is green in places but the operational risk is still real. In a CI/CD pipeline, a cache may contain poisoned content from an untrusted branch. What is the strongest practice? Which answer would you be comfortable defending to the team, and why?

- A. Transfer artifacts through unversioned shared directories
- B. separate cache keys and trust boundaries
- C. Use a cache as the authoritative release package
- D. Rebuild the package during deployment

**Answer: B**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Untrusted jobs must not populate caches consumed by privileged jobs. In a real incident, verify that signal before making a disruptive change.

---

### Q560 — Advanced

A production deployment pipeline is under pressure and the team wants the safest next move. In a CI/CD pipeline, two complete environments are available and switching must be instant. What is the strongest practice? Which answer would you be comfortable defending to the team, and why?

- A. Deploy to all users at once and monitor afterward
- B. Use a rolling restart without success criteria
- C. Change the database destructively before compatibility is established
- D. use blue-green deployment

**Answer: D**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Traffic can move between full old and new stacks quickly. In a real incident, verify that signal before making a disruptive change.

---

### Q561 — Advanced

You're reviewing a CI/CD failure just before a release window closes. In a CI/CD pipeline, a database migration is not backward compatible. What is the strongest practice? Which answer would you be comfortable defending to the team, and why?

- A. use an expand-and-contract migration before application cutover
- B. Change the database destructively before compatibility is established
- C. Deploy to all users at once and monitor afterward
- D. Use a rolling restart without success criteria

**Answer: A**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Compatibility is required while old and new versions overlap. In a real incident, verify that signal before making a disruptive change.

---

### Q562 — Expert

The pipeline is green in places but the operational risk is still real. In a CI/CD pipeline, a canary has worse latency but equal error rate. What is the strongest practice? Which answer would you be comfortable defending to the team, and why?

- A. Change the database destructively before compatibility is established
- B. define multi-signal success criteria and stop promotion
- C. Deploy to all users at once and monitor afterward
- D. Use a rolling restart without success criteria

**Answer: B**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Canary analysis should include latency, saturation, and business signals. In a real incident, verify that signal before making a disruptive change.

---

### Q563 — Advanced

A production deployment pipeline is under pressure and the team wants the safest next move. In a CI/CD pipeline, a rollback command exists but has never been tested. What is the strongest practice? Which answer would you be comfortable defending to the team, and why?

- A. Delete failed resources without restoring the previous version
- B. Reverse every schema change automatically regardless of data loss
- C. Continue promotion and investigate after completion
- D. exercise it regularly in a production-like environment

**Answer: D**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Untested recovery procedures are unreliable during incidents. In a real incident, verify that signal before making a disruptive change.

---

### Q564 — Expert

You're reviewing a CI/CD failure just before a release window closes. In a CI/CD pipeline, a partial regional rollout fails. What is the strongest practice? Which answer would you be comfortable defending to the team, and why?

- A. Reverse every schema change automatically regardless of data loss
- B. Continue promotion and investigate after completion
- C. Delete failed resources without restoring the previous version
- D. stop further regions and restore the affected region

**Answer: D**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Progressive delivery should contain blast radius by stage. In a real incident, verify that signal before making a disruptive change.

---

### Q565 — Advanced

The pipeline is green in places but the operational risk is still real. In a CI/CD pipeline, retries make a flaky test pass. What is the strongest practice? Which answer would you be comfortable defending to the team, and why?

- A. do not treat retries as the root-cause fix
- B. Ignore the test permanently
- C. Run the flaky test only in production
- D. Add unlimited retries and accept the result

**Answer: A**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Retries can gather evidence but also hide defects. In a real incident, verify that signal before making a disruptive change.

---

### Q566 — Expert

A production deployment pipeline is under pressure and the team wants the safest next move. In a CI/CD pipeline, a test suite takes 90 minutes. What is the strongest practice? Which answer would you be comfortable defending to the team, and why?

- A. Add unlimited retries and accept the result
- B. Ignore the test permanently
- C. Run the flaky test only in production
- D. profile, shard, parallelize, and move suitable checks earlier

**Answer: D**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Optimization should preserve coverage while reducing feedback time. In a real incident, verify that signal before making a disruptive change.

---

### Q567 — Advanced

You're reviewing a CI/CD failure just before a release window closes. In a CI/CD pipeline, parallel jobs overload a shared database. What is the strongest practice? Which answer would you be comfortable defending to the team, and why?

- A. Duplicate deployment jobs across runners
- B. Remove resource limits from shared dependencies
- C. cap concurrency or isolate test databases
- D. Parallelize stateful jobs without isolation

**Answer: C**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Parallelism must respect downstream capacity and state isolation. In a real incident, verify that signal before making a disruptive change.

---

### Q568 — Advanced

The pipeline is green in places but the operational risk is still real. In a CI/CD pipeline, one slow shard determines total duration. What is the strongest practice? Which answer would you be comfortable defending to the team, and why?

- A. Remove resource limits from shared dependencies
- B. rebalance shards using historical timings
- C. Parallelize stateful jobs without isolation
- D. Duplicate deployment jobs across runners

**Answer: B**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Balanced work minimizes the critical path. In a real incident, verify that signal before making a disruptive change.

---

### Q569 — Advanced

A production deployment pipeline is under pressure and the team wants the safest next move. In a CI/CD pipeline, masking replaces exact secret strings only. What is the strongest practice? Which answer would you be comfortable defending to the team, and why?

- A. Use one global cache key for trusted and untrusted branches
- B. Treat release artifacts and caches as interchangeable
- C. Delete rollback artifacts immediately after deployment
- D. derived or encoded forms may still leak

**Answer: D**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Secret masking is not a substitute for disciplined logging. In a real incident, verify that signal before making a disruptive change.

---

### Q570 — Advanced

You're reviewing a CI/CD failure just before a release window closes. In a CI/CD pipeline, a pipeline downloads a script and pipes it directly to shell. What is the strongest practice? Which answer would you be comfortable defending to the team, and why?

- A. pin and verify the downloaded content before execution
- B. Treat release artifacts and caches as interchangeable
- C. Use one global cache key for trusted and untrusted branches
- D. Delete rollback artifacts immediately after deployment

**Answer: A**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Remote unverified execution is a supply-chain risk. In a real incident, verify that signal before making a disruptive change.

---

### Q571 — Expert

The pipeline is green in places but the operational risk is still real. In a CI/CD pipeline, a pull request from a fork requests privileged secrets. What is the strongest practice? Which answer would you be comfortable defending to the team, and why?

- A. Use one global cache key for trusted and untrusted branches
- B. Delete rollback artifacts immediately after deployment
- C. do not expose production secrets to untrusted fork jobs
- D. Treat release artifacts and caches as interchangeable

**Answer: C**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Untrusted code could exfiltrate them. In a real incident, verify that signal before making a disruptive change.

---

### Q572 — Advanced

A production deployment pipeline is under pressure and the team wants the safest next move. In a CI/CD pipeline, a static-analysis rule produces many false positives. What is the strongest practice? Which answer would you be comfortable defending to the team, and why?

- A. Pipe unpinned remote scripts directly into a shell
- B. Expose secrets to forked pull requests
- C. tune the rule with documented ownership rather than disabling all scanning
- D. Rely only on log masking after printing the secret

**Answer: C**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Quality tooling must remain actionable. In a real incident, verify that signal before making a disruptive change.

---

### Q573 — Expert

You're reviewing a CI/CD failure just before a release window closes. In a CI/CD pipeline, a manual checklist is often skipped. What is the strongest practice? Which answer would you be comfortable defending to the team, and why?

- A. Pipe unpinned remote scripts directly into a shell
- B. Rely only on log masking after printing the secret
- C. Expose secrets to forked pull requests
- D. automate objective checks in the pipeline

**Answer: D**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Automation provides consistent enforcement and auditability. In a real incident, verify that signal before making a disruptive change.

---

### Q574 — Advanced

The pipeline is green in places but the operational risk is still real. In a CI/CD pipeline, an emergency fix must bypass normal timing. What is the strongest practice? Which answer would you be comfortable defending to the team, and why?

- A. use a documented break-glass path with audit and follow-up
- B. Disable the scanner when it blocks a release
- C. Convert all failures into warnings
- D. Use a manual checklist with no audit trail

**Answer: A**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Exceptions should be controlled, visible, and reviewed. In a real incident, verify that signal before making a disruptive change.

---

### Q575 — Advanced

A production deployment pipeline is under pressure and the team wants the safest next move. In a CI/CD pipeline, the same person authors and approves a sensitive release. What is the strongest practice? Which answer would you be comfortable defending to the team, and why?

- A. Convert all failures into warnings
- B. apply separation of duties where risk requires it
- C. Disable the scanner when it blocks a release
- D. Use a manual checklist with no audit trail

**Answer: B**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Independent approval reduces fraud and error risk. In a real incident, verify that signal before making a disruptive change.

---

### Q576 — Advanced

You're reviewing a CI/CD failure just before a release window closes. In a CI/CD pipeline, a registry must verify publisher identity. What is the strongest practice? Which answer would you be comfortable defending to the team, and why?

- A. Approve before the final artifact exists
- B. Allow any contributor to approve production
- C. sign images and enforce verification at admission
- D. Use a shared approver account

**Answer: C**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Signatures provide provenance when keys and policy are managed correctly. In a real incident, verify that signal before making a disruptive change.

---

### Q577 — Advanced

The pipeline is green in places but the operational risk is still real. In a CI/CD pipeline, a base image receives a critical fix. What is the strongest practice? Which answer would you be comfortable defending to the team, and why?

- A. Use a shared approver account
- B. Approve before the final artifact exists
- C. rebuild dependent images and verify the new digest
- D. Allow any contributor to approve production

**Answer: C**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Existing images do not change when a base tag is updated. In a real incident, verify that signal before making a disruptive change.

---

### Q578 — Expert

A production deployment pipeline is under pressure and the team wants the safest next move. In a CI/CD pipeline, provenance must show how an artifact was built. What is the strongest practice? Which answer would you be comfortable defending to the team, and why?

- A. Use a shared approver account
- B. Approve before the final artifact exists
- C. Allow any contributor to approve production
- D. produce attestations from a trusted build system

**Answer: D**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Attestations link source, builder, process, and output. In a real incident, verify that signal before making a disruptive change.

---

### Q579 — Advanced

You're reviewing a CI/CD failure just before a release window closes. In a CI/CD pipeline, metrics are delayed by ten minutes. What is the strongest practice? Which answer would you be comfortable defending to the team, and why?

- A. Accept provenance from an untrusted build worker
- B. Trust unsigned artifacts if the filename looks correct
- C. Assume old images inherit base-image patches automatically
- D. do not make an instant automated decision from stale data alone

**Answer: D**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Release automation must account for telemetry latency. In a real incident, verify that signal before making a disruptive change.

---

### Q580 — Expert

The pipeline is green in places but the operational risk is still real. In a CI/CD pipeline, a deployment changes no desired-state manifest because the tag is unchanged. What is the strongest practice? Which answer would you be comfortable defending to the team, and why?

- A. Accept provenance from an untrusted build worker
- B. ensure the deployment specification changes to an immutable version
- C. Assume old images inherit base-image patches automatically
- D. Trust unsigned artifacts if the filename looks correct

**Answer: B**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Controllers roll out when desired state changes. In a real incident, verify that signal before making a disruptive change.

---

## Cloud

### Q581 — Advanced

You're reviewing a cloud architecture during an availability incident and need to identify the real risk. In cloud architecture, nightly backups exist for a single database VM. Which conclusion or design is best? Which answer would you be comfortable defending to the team, and why?

- A. Nightly backups provide automatic high availability
- B. A load balancer removes every stateful single point of failure
- C. Placing all tiers in one zone improves resilience
- D. backups improve recovery but not high availability

**Answer: D**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Restore time remains downtime and recent changes may be lost. In a real incident, verify that signal before making a disruptive change.

---

### Q582 — Advanced

A cloud service is degraded and the team is debating whether this is capacity, dependency, or failure-domain related. In cloud architecture, a managed database offers synchronous standby failover. Which conclusion or design is best? Which answer would you be comfortable defending to the team, and why?

- A. Nightly backups provide automatic high availability
- B. A load balancer removes every stateful single point of failure
- C. Placing all tiers in one zone improves resilience
- D. it reduces infrastructure failure downtime

**Answer: D**

**Explanation:** The clue to anchor on is the behavior described in the scenario. A standby can assume service without a full restore. In a real incident, verify that signal before making a disruptive change.

---

### Q583 — Advanced

You need a production-safe decision rather than a console-click workaround. In cloud architecture, a load balancer has healthy targets in only one AZ. Which conclusion or design is best? Which answer would you be comfortable defending to the team, and why?

- A. Cross-zone traffic has no cost or latency tradeoff
- B. A multi-AZ label guarantees balanced healthy capacity
- C. Zonal state automatically moves with compute
- D. the service still has a zonal concentration risk

**Answer: D**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Nominal multi-AZ configuration is insufficient without balanced healthy capacity. In a real incident, verify that signal before making a disruptive change.

---

### Q584 — Advanced

You're reviewing a cloud architecture during an availability incident and need to identify the real risk. In cloud architecture, stateful storage is zonal. Which conclusion or design is best? Which answer would you be comfortable defending to the team, and why?

- A. failover may require replicated or re-created storage in another zone
- B. A multi-AZ label guarantees balanced healthy capacity
- C. Zonal state automatically moves with compute
- D. Cross-zone traffic has no cost or latency tradeoff

**Answer: A**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Compute movement alone does not move zonal state. In a real incident, verify that signal before making a disruptive change.

---

### Q585 — Expert

A cloud service is degraded and the team is debating whether this is capacity, dependency, or failure-domain related. In cloud architecture, cross-zone traffic has cost and latency implications. Which conclusion or design is best? Which answer would you be comfortable defending to the team, and why?

- A. Zonal state automatically moves with compute
- B. measure them while preserving failure isolation
- C. Cross-zone traffic has no cost or latency tradeoff
- D. A multi-AZ label guarantees balanced healthy capacity

**Answer: B**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Resilience decisions include operational tradeoffs. In a real incident, verify that signal before making a disruptive change.

---

### Q586 — Advanced

You need a production-safe decision rather than a console-click workaround. In cloud architecture, a downstream database cannot handle unlimited workers. Which conclusion or design is best? Which answer would you be comfortable defending to the team, and why?

- A. cap scaling and apply backpressure
- B. Scale workers without considering downstream limits
- C. Terminate instances immediately during scale-in
- D. Autoscaling reacts instantly with no startup delay

**Answer: A**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Scaling one tier can overload a constrained dependency. In a real incident, verify that signal before making a disruptive change.

---

### Q587 — Expert

You're reviewing a cloud architecture during an availability incident and need to identify the real risk. In cloud architecture, scale-in terminates busy instances abruptly. Which conclusion or design is best? Which answer would you be comfortable defending to the team, and why?

- A. Autoscaling reacts instantly with no startup delay
- B. Scale workers without considering downstream limits
- C. Terminate instances immediately during scale-in
- D. use connection draining and scale-in protection where needed

**Answer: D**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Graceful removal prevents dropped work. In a real incident, verify that signal before making a disruptive change.

---

### Q588 — Advanced

A cloud service is degraded and the team is debating whether this is capacity, dependency, or failure-domain related. In cloud architecture, versioning is enabled. Which conclusion or design is best? Which answer would you be comfortable defending to the team, and why?

- A. Durability and availability are the same metric
- B. accidental overwrites and deletes can be recovered more easily
- C. Storage capacity is the only relevant object-storage cost
- D. Versioning prevents all public-access mistakes

**Answer: B**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Previous object versions remain available subject to lifecycle policy. In a real incident, verify that signal before making a disruptive change.

---

### Q589 — Advanced

You need a production-safe decision rather than a console-click workaround. In cloud architecture, a public bucket policy is added accidentally. Which conclusion or design is best? Which answer would you be comfortable defending to the team, and why?

- A. Storage capacity is the only relevant object-storage cost
- B. Durability and availability are the same metric
- C. prevent it with organization controls and continuous policy checks
- D. Versioning prevents all public-access mistakes

**Answer: C**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Guardrails reduce exposure from individual misconfiguration. In a real incident, verify that signal before making a disruptive change.

---

### Q590 — Advanced

You're reviewing a cloud architecture during an availability incident and need to identify the real risk. In cloud architecture, personalized responses are cached without a correct cache key. Which conclusion or design is best? Which answer would you be comfortable defending to the team, and why?

- A. A CDN removes the need to secure private content
- B. Use identical TTL expiry for all hot keys
- C. Cache personalized responses under one global key
- D. users may receive another user's content

**Answer: D**

**Explanation:** The clue to anchor on is the behavior described in the scenario. The key must vary on all relevant request attributes. In a real incident, verify that signal before making a disruptive change.

---

### Q591 — Advanced

A cloud service is degraded and the team is debating whether this is capacity, dependency, or failure-domain related. In cloud architecture, an origin is overloaded during cache expiry. Which conclusion or design is best? Which answer would you be comfortable defending to the team, and why?

- A. A CDN removes the need to secure private content
- B. use staggered TTLs, request coalescing, or stale serving
- C. Use identical TTL expiry for all hot keys
- D. Cache personalized responses under one global key

**Answer: B**

**Explanation:** The clue to anchor on is the behavior described in the scenario. These techniques reduce cache stampedes. In a real incident, verify that signal before making a disruptive change.

---

### Q592 — Expert

You need a production-safe decision rather than a console-click workaround. In cloud architecture, signed URLs are required. Which conclusion or design is best? Which answer would you be comfortable defending to the team, and why?

- A. A CDN removes the need to secure private content
- B. Use identical TTL expiry for all hot keys
- C. they provide time-limited access when validation is enforced at the edge or origin
- D. Cache personalized responses under one global key

**Answer: C**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Signing helps authorize private content delivery. In a real incident, verify that signal before making a disruptive change.

---

### Q593 — Advanced

You're reviewing a cloud architecture during an availability incident and need to identify the real risk. In cloud architecture, permissions are unused for 90 days. Which conclusion or design is best? Which answer would you be comfortable defending to the team, and why?

- A. review and remove them after validating operational needs
- B. Trust policy conditions are unnecessary
- C. Grant wildcard permissions and rely on audit logs
- D. Use permanent administrator keys for automation

**Answer: A**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Access analysis supports privilege reduction. In a real incident, verify that signal before making a disruptive change.

---

### Q594 — Expert

A cloud service is degraded and the team is debating whether this is capacity, dependency, or failure-domain related. In cloud architecture, an administrator uses a permanent access key. Which conclusion or design is best? Which answer would you be comfortable defending to the team, and why?

- A. Use permanent administrator keys for automation
- B. prefer federated human access with MFA and short sessions
- C. Grant wildcard permissions and rely on audit logs
- D. Trust policy conditions are unnecessary

**Answer: B**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Long-lived human keys are difficult to govern safely. In a real incident, verify that signal before making a disruptive change.

---

### Q595 — Advanced

You need a production-safe decision rather than a console-click workaround. In cloud architecture, RTO is two hours. Which conclusion or design is best? Which answer would you be comfortable defending to the team, and why?

- A. RPO measures recovery duration
- B. RTO measures acceptable data loss
- C. Nightly backups meet any RPO below 24 hours
- D. service should be restored within two hours of the incident target

**Answer: D**

**Explanation:** The clue to anchor on is the behavior described in the scenario. RTO is the recovery-time objective. In a real incident, verify that signal before making a disruptive change.

---

### Q596 — Expert

You're reviewing a cloud architecture during an availability incident and need to identify the real risk. In cloud architecture, a failover plan meets RTO only when staff are available. Which conclusion or design is best? Which answer would you be comfortable defending to the team, and why?

- A. automate and test the recovery path
- B. RTO measures acceptable data loss
- C. RPO measures recovery duration
- D. Nightly backups meet any RPO below 24 hours

**Answer: A**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Objectives must hold under realistic incident conditions. In a real incident, verify that signal before making a disruptive change.

---

### Q597 — Advanced

A cloud service is degraded and the team is debating whether this is capacity, dependency, or failure-domain related. In cloud architecture, fault-tolerant batch jobs can be interrupted. Which conclusion or design is best? Which answer would you be comfortable defending to the team, and why?

- A. Use interruptible instances for a critical singleton
- B. spot or preemptible capacity is suitable
- C. Buy long commitments before rightsizing
- D. Reserved pricing is always cheaper for bursty uncertain workloads

**Answer: B**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Interruptible pricing fits restartable workloads. In a real incident, verify that signal before making a disruptive change.

---

### Q598 — Advanced

You need a production-safe decision rather than a console-click workaround. In cloud architecture, a critical singleton database uses spot instances. Which conclusion or design is best? Which answer would you be comfortable defending to the team, and why?

- A. Reserved pricing is always cheaper for bursty uncertain workloads
- B. Use interruptible instances for a critical singleton
- C. this creates unacceptable interruption risk
- D. Buy long commitments before rightsizing

**Answer: C**

**Explanation:** The clue to anchor on is the behavior described in the scenario. The workload is neither redundant nor interruption-tolerant. In a real incident, verify that signal before making a disruptive change.

---

### Q599 — Advanced

You're reviewing a cloud architecture during an availability incident and need to identify the real risk. In cloud architecture, an application repeatedly downloads the same object from another region. Which conclusion or design is best? Which answer would you be comfortable defending to the team, and why?

- A. Inter-region transfer is always free
- B. Observability export volume does not affect egress
- C. replication or caching may lower latency and transfer cost
- D. NAT data processing has no cost

**Answer: C**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Locality can reduce repeated cross-region traffic. In a real incident, verify that signal before making a disruptive change.

---

### Q600 — Advanced

A cloud service is degraded and the team is debating whether this is capacity, dependency, or failure-domain related. In cloud architecture, NAT gateway data processing is high. Which conclusion or design is best? Which answer would you be comfortable defending to the team, and why?

- A. Observability export volume does not affect egress
- B. Inter-region transfer is always free
- C. review traffic paths and private endpoints
- D. NAT data processing has no cost

**Answer: C**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Managed NAT often charges per processed byte. In a real incident, verify that signal before making a disruptive change.

---

### Q601 — Expert

You need a production-safe decision rather than a console-click workaround. In cloud architecture, logs are exported to an external provider. Which conclusion or design is best? Which answer would you be comfortable defending to the team, and why?

- A. Observability export volume does not affect egress
- B. include sustained egress in observability cost planning
- C. Inter-region transfer is always free
- D. NAT data processing has no cost

**Answer: B**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Telemetry volume can create material transfer expense. In a real incident, verify that signal before making a disruptive change.

---

### Q602 — Advanced

You're reviewing a cloud architecture during an availability incident and need to identify the real risk. In cloud architecture, message order is required per customer. Which conclusion or design is best? Which answer would you be comfortable defending to the team, and why?

- A. use partitioning or FIFO semantics keyed by customer
- B. Assume exactly-once processing without idempotency
- C. Require global ordering for every message
- D. Retry poison messages forever

**Answer: A**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Global order is expensive and often unnecessary. In a real incident, verify that signal before making a disruptive change.

---

### Q603 — Expert

A cloud service is degraded and the team is debating whether this is capacity, dependency, or failure-domain related. In cloud architecture, a poison message retries forever. Which conclusion or design is best? Which answer would you be comfortable defending to the team, and why?

- A. Require global ordering for every message
- B. Assume exactly-once processing without idempotency
- C. Retry poison messages forever
- D. use retry limits and a dead-letter queue

**Answer: D**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Isolation enables inspection without blocking the whole stream. In a real incident, verify that signal before making a disruptive change.

---

### Q604 — Advanced

You need a production-safe decision rather than a console-click workaround. In cloud architecture, private workloads access cloud object storage through public NAT. Which conclusion or design is best? Which answer would you be comfortable defending to the team, and why?

- A. Overlapping CIDRs peer without issue
- B. An internet-gateway route alone gives private addresses public reachability
- C. a private service endpoint can improve security and reduce NAT cost
- D. Use public NAT even when a private service endpoint exists

**Answer: C**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Private endpoints keep traffic on provider networks and bypass NAT processing. In a real incident, verify that signal before making a disruptive change.

---

### Q605 — Advanced

You're reviewing a cloud architecture during an availability incident and need to identify the real risk. In cloud architecture, two private networks have overlapping CIDRs. Which conclusion or design is best? Which answer would you be comfortable defending to the team, and why?

- A. An internet-gateway route alone gives private addresses public reachability
- B. Use public NAT even when a private service endpoint exists
- C. simple peering cannot route them cleanly
- D. Overlapping CIDRs peer without issue

**Answer: C**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Address overlap requires redesign, translation, or an intermediary architecture. In a real incident, verify that signal before making a disruptive change.

---

### Q606 — Advanced

A cloud service is degraded and the team is debating whether this is capacity, dependency, or failure-domain related. In cloud architecture, cold starts affect latency. Which conclusion or design is best? Which answer would you be comfortable defending to the team, and why?

- A. Assume retried events cannot duplicate side effects
- B. provisioned concurrency, smaller packages, or asynchronous patterns can help
- C. Ignore runtime and concurrency limits
- D. Open one database connection per invocation without pooling

**Answer: B**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Initialization cost varies by runtime and configuration. In a real incident, verify that signal before making a disruptive change.

---

### Q607 — Advanced

You need a production-safe decision rather than a console-click workaround. In cloud architecture, thousands of functions open database connections. Which conclusion or design is best? Which answer would you be comfortable defending to the team, and why?

- A. Open one database connection per invocation without pooling
- B. use pooling or a managed proxy
- C. Assume retried events cannot duplicate side effects
- D. Ignore runtime and concurrency limits

**Answer: B**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Burst concurrency can exhaust database connection limits. In a real incident, verify that signal before making a disruptive change.

---

### Q608 — Expert

You're reviewing a cloud architecture during an availability incident and need to identify the real risk. In cloud architecture, an event is retried after timeout. Which conclusion or design is best? Which answer would you be comfortable defending to the team, and why?

- A. Open one database connection per invocation without pooling
- B. the function must be idempotent
- C. Assume retried events cannot duplicate side effects
- D. Ignore runtime and concurrency limits

**Answer: B**

**Explanation:** The clue to anchor on is the behavior described in the scenario. At-least-once invocation can repeat side effects. In a real incident, verify that signal before making a disruptive change.

---

### Q609 — Advanced

A cloud service is degraded and the team is debating whether this is capacity, dependency, or failure-domain related. In cloud architecture, key rotation is enabled. Which conclusion or design is best? Which answer would you be comfortable defending to the team, and why?

- A. Use one unrestricted key for all environments
- B. new cryptographic material is used while old material remains for decryption
- C. Disable a key without impact to applications
- D. Anyone with ciphertext can decrypt without key permission

**Answer: B**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Rotation should preserve access to existing ciphertext. In a real incident, verify that signal before making a disruptive change.

---

### Q610 — Expert

You need a production-safe decision rather than a console-click workaround. In cloud architecture, one key protects every environment. Which conclusion or design is best? Which answer would you be comfortable defending to the team, and why?

- A. separate keys and policies reduce blast radius
- B. Disable a key without impact to applications
- C. Use one unrestricted key for all environments
- D. Anyone with ciphertext can decrypt without key permission

**Answer: A**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Key boundaries support isolation and independent revocation. In a real incident, verify that signal before making a disruptive change.

---

## Docker

### Q611 — Advanced

A containerized service is misbehaving in production and you want to separate image, runtime, network, and storage causes. In Docker, remote clients must reach container port 8080. Which statement or action is correct? Which answer would you be comfortable defending to the team, and why?

- A. publish it on an appropriate external host interface
- B. EXPOSE automatically publishes the port to remote hosts
- C. --network host is required for every externally reachable service
- D. A host mapping works even when the app binds only to container loopback

**Answer: A**

**Explanation:** The clue to anchor on is the behavior described in the scenario. A 0.0.0.0 or specific external bind can accept remote traffic subject to firewall policy. In a real incident, verify that signal before making a disruptive change.

---

### Q612 — Advanced

You're debugging a Docker issue with users already feeling the impact. In Docker, the app listens on 127.0.0.1 inside the container. Which statement or action is correct? Which answer would you be comfortable defending to the team, and why?

- A. A host mapping works even when the app binds only to container loopback
- B. --network host is required for every externally reachable service
- C. publish mapping alone will not make it reachable
- D. EXPOSE automatically publishes the port to remote hosts

**Answer: C**

**Explanation:** The clue to anchor on is the behavior described in the scenario. The process must listen on the container interface, typically 0.0.0.0. In a real incident, verify that signal before making a disruptive change.

---

### Q613 — Advanced

A teammate proposes rebuilding everything, but you want to reason from the evidence first. In Docker, database data must survive container recreation. Which statement or action is correct? Which answer would you be comfortable defending to the team, and why?

- A. Commit the running container after every write
- B. Use restart: always as persistent storage
- C. Increase the writable layer and treat it as a backup
- D. mount a named volume or managed persistent storage

**Answer: D**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Persistent data should live outside the ephemeral writable layer. In a real incident, verify that signal before making a disruptive change.

---

### Q614 — Advanced

A containerized service is misbehaving in production and you want to separate image, runtime, network, and storage causes. In Docker, a bind mount points to a host path. Which statement or action is correct? Which answer would you be comfortable defending to the team, and why?

- A. Commit the running container after every write
- B. Use restart: always as persistent storage
- C. host filesystem permissions and path existence matter
- D. Increase the writable layer and treat it as a backup

**Answer: C**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Bind mounts expose a specific host path directly. In a real incident, verify that signal before making a disruptive change.

---

### Q615 — Expert

You're debugging a Docker issue with users already feeling the impact. In Docker, docker compose down -v is run. Which statement or action is correct? Which answer would you be comfortable defending to the team, and why?

- A. named volumes declared by the project are removed
- B. Commit the running container after every write
- C. Use restart: always as persistent storage
- D. Increase the writable layer and treat it as a backup

**Answer: A**

**Explanation:** The clue to anchor on is the behavior described in the scenario. The -v flag explicitly deletes associated volumes. In a real incident, verify that signal before making a disruptive change.

---

### Q616 — Advanced

A teammate proposes rebuilding everything, but you want to reason from the evidence first. In Docker, a build secret is passed with ARG and remains in history. Which statement or action is correct? Which answer would you be comfortable defending to the team, and why?

- A. Pass secrets through ARG and remove them later
- B. Copy the entire build context into every stage
- C. use BuildKit secret mounts
- D. Install compilers in the final runtime image

**Answer: C**

**Explanation:** The clue to anchor on is the behavior described in the scenario. ARG values can leak through image history and layers. In a real incident, verify that signal before making a disruptive change.

---

### Q617 — Expert

A containerized service is misbehaving in production and you want to separate image, runtime, network, and storage causes. In Docker, dependency download changes rarely. Which statement or action is correct? Which answer would you be comfortable defending to the team, and why?

- A. copy lockfiles and install dependencies before copying changing source
- B. Pass secrets through ARG and remove them later
- C. Install compilers in the final runtime image
- D. Copy the entire build context into every stage

**Answer: A**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Layer ordering improves cache reuse. In a real incident, verify that signal before making a disruptive change.

---

### Q618 — Advanced

You're debugging a Docker issue with users already feeling the impact. In Docker, apt-get update and install are split across layers. Which statement or action is correct? Which answer would you be comfortable defending to the team, and why?

- A. Split package update and install into unrelated layers
- B. Include logs and local caches in the build context
- C. combine them and clean package lists in one RUN
- D. Put frequently changing source before dependency installation

**Answer: C**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Combining avoids stale package indexes and unnecessary layer data. In a real incident, verify that signal before making a disruptive change.

---

### Q619 — Advanced

A teammate proposes rebuilding everything, but you want to reason from the evidence first. In Docker, a cache is reused across incompatible architectures. Which statement or action is correct? Which answer would you be comfortable defending to the team, and why?

- A. Include logs and local caches in the build context
- B. Put frequently changing source before dependency installation
- C. Split package update and install into unrelated layers
- D. use architecture-aware cache keys

**Answer: D**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Compiled outputs and package caches may be platform-specific. In a real incident, verify that signal before making a disruptive change.

---

### Q620 — Advanced

A containerized service is misbehaving in production and you want to separate image, runtime, network, and storage causes. In Docker, a health check starts before a slow app initializes. Which statement or action is correct? Which answer would you be comfortable defending to the team, and why?

- A. Assume a running process proves application health
- B. Expect standalone Docker to replace unhealthy containers automatically
- C. configure start-period or orchestrator startup checks
- D. Use a dependency-heavy probe that can trigger cascading failure

**Answer: C**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Startup tolerance prevents premature failure classification. In a real incident, verify that signal before making a disruptive change.

---

### Q621 — Advanced

You're debugging a Docker issue with users already feeling the impact. In Docker, a health check calls an expensive dependency on every probe. Which statement or action is correct? Which answer would you be comfortable defending to the team, and why?

- A. Assume a running process proves application health
- B. use a lightweight local check
- C. Expect standalone Docker to replace unhealthy containers automatically
- D. Use a dependency-heavy probe that can trigger cascading failure

**Answer: B**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Health checks should not create their own overload or dependency cascades. In a real incident, verify that signal before making a disruptive change.

---

### Q622 — Expert

A teammate proposes rebuilding everything, but you want to reason from the evidence first. In Docker, Docker marks a container unhealthy. Which statement or action is correct? Which answer would you be comfortable defending to the team, and why?

- A. Assume a running process proves application health
- B. it records health status but standalone Docker does not automatically replace it
- C. Use a dependency-heavy probe that can trigger cascading failure
- D. Expect standalone Docker to replace unhealthy containers automatically

**Answer: B**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Replacement behavior depends on an orchestrator or external policy. In a real incident, verify that signal before making a disruptive change.

---

### Q623 — Advanced

A containerized service is misbehaving in production and you want to separate image, runtime, network, and storage causes. In Docker, docker stop exceeds the grace period. Which statement or action is correct? Which answer would you be comfortable defending to the team, and why?

- A. Use SIGKILL as the normal shutdown method
- B. Docker sends SIGKILL after the timeout
- C. Keep a shell wrapper as PID 1 without signal forwarding
- D. Ignore child-process reaping in containers

**Answer: B**

**Explanation:** The clue to anchor on is the behavior described in the scenario. The application should handle the configured stop signal promptly. In a real incident, verify that signal before making a disruptive change.

---

### Q624 — Expert

You're debugging a Docker issue with users already feeling the impact. In Docker, an app needs time to drain connections. Which statement or action is correct? Which answer would you be comfortable defending to the team, and why?

- A. Keep a shell wrapper as PID 1 without signal forwarding
- B. Ignore child-process reaping in containers
- C. Use SIGKILL as the normal shutdown method
- D. implement graceful shutdown and set a suitable stop timeout

**Answer: D**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Orderly termination reduces dropped requests and corruption. In a real incident, verify that signal before making a disruptive change.

---

### Q625 — Advanced

A teammate proposes rebuilding everything, but you want to reason from the evidence first. In Docker, the app only needs to bind a low port. Which statement or action is correct? Which answer would you be comfortable defending to the team, and why?

- A. Use --privileged instead of a narrow capability
- B. use a targeted capability or higher unprivileged port
- C. Mount the Docker socket because it is read-only by default
- D. Run every container as root for compatibility

**Answer: B**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Full root is unnecessary for one narrow privilege. In a real incident, verify that signal before making a disruptive change.

---

### Q626 — Expert

A containerized service is misbehaving in production and you want to separate image, runtime, network, and storage causes. In Docker, rootless Docker is used. Which statement or action is correct? Which answer would you be comfortable defending to the team, and why?

- A. Use --privileged instead of a narrow capability
- B. Run every container as root for compatibility
- C. daemon and containers operate without root privileges on the host
- D. Mount the Docker socket because it is read-only by default

**Answer: C**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Rootless mode reduces daemon-level privilege but has feature tradeoffs. In a real incident, verify that signal before making a disruptive change.

---

### Q627 — Advanced

You're debugging a Docker issue with users already feeling the impact. In Docker, two registries mirror the same digest. Which statement or action is correct? Which answer would you be comfortable defending to the team, and why?

- A. Assume one tag can represent only one architecture image
- B. the image content is identical if the digest algorithm and manifest match
- C. Treat tags as immutable content identifiers
- D. Use the image name without a tag for reproducibility

**Answer: B**

**Explanation:** The clue to anchor on is the behavior described in the scenario. A digest validates content identity. In a real incident, verify that signal before making a disruptive change.

---

### Q628 — Advanced

A teammate proposes rebuilding everything, but you want to reason from the evidence first. In Docker, a deployment must be reproducible. Which statement or action is correct? Which answer would you be comfortable defending to the team, and why?

- A. Use the image name without a tag for reproducibility
- B. Assume one tag can represent only one architecture image
- C. Treat tags as immutable content identifiers
- D. pin the image digest

**Answer: D**

**Explanation:** The clue to anchor on is the behavior described in the scenario. A digest prevents silent tag movement. In a real incident, verify that signal before making a disruptive change.

---

### Q629 — Advanced

A containerized service is misbehaving in production and you want to separate image, runtime, network, and storage causes. In Docker, many temporary build files are created and deleted in separate RUN steps. Which statement or action is correct? Which answer would you be comfortable defending to the team, and why?

- A. Create and delete temporary files in separate layers
- B. Store databases in the copy-on-write layer for best durability
- C. the image can remain unnecessarily large
- D. Deleting a file in a later layer removes its bytes from all prior layers

**Answer: C**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Cleanup must occur in the same layer that creates the data. In a real incident, verify that signal before making a disruptive change.

---

### Q630 — Advanced

You're debugging a Docker issue with users already feeling the impact. In Docker, copy-on-write storage receives heavy database writes. Which statement or action is correct? Which answer would you be comfortable defending to the team, and why?

- A. Deleting a file in a later layer removes its bytes from all prior layers
- B. Store databases in the copy-on-write layer for best durability
- C. Create and delete temporary files in separate layers
- D. a volume is generally more suitable

**Answer: D**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Persistent volumes avoid some writable-layer overhead and lifecycle coupling. In a real incident, verify that signal before making a disruptive change.

---

### Q631 — Expert

A teammate proposes rebuilding everything, but you want to reason from the evidence first. In Docker, docker system prune is run. Which statement or action is correct? Which answer would you be comfortable defending to the team, and why?

- A. unused objects can be deleted
- B. Store databases in the copy-on-write layer for best durability
- C. Create and delete temporary files in separate layers
- D. Deleting a file in a later layer removes its bytes from all prior layers

**Answer: A**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Prune should be used carefully on hosts that rely on stopped containers or unused images. In a real incident, verify that signal before making a disruptive change.

---

### Q632 — Advanced

A containerized service is misbehaving in production and you want to separate image, runtime, network, and storage causes. In Docker, no memory limit is set. Which statement or action is correct? Which answer would you be comfortable defending to the team, and why?

- A. Requests automatically resize the container
- B. Memory is throttled exactly like CPU
- C. No limits means the container cannot affect the host
- D. the container can compete for host memory

**Answer: D**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Default isolation does not guarantee a safe upper bound. In a real incident, verify that signal before making a disruptive change.

---

### Q633 — Expert

You're debugging a Docker issue with users already feeling the impact. In Docker, a JVM ignores container limits on an old runtime. Which statement or action is correct? Which answer would you be comfortable defending to the team, and why?

- A. Requests automatically resize the container
- B. Memory is throttled exactly like CPU
- C. upgrade or explicitly configure container-aware memory settings
- D. No limits means the container cannot affect the host

**Answer: C**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Runtime awareness is required to size the heap correctly. In a real incident, verify that signal before making a disruptive change.

---

### Q634 — Advanced

A teammate proposes rebuilding everything, but you want to reason from the evidence first. In Docker, a container uses localhost to reach another container. Which statement or action is correct? Which answer would you be comfortable defending to the team, and why?

- A. localhost refers to itself
- B. Place all workloads on one flat network
- C. Use localhost to reach another container
- D. Rely on the default bridge for complete service discovery

**Answer: A**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Each container normally has its own network namespace. In a real incident, verify that signal before making a disruptive change.

---

### Q635 — Advanced

A containerized service is misbehaving in production and you want to separate image, runtime, network, and storage causes. In Docker, a container must join two isolated networks. Which statement or action is correct? Which answer would you be comfortable defending to the team, and why?

- A. Place all workloads on one flat network
- B. connect it to both networks deliberately
- C. Use localhost to reach another container
- D. Rely on the default bridge for complete service discovery

**Answer: B**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Multiple interfaces can bridge selected communication paths. In a real incident, verify that signal before making a disruptive change.

---

### Q636 — Advanced

You're debugging a Docker issue with users already feeling the impact. In Docker, an app should wait for a database health check. Which statement or action is correct? Which answer would you be comfortable defending to the team, and why?

- A. use a healthcheck plus a readiness-aware dependency or retry logic
- B. depends_on guarantees the application is ready
- C. Bake runtime secrets into the image
- D. Startup ordering removes the need for retry logic

**Answer: A**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Distributed startup requires tolerance for delayed dependencies. In a real incident, verify that signal before making a disruptive change.

---

### Q637 — Advanced

A teammate proposes rebuilding everything, but you want to reason from the evidence first. In Docker, a dependency restarts later. Which statement or action is correct? Which answer would you be comfortable defending to the team, and why?

- A. the application still needs reconnect logic
- B. Startup ordering removes the need for retry logic
- C. Bake runtime secrets into the image
- D. depends_on guarantees the application is ready

**Answer: A**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Startup ordering does not solve runtime failures. In a real incident, verify that signal before making a disruptive change.

---

### Q638 — Expert

A containerized service is misbehaving in production and you want to separate image, runtime, network, and storage causes. In Docker, Compose secrets are available. Which statement or action is correct? Which answer would you be comfortable defending to the team, and why?

- A. Bake runtime secrets into the image
- B. mount them as files rather than baking them into images
- C. Startup ordering removes the need for retry logic
- D. depends_on guarantees the application is ready

**Answer: B**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Runtime secret injection avoids image-layer exposure. In a real incident, verify that signal before making a disruptive change.

---

### Q639 — Advanced

You're debugging a Docker issue with users already feeling the impact. In Docker, sensitive data appears in application logs. Which statement or action is correct? Which answer would you be comfortable defending to the team, and why?

- A. Log credentials and depend on transport encryption
- B. Write logs only inside the container filesystem
- C. Disable log rotation to preserve every event
- D. remove or redact it at the source

**Answer: D**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Log transport security cannot undo sensitive content already emitted. In a real incident, verify that signal before making a disruptive change.

---

### Q640 — Expert

A teammate proposes rebuilding everything, but you want to reason from the evidence first. In Docker, the logging backend is unavailable. Which statement or action is correct? Which answer would you be comfortable defending to the team, and why?

- A. Log credentials and depend on transport encryption
- B. Disable log rotation to preserve every event
- C. Write logs only inside the container filesystem
- D. define buffering and backpressure behavior carefully

**Answer: D**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Blocking logging can stall applications; dropping logs reduces observability. In a real incident, verify that signal before making a disruptive change.

---

## Git

### Q641 — Advanced

A release is blocked and the team needs a safe Git recovery path without losing anyone's work. In Git, a branch pointer was moved backward accidentally. What is the best answer? Which answer would you be comfortable defending to the team, and why?

- A. Use git revert on the current HEAD only
- B. Delete the repository and clone again
- C. inspect git reflog
- D. Run git pull --rebase from the remote

**Answer: C**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Reflog is the fastest way to find the previous branch tip. In a real incident, verify that signal before making a disruptive change.

---

### Q642 — Advanced

You're reviewing a Git incident where a quick command could either recover the branch or make the mess worse. In Git, a commit is unreachable but garbage collection has not run. What is the best answer? Which answer would you be comfortable defending to the team, and why?

- A. Use git revert on the current HEAD only
- B. recover it from reflog or fsck and attach a reference
- C. Delete the repository and clone again
- D. Run git pull --rebase from the remote

**Answer: B**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Unreachable objects survive until pruning and can be rescued by a new branch or tag. In a real incident, verify that signal before making a disruptive change.

---

### Q643 — Advanced

A teammate asks what you'd do before touching the shared branch. In Git, you must replace remote history but avoid clobbering a teammate's new commit. What is the best answer? Which answer would you be comfortable defending to the team, and why?

- A. Use --force and ignore remote changes
- B. use --force-with-lease after fetching
- C. Use a normal push without changing history
- D. Merge the remote branch after the rebase without review

**Answer: B**

**Explanation:** The clue to anchor on is the behavior described in the scenario. The lease verifies the remote still matches your expected value. In a real incident, verify that signal before making a disruptive change.

---

### Q644 — Advanced

A release is blocked and the team needs a safe Git recovery path without losing anyone's work. In Git, git push --force would work but is risky. What is the best answer? Which answer would you be comfortable defending to the team, and why?

- A. prefer --force-with-lease
- B. Use a normal push without changing history
- C. Merge the remote branch after the rebase without review
- D. Use --force and ignore remote changes

**Answer: A**

**Explanation:** The clue to anchor on is the behavior described in the scenario. It adds a safety check against unexpected remote updates. In a real incident, verify that signal before making a disruptive change.

---

### Q645 — Expert

You're reviewing a Git incident where a quick command could either recover the branch or make the mess worse. In Git, a shared branch was rebased locally. What is the best answer? Which answer would you be comfortable defending to the team, and why?

- A. Use --force and ignore remote changes
- B. Use a normal push without changing history
- C. Merge the remote branch after the rebase without review
- D. coordinate first and avoid rewriting shared history

**Answer: D**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Rewriting public history forces all collaborators to reconcile divergent commits. In a real incident, verify that signal before making a disruptive change.

---

### Q646 — Advanced

A teammate asks what you'd do before touching the shared branch. In Git, a merge commit records when two lines of development joined. What is the best answer? Which answer would you be comfortable defending to the team, and why?

- A. this is useful for auditability
- B. Always reset main to the feature branch
- C. Cherry-pick every file manually
- D. Delete merge commits from all shared branches

**Answer: A**

**Explanation:** The clue to anchor on is the behavior described in the scenario. The merge commit preserves the integration event. In a real incident, verify that signal before making a disruptive change.

---

### Q647 — Expert

A release is blocked and the team needs a safe Git recovery path without losing anyone's work. In Git, interactive rebase is used before publishing. What is the best answer? Which answer would you be comfortable defending to the team, and why?

- A. Cherry-pick every file manually
- B. Delete merge commits from all shared branches
- C. Always reset main to the feature branch
- D. it can squash, reorder, or edit private commits

**Answer: D**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Interactive rebase is appropriate for cleaning unpublished history. In a real incident, verify that signal before making a disruptive change.

---

### Q648 — Advanced

You're reviewing a Git incident where a quick command could either recover the branch or make the mess worse. In Git, you made useful commits while detached. What is the best answer? Which answer would you be comfortable defending to the team, and why?

- A. Push HEAD without creating a branch
- B. Run git gc to attach commits to a branch
- C. Delete the detached commits before switching
- D. create a branch before switching away

**Answer: D**

**Explanation:** The clue to anchor on is the behavior described in the scenario. A branch preserves the detached commits with a durable reference. In a real incident, verify that signal before making a disruptive change.

---

### Q649 — Advanced

A teammate asks what you'd do before touching the shared branch. In Git, checking out a tag detaches HEAD. What is the best answer? Which answer would you be comfortable defending to the team, and why?

- A. Push HEAD without creating a branch
- B. this is normal for inspecting a fixed release
- C. Delete the detached commits before switching
- D. Run git gc to attach commits to a branch

**Answer: B**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Tags identify commits but do not move like branches. In a real incident, verify that signal before making a disruptive change.

---

### Q650 — Advanced

A release is blocked and the team needs a safe Git recovery path without losing anyone's work. In Git, tests can determine good or bad automatically. What is the best answer? Which answer would you be comfortable defending to the team, and why?

- A. Inspect commits sequentially from oldest to newest
- B. Use git blame on every file
- C. Revert half the repository manually
- D. run git bisect with an automated test script

**Answer: D**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Automation can narrow the faulty commit efficiently. In a real incident, verify that signal before making a disruptive change.

---

### Q651 — Advanced

You're reviewing a Git incident where a quick command could either recover the branch or make the mess worse. In Git, the history contains 1024 candidate commits. What is the best answer? Which answer would you be comfortable defending to the team, and why?

- A. Inspect commits sequentially from oldest to newest
- B. Revert half the repository manually
- C. Use git blame on every file
- D. bisect needs roughly ten test steps

**Answer: D**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Binary search takes about log2(N) steps. In a real incident, verify that signal before making a disruptive change.

---

### Q652 — Expert

A teammate asks what you'd do before touching the shared branch. In Git, a bisect session is complete. What is the best answer? Which answer would you be comfortable defending to the team, and why?

- A. Revert half the repository manually
- B. Use git blame on every file
- C. run git bisect reset
- D. Inspect commits sequentially from oldest to newest

**Answer: C**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Reset returns the working tree to the original branch and state. In a real incident, verify that signal before making a disruptive change.

---

### Q653 — Advanced

A release is blocked and the team needs a safe Git recovery path without losing anyone's work. In Git, reset is proposed for a public production branch. What is the best answer? Which answer would you be comfortable defending to the team, and why?

- A. prefer revert to preserve published history
- B. Rewrite the public branch with reset --hard
- C. Delete the bad commit object
- D. Create an unrelated empty commit

**Answer: A**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Reset would rewrite branch history and disrupt collaborators. In a real incident, verify that signal before making a disruptive change.

---

### Q654 — Expert

You're reviewing a Git incident where a quick command could either recover the branch or make the mess worse. In Git, a revert itself caused problems. What is the best answer? Which answer would you be comfortable defending to the team, and why?

- A. Create an unrelated empty commit
- B. Delete the bad commit object
- C. revert the revert
- D. Rewrite the public branch with reset --hard

**Answer: C**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Reverting the revert reapplies the original logical change with a new commit. In a real incident, verify that signal before making a disruptive change.

---

### Q655 — Advanced

A teammate asks what you'd do before touching the shared branch. In Git, untracked files must also be stashed. What is the best answer? Which answer would you be comfortable defending to the team, and why?

- A. Copy only the .git directory elsewhere
- B. Commit temporary work directly to main
- C. use git stash push -u
- D. Use git clean -fd to save the changes

**Answer: C**

**Explanation:** The clue to anchor on is the behavior described in the scenario. The -u option includes untracked files. In a real incident, verify that signal before making a disruptive change.

---

### Q656 — Expert

A release is blocked and the team needs a safe Git recovery path without losing anyone's work. In Git, a stash conflicts when applied. What is the best answer? Which answer would you be comfortable defending to the team, and why?

- A. Commit temporary work directly to main
- B. Copy only the .git directory elsewhere
- C. resolve conflicts and stage the resolved files
- D. Use git clean -fd to save the changes

**Answer: C**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Stash application can conflict just like a merge. In a real incident, verify that signal before making a disruptive change.

---

### Q657 — Advanced

You're reviewing a Git incident where a quick command could either recover the branch or make the mess worse. In Git, a cherry-pick conflicts. What is the best answer? Which answer would you be comfortable defending to the team, and why?

- A. Reset the destination branch to the source
- B. resolve, stage, then run git cherry-pick --continue
- C. Merge the entire source branch
- D. Copy the commit hash into a tag only

**Answer: B**

**Explanation:** The clue to anchor on is the behavior described in the scenario. The sequencer waits for resolved files before continuing. In a real incident, verify that signal before making a disruptive change.

---

### Q658 — Advanced

A teammate asks what you'd do before touching the shared branch. In Git, you picked the wrong commit and have not finished. What is the best answer? Which answer would you be comfortable defending to the team, and why?

- A. Reset the destination branch to the source
- B. Merge the entire source branch
- C. run git cherry-pick --abort
- D. Copy the commit hash into a tag only

**Answer: C**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Abort returns to the pre-cherry-pick state. In a real incident, verify that signal before making a disruptive change.

---

### Q659 — Advanced

A release is blocked and the team needs a safe Git recovery path without losing anyone's work. In Git, git status says both modified. What is the best answer? Which answer would you be comfortable defending to the team, and why?

- A. Delete both conflicted versions
- B. Run git pull repeatedly until Git chooses
- C. Mark the file resolved without reviewing content
- D. the same path changed incompatibly on both sides

**Answer: D**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Git could not automatically merge the content. In a real incident, verify that signal before making a disruptive change.

---

### Q660 — Advanced

You're reviewing a Git incident where a quick command could either recover the branch or make the mess worse. In Git, you want the version from the branch being merged in during a merge. What is the best answer? Which answer would you be comfortable defending to the team, and why?

- A. Mark the file resolved without reviewing content
- B. Delete both conflicted versions
- C. choose theirs carefully and verify semantics
- D. Run git pull repeatedly until Git chooses

**Answer: C**

**Explanation:** The clue to anchor on is the behavior described in the scenario. The labels ours/theirs depend on the operation and should not replace review. In a real incident, verify that signal before making a disruptive change.

---

### Q661 — Expert

A teammate asks what you'd do before touching the shared branch. In Git, a binary file conflicts. What is the best answer? Which answer would you be comfortable defending to the team, and why?

- A. Run git pull repeatedly until Git chooses
- B. Mark the file resolved without reviewing content
- C. choose one version or regenerate it
- D. Delete both conflicted versions

**Answer: C**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Git cannot text-merge arbitrary binary content. In a real incident, verify that signal before making a disruptive change.

---

### Q662 — Advanced

A release is blocked and the team needs a safe Git recovery path without losing anyone's work. In Git, a tag was created locally but is absent remotely. What is the best answer? Which answer would you be comfortable defending to the team, and why?

- A. Use a lightweight tag and call it cryptographically verified
- B. Move an existing public release tag silently
- C. Store the release version only in a branch name
- D. push the tag explicitly

**Answer: D**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Normal branch pushes do not necessarily push tags. In a real incident, verify that signal before making a disruptive change.

---

### Q663 — Expert

You're reviewing a Git incident where a quick command could either recover the branch or make the mess worse. In Git, a published tag must be moved. What is the best answer? Which answer would you be comfortable defending to the team, and why?

- A. Move an existing public release tag silently
- B. Use a lightweight tag and call it cryptographically verified
- C. avoid moving it; create a corrected version tag
- D. Store the release version only in a branch name

**Answer: C**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Retagging breaks reproducibility for consumers who already fetched the old tag. In a real incident, verify that signal before making a disruptive change.

---

### Q664 — Advanced

A teammate asks what you'd do before touching the shared branch. In Git, a clone shows an empty submodule directory. What is the best answer? Which answer would you be comfortable defending to the team, and why?

- A. The parent repository always follows the latest submodule branch
- B. Submodule content is embedded in the parent commit
- C. run git submodule update --init --recursive
- D. Deleting .gitmodules updates every clone automatically

**Answer: C**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Submodule content must be initialized and checked out separately. In a real incident, verify that signal before making a disruptive change.

---

### Q665 — Advanced

A release is blocked and the team needs a safe Git recovery path without losing anyone's work. In Git, the submodule advanced but the parent repository did not. What is the best answer? Which answer would you be comfortable defending to the team, and why?

- A. commit the updated submodule pointer in the parent
- B. The parent repository always follows the latest submodule branch
- C. Submodule content is embedded in the parent commit
- D. Deleting .gitmodules updates every clone automatically

**Answer: A**

**Explanation:** The clue to anchor on is the behavior described in the scenario. The parent must record the new referenced commit. In a real incident, verify that signal before making a disruptive change.

---

### Q666 — Advanced

You're reviewing a Git incident where a quick command could either recover the branch or make the mess worse. In Git, git pull unexpectedly creates a merge commit. What is the best answer? Which answer would you be comfortable defending to the team, and why?

- A. configure or specify rebase/ff-only behavior
- B. Use git pull for a fetch-only operation
- C. Delete remote-tracking branches manually after every fetch
- D. Configure all branches to track every remote branch

**Answer: A**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Pull combines fetch with an integration strategy that should be explicit. In a real incident, verify that signal before making a disruptive change.

---

### Q667 — Advanced

A teammate asks what you'd do before touching the shared branch. In Git, you want to update remote references without changing the working tree. What is the best answer? Which answer would you be comfortable defending to the team, and why?

- A. Configure all branches to track every remote branch
- B. run git fetch
- C. Use git pull for a fetch-only operation
- D. Delete remote-tracking branches manually after every fetch

**Answer: B**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Fetch downloads refs and objects but does not merge them. In a real incident, verify that signal before making a disruptive change.

---

### Q668 — Expert

A release is blocked and the team needs a safe Git recovery path without losing anyone's work. In Git, a remote branch was deleted but still appears locally as origin/x. What is the best answer? Which answer would you be comfortable defending to the team, and why?

- A. fetch with --prune
- B. Configure all branches to track every remote branch
- C. Delete remote-tracking branches manually after every fetch
- D. Use git pull for a fetch-only operation

**Answer: A**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Pruning removes stale remote-tracking references. In a real incident, verify that signal before making a disruptive change.

---

### Q669 — Advanced

You're reviewing a Git incident where a quick command could either recover the branch or make the mess worse. In Git, git gc is run. What is the best answer? Which answer would you be comfortable defending to the team, and why?

- A. Version generated dependencies without a lockfile
- B. it repacks and prunes objects according to retention rules
- C. Deleting the latest secret commit makes old history safe
- D. Commit changing binaries directly because Git delta compression solves all growth

**Answer: B**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Garbage collection optimizes storage and may eventually remove unreachable objects. In a real incident, verify that signal before making a disruptive change.

---

### Q670 — Expert

A teammate asks what you'd do before touching the shared branch. In Git, a generated dependency directory changes constantly. What is the best answer? Which answer would you be comfortable defending to the team, and why?

- A. Version generated dependencies without a lockfile
- B. ignore it and rebuild from a lockfile
- C. Deleting the latest secret commit makes old history safe
- D. Commit changing binaries directly because Git delta compression solves all growth

**Answer: B**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Generated artifacts should usually not be versioned when reproducible. In a real incident, verify that signal before making a disruptive change.

---

## Kubernetes

### Q671 — Advanced

You're on call for a busy Kubernetes cluster and a customer-facing service has started degrading. In Kubernetes, EndpointSlices list no addresses. What is the best answer? Which answer would you be comfortable defending to the team, and why?

- A. Convert the Service to NodePort
- B. verify labels and Pod readiness conditions
- C. Change the application to listen on the Service port
- D. Restart CoreDNS before checking selectors

**Answer: B**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Only selected, eligible Pods become service endpoints. In a real incident, verify that signal before making a disruptive change.

---

### Q672 — Advanced

The incident channel is noisy, but one Kubernetes signal matters more than the rest. In Kubernetes, the Service port is 80 and targetPort is 8080. What is the best answer? Which answer would you be comfortable defending to the team, and why?

- A. Change the application to listen on the Service port
- B. Convert the Service to NodePort
- C. Restart CoreDNS before checking selectors
- D. the application can still listen on 8080

**Answer: D**

**Explanation:** The clue to anchor on is the behavior described in the scenario. The Service maps its port to the target port. In a real incident, verify that signal before making a disruptive change.

---

### Q673 — Advanced

You're deciding what to check before restarting pods or scaling blindly. In Kubernetes, readiness fails while liveness succeeds. What is the best answer? Which answer would you be comfortable defending to the team, and why?

- A. Remove all probes permanently
- B. the Pod stays running but is removed from Service traffic
- C. Increase replica count to hide startup failures
- D. Replace liveness with readiness only

**Answer: B**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Readiness controls endpoint eligibility, not process restart. In a real incident, verify that signal before making a disruptive change.

---

### Q674 — Advanced

You're on call for a busy Kubernetes cluster and a customer-facing service has started degrading. In Kubernetes, liveness checks a downstream database. What is the best answer? Which answer would you be comfortable defending to the team, and why?

- A. Remove all probes permanently
- B. Increase replica count to hide startup failures
- C. this can cause cascading restarts
- D. Replace liveness with readiness only

**Answer: C**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Liveness should usually test whether the local process can recover by restart. In a real incident, verify that signal before making a disruptive change.

---

### Q675 — Expert

The incident channel is noisy, but one Kubernetes signal matters more than the rest. In Kubernetes, a probe timeout is shorter than normal response latency. What is the best answer? Which answer would you be comfortable defending to the team, and why?

- A. tune the probe and fix latency rather than accepting false failures
- B. Increase replica count to hide startup failures
- C. Remove all probes permanently
- D. Replace liveness with readiness only

**Answer: A**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Probe settings must reflect realistic healthy behavior. In a real incident, verify that signal before making a disruptive change.

---

### Q676 — Advanced

You're deciding what to check before restarting pods or scaling blindly. In Kubernetes, a Deployment rollout is paused. What is the best answer? Which answer would you be comfortable defending to the team, and why?

- A. The controller automatically adds nodes
- B. new changes are recorded but not progressed until resumed
- C. An old Pod is always deleted first regardless of maxUnavailable
- D. The scheduler ignores CPU requests during rollout

**Answer: B**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Pause supports batching changes before rollout. In a real incident, verify that signal before making a disruptive change.

---

### Q677 — Expert

You're on call for a busy Kubernetes cluster and a customer-facing service has started degrading. In Kubernetes, progressDeadlineSeconds is exceeded. What is the best answer? Which answer would you be comfortable defending to the team, and why?

- A. The controller automatically adds nodes
- B. The scheduler ignores CPU requests during rollout
- C. the Deployment reports ProgressDeadlineExceeded
- D. An old Pod is always deleted first regardless of maxUnavailable

**Answer: C**

**Explanation:** The clue to anchor on is the behavior described in the scenario. The controller identifies a stalled rollout but does not automatically roll back. In a real incident, verify that signal before making a disruptive change.

---

### Q678 — Advanced

The incident channel is noisy, but one Kubernetes signal matters more than the rest. In Kubernetes, a container uses 2.5 GiB with a 2 GiB memory limit. What is the best answer? Which answer would you be comfortable defending to the team, and why?

- A. The Pod is rescheduled before any limit is enforced
- B. it may be OOMKilled
- C. Both CPU and memory are only throttled
- D. The scheduler automatically raises limits

**Answer: B**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Memory limit violations can terminate processes. In a real incident, verify that signal before making a disruptive change.

---

### Q679 — Advanced

You're deciding what to check before restarting pods or scaling blindly. In Kubernetes, a Pod request is 500m CPU. What is the best answer? Which answer would you be comfortable defending to the team, and why?

- A. The Pod is rescheduled before any limit is enforced
- B. The scheduler automatically raises limits
- C. the scheduler reserves 0.5 CPU for placement calculations
- D. Both CPU and memory are only throttled

**Answer: C**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Requests drive scheduling and QoS. In a real incident, verify that signal before making a disruptive change.

---

### Q680 — Advanced

You're on call for a busy Kubernetes cluster and a customer-facing service has started degrading. In Kubernetes, a Pod has a NoSchedule taint mismatch. What is the best answer? Which answer would you be comfortable defending to the team, and why?

- A. add an appropriate toleration or use an untainted node
- B. Restart the scheduler
- C. Convert required affinity into a Service selector
- D. Increase priority to override all taints and affinity

**Answer: A**

**Explanation:** The clue to anchor on is the behavior described in the scenario. NoSchedule blocks new Pods without matching toleration. In a real incident, verify that signal before making a disruptive change.

---

### Q681 — Advanced

The incident channel is noisy, but one Kubernetes signal matters more than the rest. In Kubernetes, requiredDuringScheduling affinity has no matching node. What is the best answer? Which answer would you be comfortable defending to the team, and why?

- A. Restart the scheduler
- B. the Pod remains Pending
- C. Increase priority to override all taints and affinity
- D. Convert required affinity into a Service selector

**Answer: B**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Hard affinity is a scheduling requirement. In a real incident, verify that signal before making a disruptive change.

---

### Q682 — Expert

You're deciding what to check before restarting pods or scaling blindly. In Kubernetes, preferredDuringScheduling affinity cannot be satisfied. What is the best answer? Which answer would you be comfortable defending to the team, and why?

- A. Increase priority to override all taints and affinity
- B. Restart the scheduler
- C. Convert required affinity into a Service selector
- D. the scheduler may still place the Pod elsewhere

**Answer: D**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Preferred rules influence scoring but are not mandatory. In a real incident, verify that signal before making a disruptive change.

---

### Q683 — Advanced

You're on call for a busy Kubernetes cluster and a customer-facing service has started degrading. In Kubernetes, a StatefulSet uses volumeClaimTemplates. What is the best answer? Which answer would you be comfortable defending to the team, and why?

- A. Delete the StorageClass without checking topology
- B. each replica receives a stable PVC
- C. A PVC becomes bound by converting the Service to LoadBalancer
- D. ReadWriteOnce means exactly one Pod in all cases

**Answer: B**

**Explanation:** The clue to anchor on is the behavior described in the scenario. StatefulSet identity includes per-replica storage. In a real incident, verify that signal before making a disruptive change.

---

### Q684 — Expert

The incident channel is noisy, but one Kubernetes signal matters more than the rest. In Kubernetes, a zonal PV is bound before Pod scheduling in the wrong zone. What is the best answer? Which answer would you be comfortable defending to the team, and why?

- A. ReadWriteOnce means exactly one Pod in all cases
- B. Delete the StorageClass without checking topology
- C. WaitForFirstConsumer can align storage provisioning with Pod placement
- D. A PVC becomes bound by converting the Service to LoadBalancer

**Answer: C**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Delayed binding accounts for topology. In a real incident, verify that signal before making a disruptive change.

---

### Q685 — Advanced

You're deciding what to check before restarting pods or scaling blindly. In Kubernetes, the container exits with code 0 repeatedly under a Deployment. What is the best answer? Which answer would you be comfortable defending to the team, and why?

- A. CrashLoopBackOff is the root application error
- B. Increase the Service timeout to stop restarts
- C. Delete the Pod repeatedly without reading previous logs
- D. the main process is completing when a long-running service is expected

**Answer: D**

**Explanation:** The clue to anchor on is the behavior described in the scenario. A controller restarts the successfully exited container. In a real incident, verify that signal before making a disruptive change.

---

### Q686 — Expert

You're on call for a busy Kubernetes cluster and a customer-facing service has started degrading. In Kubernetes, the backoff delay increases. What is the best answer? Which answer would you be comfortable defending to the team, and why?

- A. CrashLoopBackOff is the root application error
- B. Delete the Pod repeatedly without reading previous logs
- C. Increase the Service timeout to stop restarts
- D. Kubernetes is spacing repeated restart attempts

**Answer: D**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Backoff reduces rapid restart churn. In a real incident, verify that signal before making a disruptive change.

---

### Q687 — Advanced

The incident channel is noisy, but one Kubernetes signal matters more than the rest. In Kubernetes, a private registry Secret exists in another namespace. What is the best answer? Which answer would you be comfortable defending to the team, and why?

- A. Use a mutable tag and imagePullPolicy Never
- B. it cannot be referenced directly by the Pod
- C. Restart the API server
- D. Create the pull Secret in any namespace

**Answer: B**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Secrets are namespace-scoped. In a real incident, verify that signal before making a disruptive change.

---

### Q688 — Advanced

You're deciding what to check before restarting pods or scaling blindly. In Kubernetes, imagePullPolicy is IfNotPresent and a mutable tag is reused. What is the best answer? Which answer would you be comfortable defending to the team, and why?

- A. Restart the API server
- B. a cached old image may run
- C. Use a mutable tag and imagePullPolicy Never
- D. Create the pull Secret in any namespace

**Answer: B**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Immutable tags or digests avoid cache ambiguity. In a real incident, verify that signal before making a disruptive change.

---

### Q689 — Advanced

You're on call for a busy Kubernetes cluster and a customer-facing service has started degrading. In Kubernetes, a short name resolves in one namespace but not another. What is the best answer? Which answer would you be comfortable defending to the team, and why?

- A. Restart the application before testing cluster DNS
- B. DNS search paths are namespace-aware
- C. Increase the backend CPU limit
- D. Convert the backend Service to NodePort

**Answer: B**

**Explanation:** The clue to anchor on is the behavior described in the scenario. service resolves first within the caller's namespace. In a real incident, verify that signal before making a disruptive change.

---

### Q690 — Advanced

The incident channel is noisy, but one Kubernetes signal matters more than the rest. In Kubernetes, a Pod uses dnsPolicy: Default. What is the best answer? Which answer would you be comfortable defending to the team, and why?

- A. Restart the application before testing cluster DNS
- B. Increase the backend CPU limit
- C. Convert the backend Service to NodePort
- D. it inherits node resolver settings rather than cluster DNS

**Answer: D**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Default changes normal Kubernetes service-name resolution behavior. In a real incident, verify that signal before making a disruptive change.

---

### Q691 — Expert

You're deciding what to check before restarting pods or scaling blindly. In Kubernetes, ndots is high and external lookups are slow. What is the best answer? Which answer would you be comfortable defending to the team, and why?

- A. Convert the backend Service to NodePort
- B. Increase the backend CPU limit
- C. Restart the application before testing cluster DNS
- D. search-domain attempts may add latency

**Answer: D**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Resolver behavior can generate multiple queries before an absolute lookup. In a real incident, verify that signal before making a disruptive change.

---

### Q692 — Advanced

You're on call for a busy Kubernetes cluster and a customer-facing service has started degrading. In Kubernetes, a single-replica app has minAvailable: 1. What is the best answer? Which answer would you be comfortable defending to the team, and why?

- A. A PDB prevents node hardware failure
- B. Set minAvailable above the replica count
- C. A PDB blocks every replica-count change
- D. maintenance eviction cannot proceed without violating the PDB

**Answer: D**

**Explanation:** The clue to anchor on is the behavior described in the scenario. There is no spare replica to preserve availability. In a real incident, verify that signal before making a disruptive change.

---

### Q693 — Expert

The incident channel is noisy, but one Kubernetes signal matters more than the rest. In Kubernetes, a Deployment scales replicas down. What is the best answer? Which answer would you be comfortable defending to the team, and why?

- A. Set minAvailable above the replica count
- B. A PDB blocks every replica-count change
- C. the controller's intentional scale is not blocked by a PDB
- D. A PDB prevents node hardware failure

**Answer: C**

**Explanation:** The clue to anchor on is the behavior described in the scenario. PDBs govern eviction, not workload desired replica count. In a real incident, verify that signal before making a disruptive change.

---

### Q694 — Advanced

You're deciding what to check before restarting pods or scaling blindly. In Kubernetes, HPA and a manual operator both change replicas. What is the best answer? Which answer would you be comfortable defending to the team, and why?

- A. Use only memory for every garbage-collected runtime
- B. their controllers can fight each other
- C. HPA works without resource requests in all cases
- D. Let multiple controllers write the same replica field

**Answer: B**

**Explanation:** The clue to anchor on is the behavior described in the scenario. One clear owner should control the replica target. In a real incident, verify that signal before making a disruptive change.

---

### Q695 — Advanced

You're on call for a busy Kubernetes cluster and a customer-facing service has started degrading. In Kubernetes, traffic spikes faster than new Pods become ready. What is the best answer? Which answer would you be comfortable defending to the team, and why?

- A. HPA works without resource requests in all cases
- B. use suitable stabilization, capacity headroom, and possibly queue metrics
- C. Let multiple controllers write the same replica field
- D. Use only memory for every garbage-collected runtime

**Answer: B**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Autoscaling has detection and startup delay. In a real incident, verify that signal before making a disruptive change.

---

### Q696 — Advanced

The incident channel is noisy, but one Kubernetes signal matters more than the rest. In Kubernetes, a RoleBinding references a ClusterRole. What is the best answer? Which answer would you be comfortable defending to the team, and why?

- A. RoleBindings can grant permissions in all namespaces
- B. Grant cluster-admin to solve Forbidden errors
- C. the permissions apply only in the RoleBinding namespace
- D. A ClusterRoleBinding is required for every namespaced permission

**Answer: C**

**Explanation:** The clue to anchor on is the behavior described in the scenario. RoleBinding scope remains namespaced. In a real incident, verify that signal before making a disruptive change.

---

### Q697 — Advanced

You're deciding what to check before restarting pods or scaling blindly. In Kubernetes, an app only needs to list ConfigMaps in one namespace. What is the best answer? Which answer would you be comfortable defending to the team, and why?

- A. grant a namespaced Role with list on configmaps
- B. RoleBindings can grant permissions in all namespaces
- C. A ClusterRoleBinding is required for every namespaced permission
- D. Grant cluster-admin to solve Forbidden errors

**Answer: A**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Least privilege avoids broad cluster permissions. In a real incident, verify that signal before making a disruptive change.

---

### Q698 — Expert

You're on call for a busy Kubernetes cluster and a customer-facing service has started degrading. In Kubernetes, kubectl auth can-i is used with --as. What is the best answer? Which answer would you be comfortable defending to the team, and why?

- A. RoleBindings can grant permissions in all namespaces
- B. it tests effective authorization for the impersonated identity
- C. A ClusterRoleBinding is required for every namespaced permission
- D. Grant cluster-admin to solve Forbidden errors

**Answer: B**

**Explanation:** The clue to anchor on is the behavior described in the scenario. This helps validate RBAC decisions. In a real incident, verify that signal before making a disruptive change.

---

### Q699 — Advanced

The incident channel is noisy, but one Kubernetes signal matters more than the rest. In Kubernetes, Ingress returns 504. What is the best answer? Which answer would you be comfortable defending to the team, and why?

- A. A 504 means the controller found no matching Ingress rule
- B. the upstream connection or response timed out
- C. A default 404 proves the application is down
- D. A 502 is always a DNS error

**Answer: B**

**Explanation:** The clue to anchor on is the behavior described in the scenario. A gateway timeout indicates the request did not complete in time. In a real incident, verify that signal before making a disruptive change.

---

### Q700 — Expert

You're deciding what to check before restarting pods or scaling blindly. In Kubernetes, two controllers watch the same Ingress without clear classing. What is the best answer? Which answer would you be comfortable defending to the team, and why?

- A. A default 404 proves the application is down
- B. A 502 is always a DNS error
- C. A 504 means the controller found no matching Ingress rule
- D. routing can be inconsistent or duplicated

**Answer: D**

**Explanation:** The clue to anchor on is the behavior described in the scenario. IngressClass should make controller ownership explicit. In a real incident, verify that signal before making a disruptive change.

---

## Linux

### Q701 — Advanced

You're on call and a production Linux host starts behaving badly during peak traffic. A server shows load 18, CPU idle 60%, vmstat shows b=16 and bi=80000. What is the most likely cause? Which answer would you be comfortable defending to the team, and why?

- A. CPU saturation from too many runnable tasks
- B. active swapping caused by memory pressure
- C. a DNS resolver failure
- D. blocked disk reads

**Answer: D**

**Explanation:** The clue to anchor on is the behavior described in the scenario. A high blocked-task count and heavy block input indicate storage waits, not CPU saturation. In a real incident, verify that signal before making a disruptive change.

---

### Q702 — Advanced

A teammate drops this evidence into the incident channel and asks what it really means. A server shows load 30 on a 16-core host, CPUs mostly idle, NFS latency is 900 ms. What is the most likely cause? Which answer would you be comfortable defending to the team, and why?

- A. CPU saturation from too many runnable tasks
- B. a DNS resolver failure
- C. slow NFS causing uninterruptible waits
- D. active swapping caused by memory pressure

**Answer: C**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Load average includes tasks waiting in uninterruptible sleep, including NFS waits. In a real incident, verify that signal before making a disruptive change.

---

### Q703 — Expert

You're trying to avoid a blind restart and want to act on the strongest signal first. A server shows load rises after a SAN path degrades while CPU use remains below 30%. What is the most likely cause? Which answer would you be comfortable defending to the team, and why?

- A. CPU saturation from too many runnable tasks
- B. a DNS resolver failure
- C. active swapping caused by memory pressure
- D. storage latency

**Answer: D**

**Explanation:** The clue to anchor on is the behavior described in the scenario. High load with low CPU after a SAN issue strongly indicates I/O-bound blocked tasks. In a real incident, verify that signal before making a disruptive change.

---

### Q704 — Advanced

You're on call and a production Linux host starts behaving badly during peak traffic. Which interpretation is most accurate when MemAvailable drops below 400 MB and major page faults climb sharply? Which answer would you be comfortable defending to the team, and why?

- A. Cached memory is unreclaimable until reboot
- B. The host is critically out of memory solely because MemFree is low
- C. The host is under real memory pressure
- D. The CPU scheduler is malfunctioning

**Answer: C**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Low MemAvailable plus major faults is evidence of pressure, unlike low MemFree alone. In a real incident, verify that signal before making a disruptive change.

---

### Q705 — Expert

A teammate drops this evidence into the incident channel and asks what it really means. Which interpretation is most accurate when swap-in and swap-out remain high for ten minutes while latency rises? Which answer would you be comfortable defending to the team, and why?

- A. The CPU scheduler is malfunctioning
- B. Cached memory is unreclaimable until reboot
- C. The host is critically out of memory solely because MemFree is low
- D. active swapping is degrading performance

**Answer: D**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Sustained si/so activity means pages are moving between RAM and swap. In a real incident, verify that signal before making a disruptive change.

---

### Q706 — Advanced

You're trying to avoid a blind restart and want to act on the strongest signal first. In Linux, hundreds of defunct child processes accumulate under one PID. What is the correct conclusion or action? Which answer would you be comfortable defending to the team, and why?

- A. Fix or restart the parent process
- B. The filesystem must be remounted
- C. The kernel thread must be killed with SIGKILL
- D. The process is consuming CPU in the background

**Answer: A**

**Explanation:** The clue to anchor on is the behavior described in the scenario. The parent is failing to reap children; killing individual zombies does not solve the cause. In a real incident, verify that signal before making a disruptive change.

---

### Q707 — Advanced

You're on call and a production Linux host starts behaving badly during peak traffic. In Linux, kill -9 on a zombie has no effect. What is the correct conclusion or action? Which answer would you be comfortable defending to the team, and why?

- A. The process is consuming CPU in the background
- B. The process is already dead
- C. The filesystem must be remounted
- D. The kernel thread must be killed with SIGKILL

**Answer: B**

**Explanation:** The clue to anchor on is the behavior described in the scenario. A zombie has no running code to signal; the parent must reap it. In a real incident, verify that signal before making a disruptive change.

---

### Q708 — Expert

A teammate drops this evidence into the incident channel and asks what it really means. In Linux, PID 1 adopts orphaned children after their parent exits. What is the correct conclusion or action? Which answer would you be comfortable defending to the team, and why?

- A. The kernel thread must be killed with SIGKILL
- B. The process is consuming CPU in the background
- C. The filesystem must be remounted
- D. PID 1 should reap them

**Answer: D**

**Explanation:** The clue to anchor on is the behavior described in the scenario. The init process becomes the parent of orphans and is responsible for reaping them. In a real incident, verify that signal before making a disruptive change.

---

### Q709 — Advanced

You're trying to avoid a blind restart and want to act on the strongest signal first. A filesystem issue is observed: an application creates millions of tiny cache files. What is the best response? Which answer would you be comfortable defending to the team, and why?

- A. Increase the filesystem block size without cleanup
- B. Restart the network service
- C. inode exhaustion may occur before space exhaustion
- D. Run fsck immediately on the mounted filesystem

**Answer: C**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Small files can consume all inodes while leaving significant byte capacity. In a real incident, verify that signal before making a disruptive change.

---

### Q710 — Expert

You're on call and a production Linux host starts behaving badly during peak traffic. A filesystem issue is observed: /var is full by inode count due to session files. What is the best response? Which answer would you be comfortable defending to the team, and why?

- A. Run fsck immediately on the mounted filesystem
- B. Increase the filesystem block size without cleanup
- C. Restart the network service
- D. clean old session files and add retention controls

**Answer: D**

**Explanation:** The clue to anchor on is the behavior described in the scenario. The immediate fix is cleanup; the durable fix is lifecycle management. In a real incident, verify that signal before making a disruptive change.

---

### Q711 — Advanced

A teammate drops this evidence into the incident channel and asks what it really means. Given that a shared directory needs new files to inherit its group, what is the best solution or interpretation? Which answer would you be comfortable defending to the team, and why?

- A. Grant mode 0777 to the entire parent tree
- B. Run the process as root permanently
- C. Disable mandatory access control globally
- D. set the setgid bit on the directory

**Answer: D**

**Explanation:** The clue to anchor on is the behavior described in the scenario. setgid on a directory causes new entries to inherit the directory group. In a real incident, verify that signal before making a disruptive change.

---

### Q712 — Expert

You're trying to avoid a blind restart and want to act on the strongest signal first. Given that a process must bind to port 80 without running fully as root, what is the best solution or interpretation? Which answer would you be comfortable defending to the team, and why?

- A. Run the process as root permanently
- B. Grant mode 0777 to the entire parent tree
- C. Disable mandatory access control globally
- D. grant only CAP_NET_BIND_SERVICE

**Answer: D**

**Explanation:** The clue to anchor on is the behavior described in the scenario. A targeted capability is safer than full root privilege. In a real incident, verify that signal before making a disruptive change.

---

### Q713 — Advanced

You're on call and a production Linux host starts behaving badly during peak traffic. A systemd service has this issue: a unit starts before the network is actually usable. What should you do first? Which answer would you be comfortable defending to the team, and why?

- A. order it after network-online.target and enable the wait-online service where appropriate
- B. Reboot after every failed start
- C. Delete and recreate the unit file without inspecting logs
- D. Add an arbitrary sleep before startup

**Answer: A**

**Explanation:** The clue to anchor on is the behavior described in the scenario. network.target does not guarantee usable connectivity. In a real incident, verify that signal before making a disruptive change.

---

### Q714 — Expert

A teammate drops this evidence into the incident channel and asks what it really means. A systemd service has this issue: a daemon forks but the unit is configured Type=simple. What should you do first? Which answer would you be comfortable defending to the team, and why?

- A. Reboot after every failed start
- B. use the correct service Type or run the daemon in foreground
- C. Delete and recreate the unit file without inspecting logs
- D. Add an arbitrary sleep before startup

**Answer: B**

**Explanation:** The clue to anchor on is the behavior described in the scenario. systemd must track the real main process correctly. In a real incident, verify that signal before making a disruptive change.

---

### Q715 — Advanced

You're trying to avoid a blind restart and want to act on the strongest signal first. What is the correct action when a daemon supports configuration reload without restart? Which answer would you be comfortable defending to the team, and why?

- A. Close the listening firewall port
- B. Send SIGSTOP to request graceful cleanup
- C. Change the process nice value
- D. send SIGHUP if documented

**Answer: D**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Many daemons use SIGHUP to reload configuration. In a real incident, verify that signal before making a disruptive change.

---

### Q716 — Expert

You're on call and a production Linux host starts behaving badly during peak traffic. What is the correct action when a container exits slowly because its shell wrapper does not forward signals? Which answer would you be comfortable defending to the team, and why?

- A. Close the listening firewall port
- B. Send SIGSTOP to request graceful cleanup
- C. use exec so the application becomes PID 1
- D. Change the process nice value

**Answer: C**

**Explanation:** The clue to anchor on is the behavior described in the scenario. exec replaces the shell, allowing signals to reach the application directly. In a real incident, verify that signal before making a disruptive change.

---

### Q717 — Advanced

A teammate drops this evidence into the incident channel and asks what it really means. A file-descriptor problem occurs: ulimit -n is 1024 for a high-connection proxy. What is the best diagnosis or action? Which answer would you be comfortable defending to the team, and why?

- A. Clear the filesystem page cache
- B. raise the limit through the service manager and verify application settings
- C. Increase CPU frequency
- D. Disable TCP keepalive system-wide

**Answer: B**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Interactive shell limits may not affect systemd services. In a real incident, verify that signal before making a disruptive change.

---

### Q718 — Advanced

You're trying to avoid a blind restart and want to act on the strongest signal first. A file-descriptor problem occurs: lsof shows thousands of sockets in CLOSE_WAIT owned by one process. What is the best diagnosis or action? Which answer would you be comfortable defending to the team, and why?

- A. Clear the filesystem page cache
- B. Disable TCP keepalive system-wide
- C. the application is not closing sockets after peer shutdown
- D. Increase CPU frequency

**Answer: C**

**Explanation:** The clue to anchor on is the behavior described in the scenario. CLOSE_WAIT persists until the local application closes the socket. In a real incident, verify that signal before making a disruptive change.

---

### Q719 — Expert

You're on call and a production Linux host starts behaving badly during peak traffic. A file-descriptor problem occurs: a leak steadily increases open descriptors until failure. What is the best diagnosis or action? Which answer would you be comfortable defending to the team, and why?

- A. Disable TCP keepalive system-wide
- B. Increase CPU frequency
- C. identify descriptor types with lsof and fix the application leak
- D. Clear the filesystem page cache

**Answer: C**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Raising limits only delays a true descriptor leak. In a real incident, verify that signal before making a disruptive change.

---

### Q720 — Advanced

A teammate drops this evidence into the incident channel and asks what it really means. Disk usage behaves unexpectedly because logrotate uses copytruncate for a busy application. What is correct? Which answer would you be comfortable defending to the team, and why?

- A. Reformat the filesystem
- B. Increase the inode limit only
- C. du is always authoritative and df is incorrect
- D. it avoids reopen requirements but can lose a small amount of data

**Answer: D**

**Explanation:** The clue to anchor on is the behavior described in the scenario. copytruncate has a race between copying and truncation. In a real incident, verify that signal before making a disruptive change.

---

### Q721 — Expert

You're trying to avoid a blind restart and want to act on the strongest signal first. Disk usage behaves unexpectedly because a service supports USR1 to reopen logs. What is correct? Which answer would you be comfortable defending to the team, and why?

- A. Increase the inode limit only
- B. du is always authoritative and df is incorrect
- C. rotate the file and signal the service
- D. Reformat the filesystem

**Answer: C**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Reopening closes the old descriptor and releases disk space safely. In a real incident, verify that signal before making a disruptive change.

---

### Q722 — Advanced

You're on call and a production Linux host starts behaving badly during peak traffic. A scheduled task has this requirement or failure: a cron job needs credentials from a shell profile. What is the best answer? Which answer would you be comfortable defending to the team, and why?

- A. Use relative command paths because cron starts in the script directory
- B. Disable time synchronization
- C. Cron always loads the user's interactive shell profile
- D. load them explicitly from a protected file or secret mechanism

**Answer: D**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Non-interactive cron jobs do not reliably source user profiles. In a real incident, verify that signal before making a disruptive change.

---

### Q723 — Advanced

A teammate drops this evidence into the incident channel and asks what it really means. A scheduled task has this requirement or failure: a monthly job should run at 02:00 on the first day. What is the best answer? Which answer would you be comfortable defending to the team, and why?

- A. use 0 2 1 * *
- B. Disable time synchronization
- C. Use relative command paths because cron starts in the script directory
- D. Cron always loads the user's interactive shell profile

**Answer: A**

**Explanation:** The clue to anchor on is the behavior described in the scenario. The five cron fields are minute, hour, day of month, month, day of week. In a real incident, verify that signal before making a disruptive change.

---

### Q724 — Advanced

You're trying to avoid a blind restart and want to act on the strongest signal first. During Linux network troubleshooting, SYN packets arrive but no SYN-ACK leaves. What is the correct conclusion or next step? Which answer would you be comfortable defending to the team, and why?

- A. Increase the process memory limit
- B. check local firewall and whether a process is listening
- C. The service must be converted to UDP
- D. Flush the Git credential cache

**Answer: B**

**Explanation:** The clue to anchor on is the behavior described in the scenario. The failure is on the destination host before a TCP session is established. In a real incident, verify that signal before making a disruptive change.

---

### Q725 — Expert

You're on call and a production Linux host starts behaving badly during peak traffic. During Linux network troubleshooting, connections work locally but time out remotely. What is the correct conclusion or next step? Which answer would you be comfortable defending to the team, and why?

- A. Increase the process memory limit
- B. compare bind address, firewall, routing, and security-group rules
- C. Flush the Git credential cache
- D. The service must be converted to UDP

**Answer: B**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Local success only proves the process is running, not that the path is open. In a real incident, verify that signal before making a disruptive change.

---

### Q726 — Advanced

A teammate drops this evidence into the incident channel and asks what it really means. For LVM storage, an XFS filesystem must be expanded. What is the correct action? Which answer would you be comfortable defending to the team, and why?

- A. Shrink the logical volume before the filesystem
- B. Remove the physical volume first
- C. Format the logical volume after extending it
- D. use xfs_growfs while mounted

**Answer: D**

**Explanation:** The clue to anchor on is the behavior described in the scenario. XFS grows online using xfs_growfs and does not shrink. In a real incident, verify that signal before making a disruptive change.

---

### Q727 — Expert

You're trying to avoid a blind restart and want to act on the strongest signal first. For LVM storage, you plan to shrink a filesystem. What is the correct action? Which answer would you be comfortable defending to the team, and why?

- A. verify filesystem support and shrink the filesystem before the LV
- B. Remove the physical volume first
- C. Format the logical volume after extending it
- D. Shrink the logical volume before the filesystem

**Answer: A**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Shrinking the LV first can destroy data; XFS cannot be shrunk in place. In a real incident, verify that signal before making a disruptive change.

---

### Q728 — Advanced

You're on call and a production Linux host starts behaving badly during peak traffic. A virtual Linux host shows this behavior: application latency tracks CPU steal spikes. What does it indicate? Which answer would you be comfortable defending to the team, and why?

- A. The filesystem journal is full
- B. The DNS resolver is consuming CPU
- C. investigate host contention or move the VM
- D. The guest kernel has an inode leak

**Answer: C**

**Explanation:** The clue to anchor on is the behavior described in the scenario. High steal points outside the guest to oversubscribed physical CPU. In a real incident, verify that signal before making a disruptive change.

---

### Q729 — Advanced

A teammate drops this evidence into the incident channel and asks what it really means. A virtual Linux host shows this behavior: CPU user and system are low but run queue is high and steal is 40%. What does it indicate? Which answer would you be comfortable defending to the team, and why?

- A. The guest kernel has an inode leak
- B. the VM is CPU-starved by the host
- C. The DNS resolver is consuming CPU
- D. The filesystem journal is full

**Answer: B**

**Explanation:** The clue to anchor on is the behavior described in the scenario. The guest has runnable work but is waiting for physical CPU. In a real incident, verify that signal before making a disruptive change.

---

### Q730 — Expert

You're trying to avoid a blind restart and want to act on the strongest signal first. A virtual Linux host shows this behavior: a noisy neighbor affects a shared cloud VM. What does it indicate? Which answer would you be comfortable defending to the team, and why?

- A. The DNS resolver is consuming CPU
- B. The filesystem journal is full
- C. choose a less contended host or dedicated capacity
- D. The guest kernel has an inode leak

**Answer: C**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Guest tuning cannot fully solve hypervisor-level contention. In a real incident, verify that signal before making a disruptive change.

---

## Monitoring and Observability

### Q731 — Advanced

An alert fired in production, but you need to decide whether it actually explains the user impact. For monitoring and observability, 5xx rate is 20 rps out of 10,000 rps. What is the best answer? Which answer would you be comfortable defending to the team, and why?

- A. the error ratio is 0.2%
- B. Ignore the total request denominator
- C. Average every route into one value regardless of traffic
- D. Use only the absolute error count

**Answer: A**

**Explanation:** The clue to anchor on is the behavior described in the scenario. 20 divided by 10,000 equals 0.002. In a real incident, verify that signal before making a disruptive change.

---

### Q732 — Advanced

Dashboards are full of signals and the incident commander asks which one you would trust first. For monitoring and observability, a low-traffic service has one failure out of one request. What is the best answer? Which answer would you be comfortable defending to the team, and why?

- A. Average every route into one value regardless of traffic
- B. Use only the absolute error count
- C. the ratio is high but needs minimum-volume handling
- D. Ignore the total request denominator

**Answer: C**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Ratio alerts can be noisy at tiny denominators. In a real incident, verify that signal before making a disruptive change.

---

### Q733 — Advanced

You're trying to turn telemetry into a testable hypothesis instead of chasing graphs. For monitoring and observability, you want the approximate number of requests in one hour. What is the best answer? Which answer would you be comfortable defending to the team, and why?

- A. Use irate for every long-window alert
- B. Subtract raw counters without handling resets
- C. use increase over one hour
- D. Treat a counter as a gauge

**Answer: C**

**Explanation:** The clue to anchor on is the behavior described in the scenario. increase estimates total counter growth in the window. In a real incident, verify that signal before making a disruptive change.

---

### Q734 — Advanced

An alert fired in production, but you need to decide whether it actually explains the user impact. For monitoring and observability, irate is used for a slow-moving alert. What is the best answer? Which answer would you be comfortable defending to the team, and why?

- A. rate is usually more stable
- B. Subtract raw counters without handling resets
- C. Treat a counter as a gauge
- D. Use irate for every long-window alert

**Answer: A**

**Explanation:** The clue to anchor on is the behavior described in the scenario. irate uses only the last two samples and is noisier. In a real incident, verify that signal before making a disruptive change.

---

### Q735 — Expert

Dashboards are full of signals and the incident commander asks which one you would trust first. For monitoring and observability, a counter resets after restart. What is the best answer? Which answer would you be comfortable defending to the team, and why?

- A. Subtract raw counters without handling resets
- B. Treat a counter as a gauge
- C. rate and increase account for the reset
- D. Use irate for every long-window alert

**Answer: C**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Raw subtraction would appear negative. In a real incident, verify that signal before making a disruptive change.

---

### Q736 — Advanced

You're trying to turn telemetry into a testable hypothesis instead of chasing graphs. For monitoring and observability, Prometheus memory grows with active series. What is the best answer? Which answer would you be comfortable defending to the team, and why?

- A. reduce label cardinality and retention pressure
- B. Use raw UUID paths as metric labels
- C. Label metrics with every user and request ID
- D. Increase retention to solve cardinality

**Answer: A**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Series count is a major resource driver. In a real incident, verify that signal before making a disruptive change.

---

### Q737 — Expert

An alert fired in production, but you need to decide whether it actually explains the user impact. For monitoring and observability, debug labels are useful briefly. What is the best answer? Which answer would you be comfortable defending to the team, and why?

- A. Increase retention to solve cardinality
- B. send them to logs or controlled exemplars rather than permanent metrics
- C. Label metrics with every user and request ID
- D. Use raw UUID paths as metric labels

**Answer: B**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Metrics should use bounded dimensions. In a real incident, verify that signal before making a disruptive change.

---

### Q738 — Advanced

Dashboards are full of signals and the incident commander asks which one you would trust first. For monitoring and observability, a summary reports client-side quantiles. What is the best answer? Which answer would you be comfortable defending to the team, and why?

- A. quantiles generally cannot be aggregated correctly across instances
- B. Store every request as a metric series
- C. Sum client-side quantiles across instances
- D. Use the +Inf bucket alone for accurate p95

**Answer: A**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Precomputed quantiles do not combine mathematically. In a real incident, verify that signal before making a disruptive change.

---

### Q739 — Advanced

You're trying to turn telemetry into a testable hypothesis instead of chasing graphs. For monitoring and observability, all histogram observations fall in the +Inf bucket. What is the best answer? Which answer would you be comfortable defending to the team, and why?

- A. Use the +Inf bucket alone for accurate p95
- B. Sum client-side quantiles across instances
- C. Store every request as a metric series
- D. bucket boundaries are poorly chosen for useful quantiles

**Answer: D**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Quantile accuracy depends on bucket placement. In a real incident, verify that signal before making a disruptive change.

---

### Q740 — Advanced

An alert fired in production, but you need to decide whether it actually explains the user impact. For monitoring and observability, warning and critical alerts page the same channel. What is the best answer? Which answer would you be comfortable defending to the team, and why?

- A. Page on alerts that require no action
- B. Keep duplicate symptom alerts uninhibited
- C. Route all severities to the same pager
- D. route by urgency and required response

**Answer: D**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Paging should be reserved for time-sensitive action. In a real incident, verify that signal before making a disruptive change.

---

### Q741 — Advanced

Dashboards are full of signals and the incident commander asks which one you would trust first. For monitoring and observability, one incident triggers 200 dependent alerts. What is the best answer? Which answer would you be comfortable defending to the team, and why?

- A. Keep duplicate symptom alerts uninhibited
- B. Page on alerts that require no action
- C. use inhibition, grouping, and root-cause alerting
- D. Route all severities to the same pager

**Answer: C**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Noise obscures the primary failure. In a real incident, verify that signal before making a disruptive change.

---

### Q742 — Expert

You're trying to turn telemetry into a testable hypothesis instead of chasing graphs. For monitoring and observability, an alert has no runbook or owner. What is the best answer? Which answer would you be comfortable defending to the team, and why?

- A. Route all severities to the same pager
- B. add ownership, context, and a response procedure
- C. Keep duplicate symptom alerts uninhibited
- D. Page on alerts that require no action

**Answer: B**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Actionability requires clear responsibility and diagnosis steps. In a real incident, verify that signal before making a disruptive change.

---

### Q743 — Advanced

An alert fired in production, but you need to decide whether it actually explains the user impact. For monitoring and observability, a provider contract includes penalties below 99.9%. What is the best answer? Which answer would you be comfortable defending to the team, and why?

- A. this is an SLA
- B. Call an SLO a legal penalty contract
- C. Define availability without eligible-event rules
- D. Treat an internal process metric as the user SLI

**Answer: A**

**Explanation:** The clue to anchor on is the behavior described in the scenario. An SLA is a formal agreement with consequences. In a real incident, verify that signal before making a disruptive change.

---

### Q744 — Expert

Dashboards are full of signals and the incident commander asks which one you would trust first. For monitoring and observability, internal health checks are perfect but users fail. What is the best answer? Which answer would you be comfortable defending to the team, and why?

- A. Treat an internal process metric as the user SLI
- B. Call an SLO a legal penalty contract
- C. the SLI is not measuring the user experience
- D. Define availability without eligible-event rules

**Answer: C**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Good SLIs reflect outcomes that matter to users. In a real incident, verify that signal before making a disruptive change.

---

### Q745 — Advanced

You're trying to turn telemetry into a testable hypothesis instead of chasing graphs. For monitoring and observability, a small persistent issue consumes budget over days. What is the best answer? Which answer would you be comfortable defending to the team, and why?

- A. a slower burn window should create a lower-urgency alert
- B. Ignore persistent slow budget consumption
- C. Alert only when the monthly window is already over
- D. Use error budget only as a dashboard decoration

**Answer: A**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Multi-window burn rates detect both fast and slow problems. In a real incident, verify that signal before making a disruptive change.

---

### Q746 — Expert

An alert fired in production, but you need to decide whether it actually explains the user impact. For monitoring and observability, the budget is exhausted. What is the best answer? Which answer would you be comfortable defending to the team, and why?

- A. Use error budget only as a dashboard decoration
- B. Ignore persistent slow budget consumption
- C. freeze risky changes and prioritize reliability according to policy
- D. Alert only when the monthly window is already over

**Answer: C**

**Explanation:** The clue to anchor on is the behavior described in the scenario. The budget provides a decision mechanism, not just a report. In a real incident, verify that signal before making a disruptive change.

---

### Q747 — Advanced

Dashboards are full of signals and the incident commander asks which one you would trust first. For monitoring and observability, a request ID appears in every service log. What is the best answer? Which answer would you be comfortable defending to the team, and why?

- A. Log unstructured payloads with inconsistent fields
- B. cross-service investigation becomes easier
- C. Record every large successful payload indefinitely
- D. Emit passwords and redact them later

**Answer: B**

**Explanation:** The clue to anchor on is the behavior described in the scenario. A shared correlation identifier links events. In a real incident, verify that signal before making a disruptive change.

---

### Q748 — Advanced

You're trying to turn telemetry into a testable hypothesis instead of chasing graphs. For monitoring and observability, passwords are logged for debugging. What is the best answer? Which answer would you be comfortable defending to the team, and why?

- A. remove and rotate exposed credentials
- B. Emit passwords and redact them later
- C. Record every large successful payload indefinitely
- D. Log unstructured payloads with inconsistent fields

**Answer: A**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Sensitive data should never be emitted. In a real incident, verify that signal before making a disruptive change.

---

### Q749 — Advanced

An alert fired in production, but you need to decide whether it actually explains the user impact. For monitoring and observability, sampling is 1%. What is the best answer? Which answer would you be comfortable defending to the team, and why?

- A. Keep logs and traces unrelated
- B. Use random sampling with no protection for rare errors
- C. Drop trace context at queue boundaries
- D. rare failures may be missed unless tail-based or error-biased sampling is used

**Answer: D**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Sampling policy affects diagnostic coverage. In a real incident, verify that signal before making a disruptive change.

---

### Q750 — Advanced

Dashboards are full of signals and the incident commander asks which one you would trust first. For monitoring and observability, one span dominates trace latency. What is the best answer? Which answer would you be comfortable defending to the team, and why?

- A. Use random sampling with no protection for rare errors
- B. Keep logs and traces unrelated
- C. Drop trace context at queue boundaries
- D. investigate that operation and its downstream dependency

**Answer: D**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Critical path spans explain end-to-end duration. In a real incident, verify that signal before making a disruptive change.

---

### Q751 — Expert

You're trying to turn telemetry into a testable hypothesis instead of chasing graphs. For monitoring and observability, trace IDs are included in logs. What is the best answer? Which answer would you be comfortable defending to the team, and why?

- A. engineers can pivot between traces and detailed events
- B. Drop trace context at queue boundaries
- C. Use random sampling with no protection for rare errors
- D. Keep logs and traces unrelated

**Answer: A**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Cross-signal correlation speeds diagnosis. In a real incident, verify that signal before making a disruptive change.

---

### Q752 — Advanced

An alert fired in production, but you need to decide whether it actually explains the user impact. For monitoring and observability, scrape duration approaches the scrape interval. What is the best answer? Which answer would you be comfortable defending to the team, and why?

- A. Assume up=0 proves the application is unavailable
- B. collection may overlap or time out
- C. Make scrape duration longer than the interval
- D. Restart the application before checking scrape configuration

**Answer: B**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Expensive exporters can destabilize monitoring. In a real incident, verify that signal before making a disruptive change.

---

### Q753 — Expert

Dashboards are full of signals and the incident commander asks which one you would trust first. For monitoring and observability, a target disappears from discovery. What is the best answer? Which answer would you be comfortable defending to the team, and why?

- A. Assume up=0 proves the application is unavailable
- B. Restart the application before checking scrape configuration
- C. Make scrape duration longer than the interval
- D. inspect labels and discovery configuration before the exporter

**Answer: D**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Prometheus cannot scrape a target it no longer discovers. In a real incident, verify that signal before making a disruptive change.

---

### Q754 — Advanced

You're trying to turn telemetry into a testable hypothesis instead of chasing graphs. For monitoring and observability, you sum rates across instances. What is the best answer? Which answer would you be comfortable defending to the team, and why?

- A. Graph raw counters across restarts as continuous values
- B. this is valid for total throughput
- C. Treat a reset as negative traffic
- D. Use a counter for naturally decreasing state

**Answer: B**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Rates are additive across independent counters. In a real incident, verify that signal before making a disruptive change.

---

### Q755 — Advanced

An alert fired in production, but you need to decide whether it actually explains the user impact. For monitoring and observability, you sum raw counters with different restart times. What is the best answer? Which answer would you be comfortable defending to the team, and why?

- A. Graph raw counters across restarts as continuous values
- B. Treat a reset as negative traffic
- C. the graph can be misleading
- D. Use a counter for naturally decreasing state

**Answer: C**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Raw totals embed process lifetime and resets. In a real incident, verify that signal before making a disruptive change.

---

### Q756 — Advanced

Dashboards are full of signals and the incident commander asks which one you would trust first. For monitoring and observability, an alert expression is complex and reused. What is the best answer? Which answer would you be comfortable defending to the team, and why?

- A. a named recording rule improves consistency
- B. Use an evaluation interval too coarse for the signal
- C. Repeat expensive queries in every dashboard panel
- D. Create recorded series with unbounded labels

**Answer: A**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Centralized calculations reduce copy-paste drift. In a real incident, verify that signal before making a disruptive change.

---

### Q757 — Advanced

You're trying to turn telemetry into a testable hypothesis instead of chasing graphs. For monitoring and observability, a recording rule interval is too coarse. What is the best answer? Which answer would you be comfortable defending to the team, and why?

- A. short spikes may be smoothed or missed
- B. Repeat expensive queries in every dashboard panel
- C. Create recorded series with unbounded labels
- D. Use an evaluation interval too coarse for the signal

**Answer: A**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Evaluation cadence should match the signal. In a real incident, verify that signal before making a disruptive change.

---

### Q758 — Expert

An alert fired in production, but you need to decide whether it actually explains the user impact. For monitoring and observability, recorded series add labels carelessly. What is the best answer? Which answer would you be comfortable defending to the team, and why?

- A. Repeat expensive queries in every dashboard panel
- B. Use an evaluation interval too coarse for the signal
- C. they can increase cardinality
- D. Create recorded series with unbounded labels

**Answer: C**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Precomputation does not remove label-design responsibility. In a real incident, verify that signal before making a disruptive change.

---

### Q759 — Advanced

Dashboards are full of signals and the incident commander asks which one you would trust first. For monitoring and observability, internal metrics are healthy but the public probe fails. What is the best answer? Which answer would you be comfortable defending to the team, and why?

- A. Rely only on black-box checks for root cause
- B. Probe only from inside the same process
- C. Assume internal metrics prove the public path works
- D. investigate DNS, CDN, load balancer, TLS, and network path

**Answer: D**

**Explanation:** The clue to anchor on is the behavior described in the scenario. External dependencies may fail outside the application. In a real incident, verify that signal before making a disruptive change.

---

### Q760 — Expert

You're trying to turn telemetry into a testable hypothesis instead of chasing graphs. For monitoring and observability, only black-box checks exist. What is the best answer? Which answer would you be comfortable defending to the team, and why?

- A. Assume internal metrics prove the public path works
- B. Probe only from inside the same process
- C. Rely only on black-box checks for root cause
- D. add internal metrics for diagnosis

**Answer: D**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Black-box signals detect symptoms but may not explain cause. In a real incident, verify that signal before making a disruptive change.

---

## Networking

### Q761 — Advanced

Users are reporting intermittent connectivity and the network path has several layers that could be responsible. In network troubleshooting, SYN packets are retransmitted with no reply. What is the correct interpretation or action? Which answer would you be comfortable defending to the team, and why?

- A. A SYN alone means the connection is established
- B. Application success is proven by the TCP handshake
- C. the path, firewall, or listener may be dropping them
- D. A timeout is identical to an immediate RST

**Answer: C**

**Explanation:** The clue to anchor on is the behavior described in the scenario. No SYN-ACK means connection establishment never completed. In a real incident, verify that signal before making a disruptive change.

---

### Q762 — Advanced

You're debugging a production network issue and want to follow the evidence rather than guess. In network troubleshooting, RST is returned immediately. What is the correct interpretation or action? Which answer would you be comfortable defending to the team, and why?

- A. A SYN alone means the connection is established
- B. the destination actively rejected the connection or no service is listening
- C. Application success is proven by the TCP handshake
- D. A timeout is identical to an immediate RST

**Answer: B**

**Explanation:** The clue to anchor on is the behavior described in the scenario. A reset is different from a silent timeout. In a real incident, verify that signal before making a disruptive change.

---

### Q763 — Advanced

The service is reachable sometimes, which makes the failure more subtle than a simple port-down event. In network troubleshooting, SERVFAIL is returned. What is the correct interpretation or action? Which answer would you be comfortable defending to the team, and why?

- A. NXDOMAIN means the DNS server timed out
- B. TTL changes invalidate every client cache instantly
- C. SERVFAIL proves the name does not exist
- D. the resolver could not complete resolution successfully

**Answer: D**

**Explanation:** The clue to anchor on is the behavior described in the scenario. DNSSEC, upstream, timeout, or authoritative problems can cause SERVFAIL. In a real incident, verify that signal before making a disruptive change.

---

### Q764 — Advanced

Users are reporting intermittent connectivity and the network path has several layers that could be responsible. In network troubleshooting, a record changed but clients still use the old address. What is the correct interpretation or action? Which answer would you be comfortable defending to the team, and why?

- A. TTL changes invalidate every client cache instantly
- B. cached TTL may not have expired
- C. NXDOMAIN means the DNS server timed out
- D. SERVFAIL proves the name does not exist

**Answer: B**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Resolvers can legally retain the old value until TTL expiration. In a real incident, verify that signal before making a disruptive change.

---

### Q765 — Expert

You're debugging a production network issue and want to follow the evidence rather than guess. In network troubleshooting, an internal and public zone use the same domain. What is the correct interpretation or action? Which answer would you be comfortable defending to the team, and why?

- A. split-horizon DNS may return different answers by resolver location
- B. NXDOMAIN means the DNS server timed out
- C. TTL changes invalidate every client cache instantly
- D. SERVFAIL proves the name does not exist

**Answer: A**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Different views can intentionally serve different records. In a real incident, verify that signal before making a disruptive change.

---

### Q766 — Advanced

The service is reachable sometimes, which makes the failure more subtle than a simple port-down event. In network troubleshooting, the application returns 503 intentionally during overload. What is the correct interpretation or action? Which answer would you be comfortable defending to the team, and why?

- A. the service is unavailable and may include Retry-After
- B. 503 always proves a DNS failure
- C. 504 means no route matched
- D. 502 always means the client closed the request

**Answer: A**

**Explanation:** The clue to anchor on is the behavior described in the scenario. 503 can signal temporary capacity or maintenance conditions. In a real incident, verify that signal before making a disruptive change.

---

### Q767 — Expert

Users are reporting intermittent connectivity and the network path has several layers that could be responsible. In network troubleshooting, clients receive 499 in NGINX logs. What is the correct interpretation or action? Which answer would you be comfortable defending to the team, and why?

- A. 503 always proves a DNS failure
- B. 504 means no route matched
- C. the client closed the request before the server completed it
- D. 502 always means the client closed the request

**Answer: C**

**Explanation:** The clue to anchor on is the behavior described in the scenario. 499 is an NGINX-specific client-closed code. In a real incident, verify that signal before making a disruptive change.

---

### Q768 — Advanced

You're debugging a production network issue and want to follow the evidence rather than guess. In network troubleshooting, the certificate chain omits an intermediate. What is the correct interpretation or action? Which answer would you be comfortable defending to the team, and why?

- A. Accept any certificate with a valid date regardless of hostname
- B. The server never needs to send intermediate certificates
- C. some clients cannot build trust
- D. SNI is unrelated to certificate selection

**Answer: C**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Servers should present required intermediate certificates. In a real incident, verify that signal before making a disruptive change.

---

### Q769 — Advanced

The service is reachable sometimes, which makes the failure more subtle than a simple port-down event. In network troubleshooting, TLS fails only on old clients. What is the correct interpretation or action? Which answer would you be comfortable defending to the team, and why?

- A. Accept any certificate with a valid date regardless of hostname
- B. SNI is unrelated to certificate selection
- C. The server never needs to send intermediate certificates
- D. protocol or cipher compatibility may be the cause

**Answer: D**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Modern servers may disable obsolete algorithms. In a real incident, verify that signal before making a disruptive change.

---

### Q770 — Advanced

Users are reporting intermittent connectivity and the network path has several layers that could be responsible. In network troubleshooting, two subnets are 10.0.0.0/24 and 10.0.0.128/25. What is the correct interpretation or action? Which answer would you be comfortable defending to the team, and why?

- A. 10.0.0.0/24 and 10.0.0.128/25 are disjoint
- B. they overlap
- C. A /24 has 24 total addresses
- D. A /32 represents an entire subnet of 32 hosts

**Answer: B**

**Explanation:** The clue to anchor on is the behavior described in the scenario. The /25 lies inside the /24. In a real incident, verify that signal before making a disruptive change.

---

### Q771 — Advanced

You're debugging a production network issue and want to follow the evidence rather than guess. In network troubleshooting, a /30 IPv4 network is used traditionally. What is the correct interpretation or action? Which answer would you be comfortable defending to the team, and why?

- A. A /32 represents an entire subnet of 32 hosts
- B. A /24 has 24 total addresses
- C. 10.0.0.0/24 and 10.0.0.128/25 are disjoint
- D. it provides two usable host addresses

**Answer: D**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Network and broadcast consume two of four addresses in conventional subnets. In a real incident, verify that signal before making a disruptive change.

---

### Q772 — Expert

The service is reachable sometimes, which makes the failure more subtle than a simple port-down event. In network troubleshooting, a route has /32. What is the correct interpretation or action? Which answer would you be comfortable defending to the team, and why?

- A. 10.0.0.0/24 and 10.0.0.128/25 are disjoint
- B. it matches one IPv4 address
- C. A /32 represents an entire subnet of 32 hosts
- D. A /24 has 24 total addresses

**Answer: B**

**Explanation:** The clue to anchor on is the behavior described in the scenario. All 32 bits are fixed. In a real incident, verify that signal before making a disruptive change.

---

### Q773 — Advanced

Users are reporting intermittent connectivity and the network path has several layers that could be responsible. In network troubleshooting, TCP MSS clamping is configured at a tunnel edge. What is the correct interpretation or action? Which answer would you be comfortable defending to the team, and why?

- A. Increase application memory to solve MTU failure
- B. Enable jumbo frames on only one interface
- C. it can avoid oversized TCP segments
- D. Block all ICMP to improve PMTUD

**Answer: C**

**Explanation:** The clue to anchor on is the behavior described in the scenario. MSS adjustment accounts for encapsulation overhead. In a real incident, verify that signal before making a disruptive change.

---

### Q774 — Expert

You're debugging a production network issue and want to follow the evidence rather than guess. In network troubleshooting, jumbo frames are enabled on only part of a path. What is the correct interpretation or action? Which answer would you be comfortable defending to the team, and why?

- A. Block all ICMP to improve PMTUD
- B. Enable jumbo frames on only one interface
- C. Increase application memory to solve MTU failure
- D. inconsistent MTU can cause drops or fragmentation

**Answer: D**

**Explanation:** The clue to anchor on is the behavior described in the scenario. End-to-end support is required. In a real incident, verify that signal before making a disruptive change.

---

### Q775 — Advanced

The service is reachable sometimes, which makes the failure more subtle than a simple port-down event. In network troubleshooting, an inbound connection targets a private service through NAT. What is the correct interpretation or action? Which answer would you be comfortable defending to the team, and why?

- A. Outbound source NAT automatically publishes inbound services
- B. a destination translation or port-forward rule is required
- C. NAT never keeps connection state
- D. Embedded private addresses are always translated correctly

**Answer: B**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Outbound source NAT alone does not publish the service. In a real incident, verify that signal before making a disruptive change.

---

### Q776 — Expert

Users are reporting intermittent connectivity and the network path has several layers that could be responsible. In network troubleshooting, an application embeds private IPs in payloads. What is the correct interpretation or action? Which answer would you be comfortable defending to the team, and why?

- A. NAT may not transparently fix the protocol
- B. Outbound source NAT automatically publishes inbound services
- C. NAT never keeps connection state
- D. Embedded private addresses are always translated correctly

**Answer: A**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Some protocols require helpers or application awareness. In a real incident, verify that signal before making a disruptive change.

---

### Q777 — Advanced

You're debugging a production network issue and want to follow the evidence rather than guess. In network troubleshooting, millions of raw TCP connections need minimal overhead. What is the correct interpretation or action? Which answer would you be comfortable defending to the team, and why?

- A. TLS termination never changes trust boundaries
- B. a layer-4 load balancer is often appropriate
- C. Use L4 balancing for HTTP path routing
- D. Source IP is always preserved through NAT

**Answer: B**

**Explanation:** The clue to anchor on is the behavior described in the scenario. L4 balances transport connections without parsing HTTP. In a real incident, verify that signal before making a disruptive change.

---

### Q778 — Advanced

The service is reachable sometimes, which makes the failure more subtle than a simple port-down event. In network troubleshooting, TLS terminates at the load balancer. What is the correct interpretation or action? Which answer would you be comfortable defending to the team, and why?

- A. Source IP is always preserved through NAT
- B. backend traffic may be plaintext or re-encrypted according to policy
- C. TLS termination never changes trust boundaries
- D. Use L4 balancing for HTTP path routing

**Answer: B**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Termination changes the encryption boundary. In a real incident, verify that signal before making a disruptive change.

---

### Q779 — Advanced

Users are reporting intermittent connectivity and the network path has several layers that could be responsible. In network troubleshooting, many sockets remain in CLOSE_WAIT. What is the correct interpretation or action? Which answer would you be comfortable defending to the team, and why?

- A. SYN_RECV means every handshake completed
- B. the local application has not closed after the peer closed
- C. CLOSE_WAIT is fixed by lowering the TCP timeout only
- D. TIME_WAIT always indicates an application leak

**Answer: B**

**Explanation:** The clue to anchor on is the behavior described in the scenario. The application must close its side. In a real incident, verify that signal before making a disruptive change.

---

### Q780 — Advanced

You're debugging a production network issue and want to follow the evidence rather than guess. In network troubleshooting, SYN_RECV grows rapidly. What is the correct interpretation or action? Which answer would you be comfortable defending to the team, and why?

- A. the server has many half-open handshakes
- B. SYN_RECV means every handshake completed
- C. TIME_WAIT always indicates an application leak
- D. CLOSE_WAIT is fixed by lowering the TCP timeout only

**Answer: A**

**Explanation:** The clue to anchor on is the behavior described in the scenario. This can result from load, packet loss, or SYN flooding. In a real incident, verify that signal before making a disruptive change.

---

### Q781 — Expert

The service is reachable sometimes, which makes the failure more subtle than a simple port-down event. In network troubleshooting, ESTABLISHED exists but no traffic moves. What is the correct interpretation or action? Which answer would you be comfortable defending to the team, and why?

- A. inspect application blocking, window sizes, and packet flow
- B. TIME_WAIT always indicates an application leak
- C. SYN_RECV means every handshake completed
- D. CLOSE_WAIT is fixed by lowering the TCP timeout only

**Answer: A**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Connection state alone does not guarantee progress. In a real incident, verify that signal before making a disruptive change.

---

### Q782 — Advanced

Users are reporting intermittent connectivity and the network path has several layers that could be responsible. In network troubleshooting, the default route is absent. What is the correct interpretation or action? Which answer would you be comfortable defending to the team, and why?

- A. Stateful firewalls are unaffected by asymmetric routing
- B. non-local destinations without specific routes are unreachable
- C. A default route is unnecessary for unknown destinations
- D. The least-specific route always wins

**Answer: B**

**Explanation:** The clue to anchor on is the behavior described in the scenario. A host needs a matching route for outbound forwarding. In a real incident, verify that signal before making a disruptive change.

---

### Q783 — Expert

You're debugging a production network issue and want to follow the evidence rather than guess. In network troubleshooting, asymmetric routing crosses a stateful firewall. What is the correct interpretation or action? Which answer would you be comfortable defending to the team, and why?

- A. A default route is unnecessary for unknown destinations
- B. Stateful firewalls are unaffected by asymmetric routing
- C. return traffic may be dropped
- D. The least-specific route always wins

**Answer: C**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Stateful devices expect both directions of a flow. In a real incident, verify that signal before making a disruptive change.

---

### Q784 — Advanced

The service is reachable sometimes, which makes the failure more subtle than a simple port-down event. In network troubleshooting, established connections should be permitted. What is the correct interpretation or action? Which answer would you be comfortable defending to the team, and why?

- A. Firewall rule order never matters
- B. Apply remote firewall changes without rollback access
- C. A zero counter proves the rule is correct
- D. match ESTABLISHED,RELATED state before restrictive new-connection rules

**Answer: D**

**Explanation:** The clue to anchor on is the behavior described in the scenario. State tracking allows reply traffic efficiently. In a real incident, verify that signal before making a disruptive change.

---

### Q785 — Advanced

Users are reporting intermittent connectivity and the network path has several layers that could be responsible. In network troubleshooting, a policy change locks out SSH. What is the correct interpretation or action? Which answer would you be comfortable defending to the team, and why?

- A. Firewall rule order never matters
- B. use an out-of-band path or atomic rollback procedure
- C. Apply remote firewall changes without rollback access
- D. A zero counter proves the rule is correct

**Answer: B**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Firewall changes need safe deployment controls. In a real incident, verify that signal before making a disruptive change.

---

### Q786 — Advanced

You're debugging a production network issue and want to follow the evidence rather than guess. In network troubleshooting, HTTP keep-alive is enabled. What is the correct interpretation or action? Which answer would you be comfortable defending to the team, and why?

- A. Disable HTTP connection reuse
- B. Set every timeout to infinite
- C. Use aggressive keepalives without scale analysis
- D. multiple requests can reuse one TCP connection

**Answer: D**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Reuse reduces handshake overhead. In a real incident, verify that signal before making a disruptive change.

---

### Q787 — Advanced

The service is reachable sometimes, which makes the failure more subtle than a simple port-down event. In network troubleshooting, TCP keepalive detects dead peers slowly by default. What is the correct interpretation or action? Which answer would you be comfortable defending to the team, and why?

- A. Use aggressive keepalives without scale analysis
- B. Disable HTTP connection reuse
- C. tune it only with awareness of network and scale impact
- D. Set every timeout to infinite

**Answer: C**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Aggressive probes create traffic and false positives. In a real incident, verify that signal before making a disruptive change.

---

### Q788 — Expert

Users are reporting intermittent connectivity and the network path has several layers that could be responsible. In network troubleshooting, a proxy timeout is shorter than the backend's legitimate response time. What is the correct interpretation or action? Which answer would you be comfortable defending to the team, and why?

- A. Disable HTTP connection reuse
- B. clients receive premature gateway errors
- C. Set every timeout to infinite
- D. Use aggressive keepalives without scale analysis

**Answer: B**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Timeout budgets must reflect expected processing. In a real incident, verify that signal before making a disruptive change.

---

### Q789 — Advanced

You're debugging a production network issue and want to follow the evidence rather than guess. In network troubleshooting, tcpdump on any sees duplicate-looking packets. What is the correct interpretation or action? Which answer would you be comfortable defending to the team, and why?

- A. Capture location does not affect interpretation
- B. Linux may show packets on multiple logical interfaces
- C. A packet capture automatically decrypts TLS payloads
- D. No SYN-ACK proves the client never sent SYN

**Answer: B**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Capture point matters when interpreting duplicates. In a real incident, verify that signal before making a disruptive change.

---

### Q790 — Expert

The service is reachable sometimes, which makes the failure more subtle than a simple port-down event. In network troubleshooting, payload is encrypted with TLS. What is the correct interpretation or action? Which answer would you be comfortable defending to the team, and why?

- A. packet capture still shows timing, endpoints, and handshake metadata but not plaintext
- B. Capture location does not affect interpretation
- C. No SYN-ACK proves the client never sent SYN
- D. A packet capture automatically decrypts TLS payloads

**Answer: A**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Encryption protects application content. In a real incident, verify that signal before making a disruptive change.

---

## Security

### Q791 — Advanced

A security-sensitive production change needs a fix that reduces risk without creating a permanent exception. From a security perspective, a user needs temporary elevated access. What is the strongest response? Which answer would you be comfortable defending to the team, and why?

- A. Keep broad permissions and review logs later
- B. Retain stale access indefinitely
- C. Use one shared administrator identity
- D. use time-bound elevation with approval and audit

**Answer: D**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Standing privilege increases exposure. In a real incident, verify that signal before making a disruptive change.

---

### Q792 — Advanced

You're reviewing an access-control problem where the easiest workaround would weaken the platform. From a security perspective, permissions accumulate after role changes. What is the strongest response? Which answer would you be comfortable defending to the team, and why?

- A. perform periodic access reviews and remove stale grants
- B. Use one shared administrator identity
- C. Keep broad permissions and review logs later
- D. Retain stale access indefinitely

**Answer: A**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Privilege creep is a common long-term risk. In a real incident, verify that signal before making a disruptive change.

---

### Q793 — Advanced

The team needs a defensible security decision that will still make sense during an audit. From a security perspective, applications receive secrets as command-line arguments. What is the strongest response? Which answer would you be comfortable defending to the team, and why?

- A. Pass secrets on command lines
- B. Reuse one credential across all environments
- C. Base64-encode secrets in source control
- D. prefer protected files, descriptors, or injected runtime mechanisms

**Answer: D**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Command lines may be visible in process listings and logs. In a real incident, verify that signal before making a disruptive change.

---

### Q794 — Advanced

A security-sensitive production change needs a fix that reduces risk without creating a permanent exception. From a security perspective, a secret manager rotates credentials. What is the strongest response? Which answer would you be comfortable defending to the team, and why?

- A. Pass secrets on command lines
- B. Base64-encode secrets in source control
- C. Reuse one credential across all environments
- D. applications need a safe reload or renewal mechanism

**Answer: D**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Rotation is useful only if consumers can adopt new values. In a real incident, verify that signal before making a disruptive change.

---

### Q795 — Expert

You're reviewing an access-control problem where the easiest workaround would weaken the platform. From a security perspective, one secret is reused across environments. What is the strongest response? Which answer would you be comfortable defending to the team, and why?

- A. Base64-encode secrets in source control
- B. Pass secrets on command lines
- C. separate credentials to reduce blast radius
- D. Reuse one credential across all environments

**Answer: C**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Environment isolation supports independent revocation and auditing. In a real incident, verify that signal before making a disruptive change.

---

### Q796 — Advanced

The team needs a defensible security decision that will still make sense during an audit. From a security perspective, a scanner reports no findings. What is the strongest response? Which answer would you be comfortable defending to the team, and why?

- A. Keep compilers in production images for troubleshooting
- B. the image is not guaranteed secure
- C. A clean vulnerability scan guarantees security
- D. Old running images inherit base patches

**Answer: B**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Scanners have database, coverage, configuration, and zero-day limits. In a real incident, verify that signal before making a disruptive change.

---

### Q797 — Expert

A security-sensitive production change needs a fix that reduces risk without creating a permanent exception. From a security perspective, a production image contains compilers and shells unnecessarily. What is the strongest response? Which answer would you be comfortable defending to the team, and why?

- A. Keep compilers in production images for troubleshooting
- B. use a minimal runtime image
- C. Old running images inherit base patches
- D. A clean vulnerability scan guarantees security

**Answer: B**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Smaller attack surface reduces available tools and vulnerable packages. In a real incident, verify that signal before making a disruptive change.

---

### Q798 — Advanced

You're reviewing an access-control problem where the easiest workaround would weaken the platform. From a security perspective, a build runs on an untrusted shared worker. What is the strongest response? Which answer would you be comfortable defending to the team, and why?

- A. A valid signature proves the artifact has no vulnerabilities
- B. Trust provenance from any worker
- C. its provenance should not be trusted for sensitive releases
- D. Fetch unpinned dependencies

**Answer: C**

**Explanation:** The clue to anchor on is the behavior described in the scenario. The builder is part of the supply chain. In a real incident, verify that signal before making a disruptive change.

---

### Q799 — Advanced

The team needs a defensible security decision that will still make sense during an audit. From a security perspective, dependencies are fetched without hashes. What is the strongest response? Which answer would you be comfortable defending to the team, and why?

- A. pin versions and verify integrity
- B. Fetch unpinned dependencies
- C. Trust provenance from any worker
- D. A valid signature proves the artifact has no vulnerabilities

**Answer: A**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Unpinned remote content can change unexpectedly. In a real incident, verify that signal before making a disruptive change.

---

### Q800 — Advanced

A security-sensitive production change needs a fix that reduces risk without creating a permanent exception. From a security perspective, a pod can create other pods with arbitrary service accounts. What is the strongest response? Which answer would you be comfortable defending to the team, and why?

- A. RoleBinding permissions automatically apply cluster-wide
- B. it may escalate privileges
- C. Secret read access is low risk
- D. Grant cluster-admin for convenience

**Answer: B**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Workload creation can be an authorization escalation path. In a real incident, verify that signal before making a disruptive change.

---

### Q801 — Advanced

You're reviewing an access-control problem where the easiest workaround would weaken the platform. From a security perspective, a ClusterRoleBinding is used for a namespaced need. What is the strongest response? Which answer would you be comfortable defending to the team, and why?

- A. Secret read access is low risk
- B. replace it with a RoleBinding where possible
- C. RoleBinding permissions automatically apply cluster-wide
- D. Grant cluster-admin for convenience

**Answer: B**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Cluster-wide binding broadens effective scope. In a real incident, verify that signal before making a disruptive change.

---

### Q802 — Expert

The team needs a defensible security decision that will still make sense during an audit. From a security perspective, admission policy restricts privileged pods. What is the strongest response? Which answer would you be comfortable defending to the team, and why?

- A. it provides preventive enforcement before creation
- B. Secret read access is low risk
- C. RoleBinding permissions automatically apply cluster-wide
- D. Grant cluster-admin for convenience

**Answer: A**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Admission controls complement RBAC by validating object properties. In a real incident, verify that signal before making a disruptive change.

---

### Q803 — Advanced

A security-sensitive production change needs a fix that reduces risk without creating a permanent exception. From a security perspective, a host key changes unexpectedly. What is the strongest response? Which answer would you be comfortable defending to the team, and why?

- A. Enable direct root password login
- B. Share one private key among administrators
- C. verify through a trusted channel before accepting it
- D. Accept changed host keys without verification

**Answer: C**

**Explanation:** The clue to anchor on is the behavior described in the scenario. An unexpected change can indicate rebuild or man-in-the-middle attack. In a real incident, verify that signal before making a disruptive change.

---

### Q804 — Expert

You're reviewing an access-control problem where the easiest workaround would weaken the platform. From a security perspective, root login is enabled directly. What is the strongest response? Which answer would you be comfortable defending to the team, and why?

- A. use named accounts with sudo and auditability
- B. Share one private key among administrators
- C. Enable direct root password login
- D. Accept changed host keys without verification

**Answer: A**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Direct root access reduces attribution and control. In a real incident, verify that signal before making a disruptive change.

---

### Q805 — Advanced

The team needs a defensible security decision that will still make sense during an audit. From a security perspective, an attacker steals a session cookie after MFA. What is the strongest response? Which answer would you be comfortable defending to the team, and why?

- A. MFA does not protect an already hijacked session
- B. Store recovery codes beside passwords
- C. MFA makes stolen sessions harmless
- D. Call workload certificates a human second factor

**Answer: A**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Session security and reauthentication remain necessary. In a real incident, verify that signal before making a disruptive change.

---

### Q806 — Expert

A security-sensitive production change needs a fix that reduces risk without creating a permanent exception. From a security perspective, service-to-service authentication is called MFA. What is the strongest response? Which answer would you be comfortable defending to the team, and why?

- A. MFA makes stolen sessions harmless
- B. this is incorrect; workload identity uses different mechanisms
- C. Store recovery codes beside passwords
- D. Call workload certificates a human second factor

**Answer: B**

**Explanation:** The clue to anchor on is the behavior described in the scenario. MFA is designed around human authentication factors. In a real incident, verify that signal before making a disruptive change.

---

### Q807 — Advanced

You're reviewing an access-control problem where the easiest workaround would weaken the platform. From a security perspective, URL validation checks only the original hostname. What is the strongest response? Which answer would you be comfortable defending to the team, and why?

- A. Allow access to metadata services
- B. Validate only the original URL text
- C. Trust every redirect destination
- D. DNS rebinding or redirects can bypass it

**Answer: D**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Validation must cover resolved addresses and redirect chains. In a real incident, verify that signal before making a disruptive change.

---

### Q808 — Advanced

The team needs a defensible security decision that will still make sense during an audit. From a security perspective, cloud metadata is reachable without protection. What is the strongest response? Which answer would you be comfortable defending to the team, and why?

- A. Allow access to metadata services
- B. Validate only the original URL text
- C. use metadata service hardening and network controls
- D. Trust every redirect destination

**Answer: C**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Metadata credentials are a frequent SSRF target. In a real incident, verify that signal before making a disruptive change.

---

### Q809 — Advanced

A security-sensitive production change needs a fix that reduces risk without creating a permanent exception. From a security perspective, input is escaped manually. What is the strongest response? Which answer would you be comfortable defending to the team, and why?

- A. prefer database-driver parameters
- B. Give the application database-owner privileges
- C. Rely only on a WAF
- D. Escape SQL manually in every code path

**Answer: A**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Manual escaping is error-prone and context-dependent. In a real incident, verify that signal before making a disruptive change.

---

### Q810 — Advanced

You're reviewing an access-control problem where the easiest workaround would weaken the platform. From a security perspective, the database account can drop every schema. What is the strongest response? Which answer would you be comfortable defending to the team, and why?

- A. restrict permissions needed by the application
- B. Escape SQL manually in every code path
- C. Give the application database-owner privileges
- D. Rely only on a WAF

**Answer: A**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Least privilege limits injection impact. In a real incident, verify that signal before making a disruptive change.

---

### Q811 — Expert

The team needs a defensible security decision that will still make sense during an audit. From a security perspective, a WAF blocks common payloads. What is the strongest response? Which answer would you be comfortable defending to the team, and why?

- A. Rely only on a WAF
- B. Escape SQL manually in every code path
- C. the application still needs safe query construction
- D. Give the application database-owner privileges

**Answer: C**

**Explanation:** The clue to anchor on is the behavior described in the scenario. A WAF is a compensating control, not a complete fix. In a real incident, verify that signal before making a disruptive change.

---

### Q812 — Advanced

A security-sensitive production change needs a fix that reduces risk without creating a permanent exception. From a security perspective, the root filesystem can be read-only. What is the strongest response? Which answer would you be comfortable defending to the team, and why?

- A. Disable seccomp
- B. Run privileged instead of adding one capability
- C. enable it and provide writable mounts only where needed
- D. Keep a writable root filesystem when unnecessary

**Answer: C**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Immutability limits persistence and tampering. In a real incident, verify that signal before making a disruptive change.

---

### Q813 — Expert

You're reviewing an access-control problem where the easiest workaround would weaken the platform. From a security perspective, seccomp is disabled. What is the strongest response? Which answer would you be comfortable defending to the team, and why?

- A. Disable seccomp
- B. Keep a writable root filesystem when unnecessary
- C. the process can invoke a broader syscall set
- D. Run privileged instead of adding one capability

**Answer: C**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Seccomp filters reduce exposed kernel interfaces. In a real incident, verify that signal before making a disruptive change.

---

### Q814 — Advanced

The team needs a defensible security decision that will still make sense during an audit. From a security perspective, development and production share flat network access. What is the strongest response? Which answer would you be comfortable defending to the team, and why?

- A. Expose database subnets publicly
- B. Keep development and production on one unrestricted network
- C. separate environments and control interconnections
- D. Trust all east-west traffic

**Answer: C**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Isolation reduces accidental and malicious lateral movement. In a real incident, verify that signal before making a disruptive change.

---

### Q815 — Advanced

A security-sensitive production change needs a fix that reduces risk without creating a permanent exception. From a security perspective, east-west traffic is implicitly trusted. What is the strongest response? Which answer would you be comfortable defending to the team, and why?

- A. Keep development and production on one unrestricted network
- B. apply service identity and network policy based on risk
- C. Expose database subnets publicly
- D. Trust all east-west traffic

**Answer: B**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Internal location alone is not strong authentication. In a real incident, verify that signal before making a disruptive change.

---

### Q816 — Advanced

You're reviewing an access-control problem where the easiest workaround would weaken the platform. From a security perspective, a patch requires downtime. What is the strongest response? Which answer would you be comfortable defending to the team, and why?

- A. Delay an actively exploited patch until the next annual cycle
- B. Patch only assets already known informally
- C. use redundancy, rolling maintenance, or a controlled window
- D. Assume package installation updates running processes

**Answer: C**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Operational planning should not justify indefinite vulnerability. In a real incident, verify that signal before making a disruptive change.

---

### Q817 — Advanced

The team needs a defensible security decision that will still make sense during an audit. From a security perspective, a package is patched but the service was not restarted. What is the strongest response? Which answer would you be comfortable defending to the team, and why?

- A. Delay an actively exploited patch until the next annual cycle
- B. Assume package installation updates running processes
- C. Patch only assets already known informally
- D. the old vulnerable code may still be loaded

**Answer: D**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Many updates require process restart or reboot. In a real incident, verify that signal before making a disruptive change.

---

### Q818 — Expert

A security-sensitive production change needs a fix that reduces risk without creating a permanent exception. From a security perspective, inventory is incomplete. What is the strongest response? Which answer would you be comfortable defending to the team, and why?

- A. Assume package installation updates running processes
- B. Delay an actively exploited patch until the next annual cycle
- C. patch management cannot reliably cover unknown assets
- D. Patch only assets already known informally

**Answer: C**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Asset visibility is foundational to vulnerability management. In a real incident, verify that signal before making a disruptive change.

---

### Q819 — Advanced

You're reviewing an access-control problem where the easiest workaround would weaken the platform. From a security perspective, an incident channel includes secrets copied from logs. What is the strongest response? Which answer would you be comfortable defending to the team, and why?

- A. remove exposure and use secure evidence handling
- B. End the incident process immediately after service restoration
- C. Wait for full root cause before revoking a stolen credential
- D. Destroy all evidence while isolating a host

**Answer: A**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Incident urgency does not remove data-protection requirements. In a real incident, verify that signal before making a disruptive change.

---

### Q820 — Expert

The team needs a defensible security decision that will still make sense during an audit. From a security perspective, service restoration is complete. What is the strongest response? Which answer would you be comfortable defending to the team, and why?

- A. continue eradication, recovery validation, and lessons learned
- B. Destroy all evidence while isolating a host
- C. End the incident process immediately after service restoration
- D. Wait for full root cause before revoking a stolen credential

**Answer: A**

**Explanation:** The clue to anchor on is the behavior described in the scenario. Recovery is one phase of the incident lifecycle. In a real incident, verify that signal before making a disruptive change.

---

## Database Operations

### Q821 — Expert

You're reviewing this during a production change window. A query filters on LOWER(email) but the database only has a normal index on email, and the planner chooses a scan. What is a likely explanation? Pick the option you'd be willing to defend in a production review.

- A. The query needs an ORDER BY before any index can be considered.
- B. Applying a function can prevent use of the plain index unless the database has a matching functional/expression index or equivalent design.
- C. Indexes are never used for equality predicates.
- D. The table must be smaller than the index for an index to work.

**Answer: B**

**Explanation:** The indexed expression has to match how the query searches, subject to the database engine's optimizer capabilities.

**Why the other options miss the mark:**
- **A:** ORDER BY is not required for predicate index use.
- **C:** Equality predicates are classic index candidates.
- **D:** Relative table/index size is not this rule.

---

### Q822 — Advanced

This comes up in an incident channel and the team wants a decision, not a textbook definition. A query filters on LOWER(email) but the database only has a normal index on email, and the planner chooses a scan. What is a likely explanation? What would you choose as the most technically sound next step?

- A. Applying a function can prevent use of the plain index unless the database has a matching functional/expression index or equivalent design.
- B. Indexes are never used for equality predicates.
- C. The table must be smaller than the index for an index to work.
- D. The query needs an ORDER BY before any index can be considered.

**Answer: A**

**Explanation:** The indexed expression has to match how the query searches, subject to the database engine's optimizer capabilities.

**Why the other options miss the mark:**
- **B:** Equality predicates are classic index candidates.
- **C:** Relative table/index size is not this rule.
- **D:** ORDER BY is not required for predicate index use.

---

### Q823 — Advanced

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. A query filters on LOWER(email) but the database only has a normal index on email, and the planner chooses a scan. What is a likely explanation? Which answer best matches how you would handle this on a real system?

- A. Indexes are never used for equality predicates.
- B. The table must be smaller than the index for an index to work.
- C. The query needs an ORDER BY before any index can be considered.
- D. Applying a function can prevent use of the plain index unless the database has a matching functional/expression index or equivalent design.

**Answer: D**

**Explanation:** The indexed expression has to match how the query searches, subject to the database engine's optimizer capabilities.

**Why the other options miss the mark:**
- **A:** Equality predicates are classic index candidates.
- **B:** Relative table/index size is not this rule.
- **C:** ORDER BY is not required for predicate index use.

---

### Q824 — Advanced

You're reviewing this during a production change window. Application latency rises, database CPU is moderate, but every application worker is waiting for a connection from a small saturated pool. What does that indicate? Pick the option you'd be willing to defend in a production review.

- A. The application is queueing on connection-pool capacity, so you need to understand query service time and pool sizing before simply raising limits.
- B. Database CPU must reach 100% before a pool can cause latency.
- C. Set the pool to an unlimited size so no caller ever waits.
- D. Disable connection reuse so every request gets a fresh connection.

**Answer: A**

**Explanation:** Connection pools are queues. Too small can serialize work; too large can overwhelm the database. Size them from concurrency, latency, and DB capacity.

**Why the other options miss the mark:**
- **B:** Queueing can happen while database CPU is far below saturation.
- **C:** Unlimited pools can turn an application bottleneck into a database outage.
- **D:** Fresh connections add setup cost and remove the pool's protection.

---

### Q825 — Advanced

This comes up in an incident channel and the team wants a decision, not a textbook definition. Application latency rises, database CPU is moderate, but every application worker is waiting for a connection from a small saturated pool. What does that indicate? What would you choose as the most technically sound next step?

- A. Database CPU must reach 100% before a pool can cause latency.
- B. Set the pool to an unlimited size so no caller ever waits.
- C. Disable connection reuse so every request gets a fresh connection.
- D. The application is queueing on connection-pool capacity, so you need to understand query service time and pool sizing before simply raising limits.

**Answer: D**

**Explanation:** Connection pools are queues. Too small can serialize work; too large can overwhelm the database. Size them from concurrency, latency, and DB capacity.

**Why the other options miss the mark:**
- **A:** Queueing can happen while database CPU is far below saturation.
- **B:** Unlimited pools can turn an application bottleneck into a database outage.
- **C:** Fresh connections add setup cost and remove the pool's protection.

---

### Q826 — Expert

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. Application latency rises, database CPU is moderate, but every application worker is waiting for a connection from a small saturated pool. What does that indicate? Which answer best matches how you would handle this on a real system?

- A. Set the pool to an unlimited size so no caller ever waits.
- B. Disable connection reuse so every request gets a fresh connection.
- C. The application is queueing on connection-pool capacity, so you need to understand query service time and pool sizing before simply raising limits.
- D. Database CPU must reach 100% before a pool can cause latency.

**Answer: C**

**Explanation:** Connection pools are queues. Too small can serialize work; too large can overwhelm the database. Size them from concurrency, latency, and DB capacity.

**Why the other options miss the mark:**
- **A:** Unlimited pools can turn an application bottleneck into a database outage.
- **B:** Fresh connections add setup cost and remove the pool's protection.
- **D:** Queueing can happen while database CPU is far below saturation.

---

### Q827 — Advanced

You're reviewing this during a production change window. A read replica is 20 seconds behind while the application immediately reads a record from the replica after writing it to the primary. What consistency problem can users see? Pick the option you'd be willing to defend in a production review.

- A. The primary write is automatically rolled back when the replica lags.
- B. The replica will block every read until it reaches zero lag.
- C. The client will always be routed back to the primary by the database protocol.
- D. Read-after-write failures where the new value appears missing or old until the replica catches up.

**Answer: D**

**Explanation:** Asynchronous replicas can be stale. Workloads that require read-your-writes need routing, session consistency, or another strategy.

**Why the other options miss the mark:**
- **A:** Primary commits are not normally rolled back due to replica lag.
- **B:** Many replicas keep serving stale reads rather than blocking.
- **C:** Automatic read routing depends on application/proxy design, not a universal protocol guarantee.

---

### Q828 — Expert

This comes up in an incident channel and the team wants a decision, not a textbook definition. A read replica is 20 seconds behind while the application immediately reads a record from the replica after writing it to the primary. What consistency problem can users see? What would you choose as the most technically sound next step?

- A. The replica will block every read until it reaches zero lag.
- B. The client will always be routed back to the primary by the database protocol.
- C. Read-after-write failures where the new value appears missing or old until the replica catches up.
- D. The primary write is automatically rolled back when the replica lags.

**Answer: C**

**Explanation:** Asynchronous replicas can be stale. Workloads that require read-your-writes need routing, session consistency, or another strategy.

**Why the other options miss the mark:**
- **A:** Many replicas keep serving stale reads rather than blocking.
- **B:** Automatic read routing depends on application/proxy design, not a universal protocol guarantee.
- **D:** Primary commits are not normally rolled back due to replica lag.

---

### Q829 — Advanced

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. A read replica is 20 seconds behind while the application immediately reads a record from the replica after writing it to the primary. What consistency problem can users see? Which answer best matches how you would handle this on a real system?

- A. The client will always be routed back to the primary by the database protocol.
- B. Read-after-write failures where the new value appears missing or old until the replica catches up.
- C. The primary write is automatically rolled back when the replica lags.
- D. The replica will block every read until it reaches zero lag.

**Answer: B**

**Explanation:** Asynchronous replicas can be stale. Workloads that require read-your-writes need routing, session consistency, or another strategy.

**Why the other options miss the mark:**
- **A:** Automatic read routing depends on application/proxy design, not a universal protocol guarantee.
- **C:** Primary commits are not normally rolled back due to replica lag.
- **D:** Many replicas keep serving stale reads rather than blocking.

---

### Q830 — Expert

You're reviewing this during a production change window. Two transactions update the same rows in opposite order and the database periodically aborts one with a deadlock error. What is the durable fix? Pick the option you'd be willing to defend in a production review.

- A. Disable deadlock detection at the database level.
- B. Run both transactions at the same millisecond so they lock simultaneously.
- C. Make lock acquisition order consistent and keep transactions short, while also retrying aborted transactions safely.
- D. Increase connection timeout so both transactions can wait forever.

**Answer: C**

**Explanation:** Deadlocks are cycles in lock dependency. Consistent ordering breaks the cycle; application retry handles the unavoidable occasional victim.

**Why the other options miss the mark:**
- **A:** Disabling detection can leave sessions stuck indefinitely.
- **B:** More synchronization does not guarantee a safe lock order.
- **D:** Longer waits do not break a lock cycle.

---

### Q831 — Advanced

This comes up in an incident channel and the team wants a decision, not a textbook definition. Two transactions update the same rows in opposite order and the database periodically aborts one with a deadlock error. What is the durable fix? What would you choose as the most technically sound next step?

- A. Run both transactions at the same millisecond so they lock simultaneously.
- B. Make lock acquisition order consistent and keep transactions short, while also retrying aborted transactions safely.
- C. Increase connection timeout so both transactions can wait forever.
- D. Disable deadlock detection at the database level.

**Answer: B**

**Explanation:** Deadlocks are cycles in lock dependency. Consistent ordering breaks the cycle; application retry handles the unavoidable occasional victim.

**Why the other options miss the mark:**
- **A:** More synchronization does not guarantee a safe lock order.
- **C:** Longer waits do not break a lock cycle.
- **D:** Disabling detection can leave sessions stuck indefinitely.

---

### Q832 — Advanced

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. Two transactions update the same rows in opposite order and the database periodically aborts one with a deadlock error. What is the durable fix? Which answer best matches how you would handle this on a real system?

- A. Make lock acquisition order consistent and keep transactions short, while also retrying aborted transactions safely.
- B. Increase connection timeout so both transactions can wait forever.
- C. Disable deadlock detection at the database level.
- D. Run both transactions at the same millisecond so they lock simultaneously.

**Answer: A**

**Explanation:** Deadlocks are cycles in lock dependency. Consistent ordering breaks the cycle; application retry handles the unavoidable occasional victim.

**Why the other options miss the mark:**
- **B:** Longer waits do not break a lock cycle.
- **C:** Disabling detection can leave sessions stuck indefinitely.
- **D:** More synchronization does not guarantee a safe lock order.

---

### Q833 — Advanced

You're reviewing this during a production change window. A transaction remains open for hours while browsing rows. Vacuum/cleanup cannot reclaim old versions and storage grows rapidly. What should you investigate? Pick the option you'd be willing to defend in a production review.

- A. Set all transactions to the highest isolation level.
- B. The long-running transaction is retaining an old snapshot and preventing cleanup; shorten or redesign that transaction.
- C. Increase the number of indexes first; indexes close stale snapshots.
- D. Restart every application instance daily as the normal cleanup strategy.

**Answer: B**

**Explanation:** MVCC engines often retain row versions that may still be visible to an old transaction. Long snapshots can create bloat and cleanup pressure.

**Why the other options miss the mark:**
- **A:** Stronger isolation can increase, not reduce, retained snapshot behavior.
- **C:** Indexes do not end transactions.
- **D:** Scheduled restarts treat the symptom and risk availability.

---

### Q834 — Advanced

This comes up in an incident channel and the team wants a decision, not a textbook definition. A transaction remains open for hours while browsing rows. Vacuum/cleanup cannot reclaim old versions and storage grows rapidly. What should you investigate? What would you choose as the most technically sound next step?

- A. The long-running transaction is retaining an old snapshot and preventing cleanup; shorten or redesign that transaction.
- B. Increase the number of indexes first; indexes close stale snapshots.
- C. Restart every application instance daily as the normal cleanup strategy.
- D. Set all transactions to the highest isolation level.

**Answer: A**

**Explanation:** MVCC engines often retain row versions that may still be visible to an old transaction. Long snapshots can create bloat and cleanup pressure.

**Why the other options miss the mark:**
- **B:** Indexes do not end transactions.
- **C:** Scheduled restarts treat the symptom and risk availability.
- **D:** Stronger isolation can increase, not reduce, retained snapshot behavior.

---

### Q835 — Expert

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. A transaction remains open for hours while browsing rows. Vacuum/cleanup cannot reclaim old versions and storage grows rapidly. What should you investigate? Which answer best matches how you would handle this on a real system?

- A. Increase the number of indexes first; indexes close stale snapshots.
- B. Restart every application instance daily as the normal cleanup strategy.
- C. Set all transactions to the highest isolation level.
- D. The long-running transaction is retaining an old snapshot and preventing cleanup; shorten or redesign that transaction.

**Answer: D**

**Explanation:** MVCC engines often retain row versions that may still be visible to an old transaction. Long snapshots can create bloat and cleanup pressure.

**Why the other options miss the mark:**
- **A:** Indexes do not end transactions.
- **B:** Scheduled restarts treat the symptom and risk availability.
- **C:** Stronger isolation can increase, not reduce, retained snapshot behavior.

---

### Q836 — Advanced

You're reviewing this during a production change window. A table has billions of rows and the team wants to add a schema change during normal traffic. What should the deployment plan prioritize? Pick the option you'd be willing to defend in a production review.

- A. Use the database's online/non-blocking migration techniques, test lock behavior, and stage application/schema compatibility.
- B. Run the most direct ALTER in production and rely on the database to make it online automatically.
- C. Stop replication so the migration only has to run on one node.
- D. Deploy application code that requires the new schema before creating it.

**Answer: A**

**Explanation:** Large schema changes can lock, rewrite, or saturate storage. Safe rollout depends on engine-specific behavior and backward-compatible sequencing.

**Why the other options miss the mark:**
- **B:** Not every ALTER is online for every engine/version.
- **C:** Breaking replication reduces resilience and creates divergence.
- **D:** Application-first ordering can cause immediate runtime failures.

---

### Q837 — Expert

This comes up in an incident channel and the team wants a decision, not a textbook definition. A table has billions of rows and the team wants to add a schema change during normal traffic. What should the deployment plan prioritize? What would you choose as the most technically sound next step?

- A. Run the most direct ALTER in production and rely on the database to make it online automatically.
- B. Stop replication so the migration only has to run on one node.
- C. Deploy application code that requires the new schema before creating it.
- D. Use the database's online/non-blocking migration techniques, test lock behavior, and stage application/schema compatibility.

**Answer: D**

**Explanation:** Large schema changes can lock, rewrite, or saturate storage. Safe rollout depends on engine-specific behavior and backward-compatible sequencing.

**Why the other options miss the mark:**
- **A:** Not every ALTER is online for every engine/version.
- **B:** Breaking replication reduces resilience and creates divergence.
- **C:** Application-first ordering can cause immediate runtime failures.

---

### Q838 — Advanced

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. A table has billions of rows and the team wants to add a schema change during normal traffic. What should the deployment plan prioritize? Which answer best matches how you would handle this on a real system?

- A. Stop replication so the migration only has to run on one node.
- B. Deploy application code that requires the new schema before creating it.
- C. Use the database's online/non-blocking migration techniques, test lock behavior, and stage application/schema compatibility.
- D. Run the most direct ALTER in production and rely on the database to make it online automatically.

**Answer: C**

**Explanation:** Large schema changes can lock, rewrite, or saturate storage. Safe rollout depends on engine-specific behavior and backward-compatible sequencing.

**Why the other options miss the mark:**
- **A:** Breaking replication reduces resilience and creates divergence.
- **B:** Application-first ordering can cause immediate runtime failures.
- **D:** Not every ALTER is online for every engine/version.

---

### Q839 — Expert

You're reviewing this during a production change window. A query was fast yesterday but becomes slow after statistics change; the optimizer now picks a different join order. What is the right first response? Pick the option you'd be willing to defend in a production review.

- A. Restart the database so it forgets the slow plan.
- B. Increase the client timeout and declare the issue fixed.
- C. Force every query in the system to use nested loops.
- D. Compare the old and new execution plans and cardinality estimates before adding random indexes.

**Answer: D**

**Explanation:** Plan regressions are best diagnosed from actual plans, row estimates, statistics, parameter behavior, and data distribution.

**Why the other options miss the mark:**
- **A:** A restart may change cache state without addressing optimizer reasoning.
- **B:** Longer timeouts mask user impact.
- **C:** One join strategy is not universally correct.

---

### Q840 — Advanced

This comes up in an incident channel and the team wants a decision, not a textbook definition. A query was fast yesterday but becomes slow after statistics change; the optimizer now picks a different join order. What is the right first response? What would you choose as the most technically sound next step?

- A. Increase the client timeout and declare the issue fixed.
- B. Force every query in the system to use nested loops.
- C. Compare the old and new execution plans and cardinality estimates before adding random indexes.
- D. Restart the database so it forgets the slow plan.

**Answer: C**

**Explanation:** Plan regressions are best diagnosed from actual plans, row estimates, statistics, parameter behavior, and data distribution.

**Why the other options miss the mark:**
- **A:** Longer timeouts mask user impact.
- **B:** One join strategy is not universally correct.
- **D:** A restart may change cache state without addressing optimizer reasoning.

---

### Q841 — Advanced

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. A query was fast yesterday but becomes slow after statistics change; the optimizer now picks a different join order. What is the right first response? Which answer best matches how you would handle this on a real system?

- A. Force every query in the system to use nested loops.
- B. Compare the old and new execution plans and cardinality estimates before adding random indexes.
- C. Restart the database so it forgets the slow plan.
- D. Increase the client timeout and declare the issue fixed.

**Answer: B**

**Explanation:** Plan regressions are best diagnosed from actual plans, row estimates, statistics, parameter behavior, and data distribution.

**Why the other options miss the mark:**
- **A:** One join strategy is not universally correct.
- **C:** A restart may change cache state without addressing optimizer reasoning.
- **D:** Longer timeouts mask user impact.

---

### Q842 — Advanced

You're reviewing this during a production change window. A user accidentally deletes critical rows at 14:07, and the latest full backup is from midnight. What recovery capability minimizes lost work? Pick the option you'd be willing to defend in a production review.

- A. Use a read replica as a guaranteed time machine even if it has already replayed the delete.
- B. Rebuild indexes; deleted rows reappear after index recreation.
- C. Point-in-time recovery using the full backup plus retained transaction/WAL/binlog history up to just before the delete.
- D. Restore only the midnight backup and accept all daytime loss.

**Answer: C**

**Explanation:** PITR replays logged changes to a chosen recovery point, which is exactly what you need for accidental data modification.

**Why the other options miss the mark:**
- **A:** Replicas normally replay the same delete.
- **B:** Indexes do not contain an independent authoritative copy of deleted table rows.
- **D:** A full backup alone gives a much larger recovery-point loss.

---

### Q843 — Advanced

This comes up in an incident channel and the team wants a decision, not a textbook definition. A user accidentally deletes critical rows at 14:07, and the latest full backup is from midnight. What recovery capability minimizes lost work? What would you choose as the most technically sound next step?

- A. Rebuild indexes; deleted rows reappear after index recreation.
- B. Point-in-time recovery using the full backup plus retained transaction/WAL/binlog history up to just before the delete.
- C. Restore only the midnight backup and accept all daytime loss.
- D. Use a read replica as a guaranteed time machine even if it has already replayed the delete.

**Answer: B**

**Explanation:** PITR replays logged changes to a chosen recovery point, which is exactly what you need for accidental data modification.

**Why the other options miss the mark:**
- **A:** Indexes do not contain an independent authoritative copy of deleted table rows.
- **C:** A full backup alone gives a much larger recovery-point loss.
- **D:** Replicas normally replay the same delete.

---

### Q844 — Expert

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. A user accidentally deletes critical rows at 14:07, and the latest full backup is from midnight. What recovery capability minimizes lost work? Which answer best matches how you would handle this on a real system?

- A. Point-in-time recovery using the full backup plus retained transaction/WAL/binlog history up to just before the delete.
- B. Restore only the midnight backup and accept all daytime loss.
- C. Use a read replica as a guaranteed time machine even if it has already replayed the delete.
- D. Rebuild indexes; deleted rows reappear after index recreation.

**Answer: A**

**Explanation:** PITR replays logged changes to a chosen recovery point, which is exactly what you need for accidental data modification.

**Why the other options miss the mark:**
- **B:** A full backup alone gives a much larger recovery-point loss.
- **C:** Replicas normally replay the same delete.
- **D:** Indexes do not contain an independent authoritative copy of deleted table rows.

---

### Q845 — Advanced

You're reviewing this during a production change window. A database failover promotes a replica, but applications remain pointed at the old primary IP. What architectural improvement helps? Pick the option you'd be willing to defend in a production review.

- A. Disable health checks so the old primary remains reachable.
- B. Use a stable service endpoint/proxy/managed writer endpoint and validate failover behavior end to end.
- C. Hard-code both node IPs and let clients randomly choose.
- D. Lower every SQL query timeout to 10 ms.

**Answer: B**

**Explanation:** Failover is only useful if clients can discover and reach the new writer. Stable indirection and tested reconnection behavior are part of availability.

**Why the other options miss the mark:**
- **A:** Keeping a failed primary in rotation makes recovery worse.
- **C:** Randomly choosing nodes can send writes to replicas.
- **D:** Tiny timeouts do not provide topology discovery.

---

### Q846 — Expert

This comes up in an incident channel and the team wants a decision, not a textbook definition. A database failover promotes a replica, but applications remain pointed at the old primary IP. What architectural improvement helps? What would you choose as the most technically sound next step?

- A. Use a stable service endpoint/proxy/managed writer endpoint and validate failover behavior end to end.
- B. Hard-code both node IPs and let clients randomly choose.
- C. Lower every SQL query timeout to 10 ms.
- D. Disable health checks so the old primary remains reachable.

**Answer: A**

**Explanation:** Failover is only useful if clients can discover and reach the new writer. Stable indirection and tested reconnection behavior are part of availability.

**Why the other options miss the mark:**
- **B:** Randomly choosing nodes can send writes to replicas.
- **C:** Tiny timeouts do not provide topology discovery.
- **D:** Keeping a failed primary in rotation makes recovery worse.

---

### Q847 — Advanced

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. A database failover promotes a replica, but applications remain pointed at the old primary IP. What architectural improvement helps? Which answer best matches how you would handle this on a real system?

- A. Hard-code both node IPs and let clients randomly choose.
- B. Lower every SQL query timeout to 10 ms.
- C. Disable health checks so the old primary remains reachable.
- D. Use a stable service endpoint/proxy/managed writer endpoint and validate failover behavior end to end.

**Answer: D**

**Explanation:** Failover is only useful if clients can discover and reach the new writer. Stable indirection and tested reconnection behavior are part of availability.

**Why the other options miss the mark:**
- **A:** Randomly choosing nodes can send writes to replicas.
- **B:** Tiny timeouts do not provide topology discovery.
- **C:** Keeping a failed primary in rotation makes recovery worse.

---

### Q848 — Expert

You're reviewing this during a production change window. An API fetches 200 orders, then executes one separate customer query for each order. Database CPU and latency climb with page size. What pattern is this? Pick the option you'd be willing to defend in a production review.

- A. An N+1 query pattern that should be replaced with batching, joins, eager loading, or another set-oriented approach.
- B. A deadlock caused by row-level locking.
- C. A replication split-brain.
- D. A write-ahead log checkpoint.

**Answer: A**

**Explanation:** The request count grows linearly with result rows. Databases are usually far more efficient when related data is fetched in sets.

**Why the other options miss the mark:**
- **B:** Deadlocks are cyclic lock waits, not simply many sequential reads.
- **C:** Replication topology is unrelated to this query pattern.
- **D:** Checkpoints concern durability/storage flushing.

---

### Q849 — Advanced

This comes up in an incident channel and the team wants a decision, not a textbook definition. An API fetches 200 orders, then executes one separate customer query for each order. Database CPU and latency climb with page size. What pattern is this? What would you choose as the most technically sound next step?

- A. A deadlock caused by row-level locking.
- B. A replication split-brain.
- C. A write-ahead log checkpoint.
- D. An N+1 query pattern that should be replaced with batching, joins, eager loading, or another set-oriented approach.

**Answer: D**

**Explanation:** The request count grows linearly with result rows. Databases are usually far more efficient when related data is fetched in sets.

**Why the other options miss the mark:**
- **A:** Deadlocks are cyclic lock waits, not simply many sequential reads.
- **B:** Replication topology is unrelated to this query pattern.
- **C:** Checkpoints concern durability/storage flushing.

---

### Q850 — Advanced

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. An API fetches 200 orders, then executes one separate customer query for each order. Database CPU and latency climb with page size. What pattern is this? Which answer best matches how you would handle this on a real system?

- A. A replication split-brain.
- B. A write-ahead log checkpoint.
- C. An N+1 query pattern that should be replaced with batching, joins, eager loading, or another set-oriented approach.
- D. A deadlock caused by row-level locking.

**Answer: C**

**Explanation:** The request count grows linearly with result rows. Databases are usually far more efficient when related data is fetched in sets.

**Why the other options miss the mark:**
- **A:** Replication topology is unrelated to this query pattern.
- **B:** Checkpoints concern durability/storage flushing.
- **D:** Deadlocks are cyclic lock waits, not simply many sequential reads.

---

## GitOps and Argo CD

### Q851 — Expert

You're reviewing this during a production change window. An engineer hot-fixes a Deployment directly with kubectl. Minutes later Argo CD changes it back to the Git version. What is happening? Pick the option you'd be willing to defend in a production review.

- A. Helm is reading values from the engineer's local machine.
- B. The API server is rejecting all manual updates by design.
- C. Automated self-heal is reconciling live drift back to the declared Git state.
- D. The Kubernetes scheduler is restoring the previous ReplicaSet.

**Answer: C**

**Explanation:** In GitOps, Git is the desired state. Self-heal intentionally reverses out-of-band drift unless the desired configuration is updated.

**Why the other options miss the mark:**
- **A:** Argo CD reconciliation does not depend on a local Helm client.
- **B:** The API server accepted the change; the controller later reconciled it.
- **D:** Schedulers place pods; they do not restore arbitrary manifest fields.

---

### Q852 — Advanced

This comes up in an incident channel and the team wants a decision, not a textbook definition. An engineer hot-fixes a Deployment directly with kubectl. Minutes later Argo CD changes it back to the Git version. What is happening? What would you choose as the most technically sound next step?

- A. The API server is rejecting all manual updates by design.
- B. Automated self-heal is reconciling live drift back to the declared Git state.
- C. The Kubernetes scheduler is restoring the previous ReplicaSet.
- D. Helm is reading values from the engineer's local machine.

**Answer: B**

**Explanation:** In GitOps, Git is the desired state. Self-heal intentionally reverses out-of-band drift unless the desired configuration is updated.

**Why the other options miss the mark:**
- **A:** The API server accepted the change; the controller later reconciled it.
- **C:** Schedulers place pods; they do not restore arbitrary manifest fields.
- **D:** Argo CD reconciliation does not depend on a local Helm client.

---

### Q853 — Advanced

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. An engineer hot-fixes a Deployment directly with kubectl. Minutes later Argo CD changes it back to the Git version. What is happening? Which answer best matches how you would handle this on a real system?

- A. Automated self-heal is reconciling live drift back to the declared Git state.
- B. The Kubernetes scheduler is restoring the previous ReplicaSet.
- C. Helm is reading values from the engineer's local machine.
- D. The API server is rejecting all manual updates by design.

**Answer: A**

**Explanation:** In GitOps, Git is the desired state. Self-heal intentionally reverses out-of-band drift unless the desired configuration is updated.

**Why the other options miss the mark:**
- **B:** Schedulers place pods; they do not restore arbitrary manifest fields.
- **C:** Argo CD reconciliation does not depend on a local Helm client.
- **D:** The API server accepted the change; the controller later reconciled it.

---

### Q854 — Advanced

You're reviewing this during a production change window. A rollout requires the database migration Job to complete before the new application Deployment is applied. Which GitOps mechanism best expresses the ordering? Pick the option you'd be willing to defend in a production review.

- A. Turn off reconciliation and have an engineer apply the files manually.
- B. Use sync waves/hooks so the migration is sequenced before the dependent workload.
- C. Rely on alphabetical file names in the repository.
- D. Add sleep 60 to the application container entrypoint.

**Answer: B**

**Explanation:** Explicit sync ordering makes the dependency part of the deployment model rather than an undocumented timing assumption.

**Why the other options miss the mark:**
- **A:** Manual ordering defeats repeatable GitOps automation.
- **C:** File names are not a reliable dependency mechanism.
- **D:** Fixed sleeps are brittle and do not prove readiness.

---

### Q855 — Advanced

This comes up in an incident channel and the team wants a decision, not a textbook definition. A rollout requires the database migration Job to complete before the new application Deployment is applied. Which GitOps mechanism best expresses the ordering? What would you choose as the most technically sound next step?

- A. Use sync waves/hooks so the migration is sequenced before the dependent workload.
- B. Rely on alphabetical file names in the repository.
- C. Add sleep 60 to the application container entrypoint.
- D. Turn off reconciliation and have an engineer apply the files manually.

**Answer: A**

**Explanation:** Explicit sync ordering makes the dependency part of the deployment model rather than an undocumented timing assumption.

**Why the other options miss the mark:**
- **B:** File names are not a reliable dependency mechanism.
- **C:** Fixed sleeps are brittle and do not prove readiness.
- **D:** Manual ordering defeats repeatable GitOps automation.

---

### Q856 — Expert

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. A rollout requires the database migration Job to complete before the new application Deployment is applied. Which GitOps mechanism best expresses the ordering? Which answer best matches how you would handle this on a real system?

- A. Rely on alphabetical file names in the repository.
- B. Add sleep 60 to the application container entrypoint.
- C. Turn off reconciliation and have an engineer apply the files manually.
- D. Use sync waves/hooks so the migration is sequenced before the dependent workload.

**Answer: D**

**Explanation:** Explicit sync ordering makes the dependency part of the deployment model rather than an undocumented timing assumption.

**Why the other options miss the mark:**
- **A:** File names are not a reliable dependency mechanism.
- **B:** Fixed sleeps are brittle and do not prove readiness.
- **C:** Manual ordering defeats repeatable GitOps automation.

---

### Q857 — Advanced

You're reviewing this during a production change window. A pull request accidentally removes a namespace-scoped manifest and automated prune is enabled for the Argo CD application. What risk does that introduce? Pick the option you'd be willing to defend in a production review.

- A. The object can be deleted automatically after the Git change is reconciled, so destructive diffs need strong review and guardrails.
- B. Prune only removes objects in the local Git checkout, not the cluster.
- C. Argo CD will always ask for interactive confirmation before pruning.
- D. Kubernetes automatically recreates every pruned object from etcd history.

**Answer: A**

**Explanation:** Prune makes removal from desired state operationally meaningful. Reviews, project restrictions, sync windows, and resource protections matter for critical objects.

**Why the other options miss the mark:**
- **B:** Prune acts on live managed resources.
- **C:** Automated prune can run without interactive approval.
- **D:** Deleted objects are not generally resurrected from etcd history.

---

### Q858 — Expert

This comes up in an incident channel and the team wants a decision, not a textbook definition. A pull request accidentally removes a namespace-scoped manifest and automated prune is enabled for the Argo CD application. What risk does that introduce? What would you choose as the most technically sound next step?

- A. Prune only removes objects in the local Git checkout, not the cluster.
- B. Argo CD will always ask for interactive confirmation before pruning.
- C. Kubernetes automatically recreates every pruned object from etcd history.
- D. The object can be deleted automatically after the Git change is reconciled, so destructive diffs need strong review and guardrails.

**Answer: D**

**Explanation:** Prune makes removal from desired state operationally meaningful. Reviews, project restrictions, sync windows, and resource protections matter for critical objects.

**Why the other options miss the mark:**
- **A:** Prune acts on live managed resources.
- **B:** Automated prune can run without interactive approval.
- **C:** Deleted objects are not generally resurrected from etcd history.

---

### Q859 — Advanced

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. A pull request accidentally removes a namespace-scoped manifest and automated prune is enabled for the Argo CD application. What risk does that introduce? Which answer best matches how you would handle this on a real system?

- A. Argo CD will always ask for interactive confirmation before pruning.
- B. Kubernetes automatically recreates every pruned object from etcd history.
- C. The object can be deleted automatically after the Git change is reconciled, so destructive diffs need strong review and guardrails.
- D. Prune only removes objects in the local Git checkout, not the cluster.

**Answer: C**

**Explanation:** Prune makes removal from desired state operationally meaningful. Reviews, project restrictions, sync windows, and resource protections matter for critical objects.

**Why the other options miss the mark:**
- **A:** Automated prune can run without interactive approval.
- **B:** Deleted objects are not generally resurrected from etcd history.
- **D:** Prune acts on live managed resources.

---

### Q860 — Expert

You're reviewing this during a production change window. A platform team uses an app-of-apps repository to bootstrap dozens of cluster applications. What is a major design concern? Pick the option you'd be willing to defend in a production review.

- A. Child applications can no longer have independent Git repositories.
- B. Argo CD stops tracking health for applications created by another Application.
- C. Kubernetes limits a parent Application to four children.
- D. Changes to the parent can have a very large blast radius, so ownership, review, and progressive rollout controls matter.

**Answer: D**

**Explanation:** A bootstrap pattern centralizes powerful declarations. That is useful, but it also concentrates change impact and permissions.

**Why the other options miss the mark:**
- **A:** Child Applications can reference their own sources.
- **B:** Argo CD still manages and reports child Application health.
- **C:** There is no such fixed four-child limit.

---

### Q861 — Advanced

This comes up in an incident channel and the team wants a decision, not a textbook definition. A platform team uses an app-of-apps repository to bootstrap dozens of cluster applications. What is a major design concern? What would you choose as the most technically sound next step?

- A. Argo CD stops tracking health for applications created by another Application.
- B. Kubernetes limits a parent Application to four children.
- C. Changes to the parent can have a very large blast radius, so ownership, review, and progressive rollout controls matter.
- D. Child applications can no longer have independent Git repositories.

**Answer: C**

**Explanation:** A bootstrap pattern centralizes powerful declarations. That is useful, but it also concentrates change impact and permissions.

**Why the other options miss the mark:**
- **A:** Argo CD still manages and reports child Application health.
- **B:** There is no such fixed four-child limit.
- **D:** Child Applications can reference their own sources.

---

### Q862 — Advanced

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. A platform team uses an app-of-apps repository to bootstrap dozens of cluster applications. What is a major design concern? Which answer best matches how you would handle this on a real system?

- A. Kubernetes limits a parent Application to four children.
- B. Changes to the parent can have a very large blast radius, so ownership, review, and progressive rollout controls matter.
- C. Child applications can no longer have independent Git repositories.
- D. Argo CD stops tracking health for applications created by another Application.

**Answer: B**

**Explanation:** A bootstrap pattern centralizes powerful declarations. That is useful, but it also concentrates change impact and permissions.

**Why the other options miss the mark:**
- **A:** There is no such fixed four-child limit.
- **C:** Child Applications can reference their own sources.
- **D:** Argo CD still manages and reports child Application health.

---

### Q863 — Advanced

You're reviewing this during a production change window. Argo CD needs read access to a private Git repository that contains deployment manifests. Which credential design is preferable? Pick the option you'd be willing to defend in a production review.

- A. Give Argo CD an organization-owner token so repository access never fails.
- B. Make the repository public because the manifests do not contain application source code.
- C. Use a narrowly scoped deploy key or app/token with only the repository permissions Argo CD needs, and rotate it centrally.
- D. Store a developer's personal access token in the Application manifest.

**Answer: C**

**Explanation:** GitOps credentials are production deployment credentials. Least privilege, non-personal identity, central secret handling, and rotation reduce risk.

**Why the other options miss the mark:**
- **A:** Owner-level scope creates an excessive blast radius.
- **B:** Deployment manifests can expose architecture and configuration and should not be made public just for convenience.
- **D:** Personal credentials create key-person and lifecycle problems.

---

### Q864 — Advanced

This comes up in an incident channel and the team wants a decision, not a textbook definition. Argo CD needs read access to a private Git repository that contains deployment manifests. Which credential design is preferable? What would you choose as the most technically sound next step?

- A. Make the repository public because the manifests do not contain application source code.
- B. Use a narrowly scoped deploy key or app/token with only the repository permissions Argo CD needs, and rotate it centrally.
- C. Store a developer's personal access token in the Application manifest.
- D. Give Argo CD an organization-owner token so repository access never fails.

**Answer: B**

**Explanation:** GitOps credentials are production deployment credentials. Least privilege, non-personal identity, central secret handling, and rotation reduce risk.

**Why the other options miss the mark:**
- **A:** Deployment manifests can expose architecture and configuration and should not be made public just for convenience.
- **C:** Personal credentials create key-person and lifecycle problems.
- **D:** Owner-level scope creates an excessive blast radius.

---

### Q865 — Expert

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. Argo CD needs read access to a private Git repository that contains deployment manifests. Which credential design is preferable? Which answer best matches how you would handle this on a real system?

- A. Use a narrowly scoped deploy key or app/token with only the repository permissions Argo CD needs, and rotate it centrally.
- B. Store a developer's personal access token in the Application manifest.
- C. Give Argo CD an organization-owner token so repository access never fails.
- D. Make the repository public because the manifests do not contain application source code.

**Answer: A**

**Explanation:** GitOps credentials are production deployment credentials. Least privilege, non-personal identity, central secret handling, and rotation reduce risk.

**Why the other options miss the mark:**
- **B:** Personal credentials create key-person and lifecycle problems.
- **C:** Owner-level scope creates an excessive blast radius.
- **D:** Deployment manifests can expose architecture and configuration and should not be made public just for convenience.

---

### Q866 — Advanced

You're reviewing this during a production change window. A custom resource is fully ready, but Argo CD keeps showing the application as Progressing because it does not understand the CR status fields. What is the right fix? Pick the option you'd be willing to defend in a production review.

- A. Replace the CRD with a ConfigMap so Argo CD can read it.
- B. Define an appropriate custom health assessment for that resource type.
- C. Disable health checks for the entire Argo CD installation.
- D. Patch the custom resource status to say Healthy even if the controller disagrees.

**Answer: B**

**Explanation:** Custom health logic lets Argo CD interpret domain-specific readiness without weakening health evaluation globally.

**Why the other options miss the mark:**
- **A:** A CRD exists because the resource has controller semantics a ConfigMap does not provide.
- **C:** Global disablement hides real failures elsewhere.
- **D:** Faking status fights the owning controller and creates misleading state.

---

### Q867 — Expert

This comes up in an incident channel and the team wants a decision, not a textbook definition. A custom resource is fully ready, but Argo CD keeps showing the application as Progressing because it does not understand the CR status fields. What is the right fix? What would you choose as the most technically sound next step?

- A. Define an appropriate custom health assessment for that resource type.
- B. Disable health checks for the entire Argo CD installation.
- C. Patch the custom resource status to say Healthy even if the controller disagrees.
- D. Replace the CRD with a ConfigMap so Argo CD can read it.

**Answer: A**

**Explanation:** Custom health logic lets Argo CD interpret domain-specific readiness without weakening health evaluation globally.

**Why the other options miss the mark:**
- **B:** Global disablement hides real failures elsewhere.
- **C:** Faking status fights the owning controller and creates misleading state.
- **D:** A CRD exists because the resource has controller semantics a ConfigMap does not provide.

---

### Q868 — Advanced

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. A custom resource is fully ready, but Argo CD keeps showing the application as Progressing because it does not understand the CR status fields. What is the right fix? Which answer best matches how you would handle this on a real system?

- A. Disable health checks for the entire Argo CD installation.
- B. Patch the custom resource status to say Healthy even if the controller disagrees.
- C. Replace the CRD with a ConfigMap so Argo CD can read it.
- D. Define an appropriate custom health assessment for that resource type.

**Answer: D**

**Explanation:** Custom health logic lets Argo CD interpret domain-specific readiness without weakening health evaluation globally.

**Why the other options miss the mark:**
- **A:** Global disablement hides real failures elsewhere.
- **B:** Faking status fights the owning controller and creates misleading state.
- **C:** A CRD exists because the resource has controller semantics a ConfigMap does not provide.

---

### Q869 — Expert

You're reviewing this during a production change window. During an outage, an engineer changes a live ConfigMap by hand, but Argo CD keeps reverting the fix before it can be tested. What is the clean operational approach? Pick the option you'd be willing to defend in a production review.

- A. Commit the emergency change to the desired-state repository or deliberately pause/adjust reconciliation under a documented break-glass procedure.
- B. Keep racing Argo CD with repeated kubectl edits.
- C. Delete Argo CD so manual operations can continue.
- D. Change the resource ownerReference to a random object.

**Answer: A**

**Explanation:** When a reconciler is intentionally enforcing desired state, emergency operations need to either change that desired state or use a controlled break-glass path.

**Why the other options miss the mark:**
- **B:** Racing the controller is unreliable and unauditable.
- **C:** Removing the control plane is disproportionate.
- **D:** Owner references are unrelated to Argo CD diff reconciliation.

---

### Q870 — Advanced

This comes up in an incident channel and the team wants a decision, not a textbook definition. During an outage, an engineer changes a live ConfigMap by hand, but Argo CD keeps reverting the fix before it can be tested. What is the clean operational approach? What would you choose as the most technically sound next step?

- A. Keep racing Argo CD with repeated kubectl edits.
- B. Delete Argo CD so manual operations can continue.
- C. Change the resource ownerReference to a random object.
- D. Commit the emergency change to the desired-state repository or deliberately pause/adjust reconciliation under a documented break-glass procedure.

**Answer: D**

**Explanation:** When a reconciler is intentionally enforcing desired state, emergency operations need to either change that desired state or use a controlled break-glass path.

**Why the other options miss the mark:**
- **A:** Racing the controller is unreliable and unauditable.
- **B:** Removing the control plane is disproportionate.
- **C:** Owner references are unrelated to Argo CD diff reconciliation.

---

### Q871 — Advanced

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. During an outage, an engineer changes a live ConfigMap by hand, but Argo CD keeps reverting the fix before it can be tested. What is the clean operational approach? Which answer best matches how you would handle this on a real system?

- A. Delete Argo CD so manual operations can continue.
- B. Change the resource ownerReference to a random object.
- C. Commit the emergency change to the desired-state repository or deliberately pause/adjust reconciliation under a documented break-glass procedure.
- D. Keep racing Argo CD with repeated kubectl edits.

**Answer: C**

**Explanation:** When a reconciler is intentionally enforcing desired state, emergency operations need to either change that desired state or use a controlled break-glass path.

**Why the other options miss the mark:**
- **A:** Removing the control plane is disproportionate.
- **B:** Owner references are unrelated to Argo CD diff reconciliation.
- **D:** Racing the controller is unreliable and unauditable.

---

### Q872 — Advanced

You're reviewing this during a production change window. An Argo CD Application is stuck terminating because its finalizer is trying to delete managed resources that are no longer reachable. What should the team do? Pick the option you'd be willing to defend in a production review.

- A. Remove every finalizer in the cluster with a bulk patch.
- B. Restart kube-apiserver until the deletion completes.
- C. Create a second Application with the same name to overwrite the first.
- D. Understand which resources the finalizer is protecting, restore or intentionally bypass cleanup only after confirming the consequences.

**Answer: D**

**Explanation:** Finalizers encode cleanup obligations. Removing one can be valid in a recovery path, but only after you understand what will be orphaned.

**Why the other options miss the mark:**
- **A:** Bulk removal can orphan unrelated resources across the cluster.
- **B:** API server restarts do not satisfy external cleanup logic.
- **C:** Names cannot be reused while the original object is terminating.

---

### Q873 — Advanced

This comes up in an incident channel and the team wants a decision, not a textbook definition. An Argo CD Application is stuck terminating because its finalizer is trying to delete managed resources that are no longer reachable. What should the team do? What would you choose as the most technically sound next step?

- A. Restart kube-apiserver until the deletion completes.
- B. Create a second Application with the same name to overwrite the first.
- C. Understand which resources the finalizer is protecting, restore or intentionally bypass cleanup only after confirming the consequences.
- D. Remove every finalizer in the cluster with a bulk patch.

**Answer: C**

**Explanation:** Finalizers encode cleanup obligations. Removing one can be valid in a recovery path, but only after you understand what will be orphaned.

**Why the other options miss the mark:**
- **A:** API server restarts do not satisfy external cleanup logic.
- **B:** Names cannot be reused while the original object is terminating.
- **D:** Bulk removal can orphan unrelated resources across the cluster.

---

### Q874 — Expert

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. An Argo CD Application is stuck terminating because its finalizer is trying to delete managed resources that are no longer reachable. What should the team do? Which answer best matches how you would handle this on a real system?

- A. Create a second Application with the same name to overwrite the first.
- B. Understand which resources the finalizer is protecting, restore or intentionally bypass cleanup only after confirming the consequences.
- C. Remove every finalizer in the cluster with a bulk patch.
- D. Restart kube-apiserver until the deletion completes.

**Answer: B**

**Explanation:** Finalizers encode cleanup obligations. Removing one can be valid in a recovery path, but only after you understand what will be orphaned.

**Why the other options miss the mark:**
- **A:** Names cannot be reused while the original object is terminating.
- **C:** Bulk removal can orphan unrelated resources across the cluster.
- **D:** API server restarts do not satisfy external cleanup logic.

---

### Q875 — Advanced

You're reviewing this during a production change window. Automated sync is enabled and a bad commit reaches the production Git branch. Argo CD quickly deploys it everywhere. What control most directly reduces this risk? Pick the option you'd be willing to defend in a production review.

- A. Make production track every developer feature branch instead.
- B. Increase the Argo CD reconciliation frequency.
- C. Protect the production branch and combine reviewed promotion with progressive rollout or sync controls for high-risk environments.
- D. Disable Git history so bad commits cannot be inspected.

**Answer: C**

**Explanation:** GitOps shifts deployment control into Git. Strong review/promotion policy and progressive delivery become part of the production safety system.

**Why the other options miss the mark:**
- **A:** Feature branches increase uncontrolled change.
- **B:** Faster reconciliation would deploy the bad commit even sooner.
- **D:** Removing history reduces auditability, not risk.

---

### Q876 — Expert

This comes up in an incident channel and the team wants a decision, not a textbook definition. Automated sync is enabled and a bad commit reaches the production Git branch. Argo CD quickly deploys it everywhere. What control most directly reduces this risk? What would you choose as the most technically sound next step?

- A. Increase the Argo CD reconciliation frequency.
- B. Protect the production branch and combine reviewed promotion with progressive rollout or sync controls for high-risk environments.
- C. Disable Git history so bad commits cannot be inspected.
- D. Make production track every developer feature branch instead.

**Answer: B**

**Explanation:** GitOps shifts deployment control into Git. Strong review/promotion policy and progressive delivery become part of the production safety system.

**Why the other options miss the mark:**
- **A:** Faster reconciliation would deploy the bad commit even sooner.
- **C:** Removing history reduces auditability, not risk.
- **D:** Feature branches increase uncontrolled change.

---

### Q877 — Advanced

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. Automated sync is enabled and a bad commit reaches the production Git branch. Argo CD quickly deploys it everywhere. What control most directly reduces this risk? Which answer best matches how you would handle this on a real system?

- A. Protect the production branch and combine reviewed promotion with progressive rollout or sync controls for high-risk environments.
- B. Disable Git history so bad commits cannot be inspected.
- C. Make production track every developer feature branch instead.
- D. Increase the Argo CD reconciliation frequency.

**Answer: A**

**Explanation:** GitOps shifts deployment control into Git. Strong review/promotion policy and progressive delivery become part of the production safety system.

**Why the other options miss the mark:**
- **B:** Removing history reduces auditability, not risk.
- **C:** Feature branches increase uncontrolled change.
- **D:** Faster reconciliation would deploy the bad commit even sooner.

---

### Q878 — Expert

You're reviewing this during a production change window. A GitOps repository must describe applications that consume database credentials, but the team does not want plaintext secrets in Git. Which pattern fits GitOps well? Pick the option you'd be willing to defend in a production review.

- A. Put the password in a README and copy it during each release.
- B. Store encrypted secret material or secret references in Git and let a trusted controller retrieve/decrypt the value in-cluster.
- C. Commit plaintext Secret YAML because the repository is private.
- D. Base64-encode the password and treat it as encrypted.

**Answer: B**

**Explanation:** SOPS-style encryption, sealed secrets, or external secret references preserve declarative workflows without publishing plaintext credentials.

**Why the other options miss the mark:**
- **A:** Manual secret copying is hard to audit and rotate.
- **C:** Private repositories still have many readers, clones, backups, and history.
- **D:** Kubernetes base64 is encoding, not encryption.

---

### Q879 — Advanced

This comes up in an incident channel and the team wants a decision, not a textbook definition. A GitOps repository must describe applications that consume database credentials, but the team does not want plaintext secrets in Git. Which pattern fits GitOps well? What would you choose as the most technically sound next step?

- A. Store encrypted secret material or secret references in Git and let a trusted controller retrieve/decrypt the value in-cluster.
- B. Commit plaintext Secret YAML because the repository is private.
- C. Base64-encode the password and treat it as encrypted.
- D. Put the password in a README and copy it during each release.

**Answer: A**

**Explanation:** SOPS-style encryption, sealed secrets, or external secret references preserve declarative workflows without publishing plaintext credentials.

**Why the other options miss the mark:**
- **B:** Private repositories still have many readers, clones, backups, and history.
- **C:** Kubernetes base64 is encoding, not encryption.
- **D:** Manual secret copying is hard to audit and rotate.

---

### Q880 — Advanced

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. A GitOps repository must describe applications that consume database credentials, but the team does not want plaintext secrets in Git. Which pattern fits GitOps well? Which answer best matches how you would handle this on a real system?

- A. Commit plaintext Secret YAML because the repository is private.
- B. Base64-encode the password and treat it as encrypted.
- C. Put the password in a README and copy it during each release.
- D. Store encrypted secret material or secret references in Git and let a trusted controller retrieve/decrypt the value in-cluster.

**Answer: D**

**Explanation:** SOPS-style encryption, sealed secrets, or external secret references preserve declarative workflows without publishing plaintext credentials.

**Why the other options miss the mark:**
- **A:** Private repositories still have many readers, clones, backups, and history.
- **B:** Kubernetes base64 is encoding, not encryption.
- **C:** Manual secret copying is hard to audit and rotate.

---

## Helm

### Q881 — Expert

You're reviewing this during a production change window. A chart has a default replicaCount of 2, an environment values file sets 4, and the deployment command uses --set replicaCount=6. Which value will the rendered release use? Pick the option you'd be willing to defend in a production review.

- A. 6, because --set overrides values files and chart defaults.
- B. 2, because values.yaml is part of the chart.
- C. 4, because files always override command-line values.
- D. The release will fail because Helm does not allow the same key in multiple places.

**Answer: A**

**Explanation:** Helm merges values with later/higher-precedence sources winning; command-line --set has higher precedence than the chart default and supplied values files.

**Why the other options miss the mark:**
- **B:** Chart defaults are the lowest-precedence source here.
- **C:** The command-line override wins over the file.
- **D:** Overriding a key is a normal Helm workflow.

---

### Q882 — Advanced

This comes up in an incident channel and the team wants a decision, not a textbook definition. A chart has a default replicaCount of 2, an environment values file sets 4, and the deployment command uses --set replicaCount=6. Which value will the rendered release use? What would you choose as the most technically sound next step?

- A. 2, because values.yaml is part of the chart.
- B. 4, because files always override command-line values.
- C. The release will fail because Helm does not allow the same key in multiple places.
- D. 6, because --set overrides values files and chart defaults.

**Answer: D**

**Explanation:** Helm merges values with later/higher-precedence sources winning; command-line --set has higher precedence than the chart default and supplied values files.

**Why the other options miss the mark:**
- **A:** Chart defaults are the lowest-precedence source here.
- **B:** The command-line override wins over the file.
- **C:** Overriding a key is a normal Helm workflow.

---

### Q883 — Advanced

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. A chart has a default replicaCount of 2, an environment values file sets 4, and the deployment command uses --set replicaCount=6. Which value will the rendered release use? Which answer best matches how you would handle this on a real system?

- A. 4, because files always override command-line values.
- B. The release will fail because Helm does not allow the same key in multiple places.
- C. 6, because --set overrides values files and chart defaults.
- D. 2, because values.yaml is part of the chart.

**Answer: C**

**Explanation:** Helm merges values with later/higher-precedence sources winning; command-line --set has higher precedence than the chart default and supplied values files.

**Why the other options miss the mark:**
- **A:** The command-line override wins over the file.
- **B:** Overriding a key is a normal Helm workflow.
- **D:** Chart defaults are the lowest-precedence source here.

---

### Q884 — Advanced

You're reviewing this during a production change window. A Helm upgrade changes a Kubernetes Service field that the API server treats as immutable, and the upgrade fails. What is the right way to reason about the fix? Pick the option you'd be willing to defend in a production review.

- A. Retry helm upgrade until the API server accepts it.
- B. Add --force to every future upgrade without reviewing the impact.
- C. Edit the Helm release secret so Helm believes the new value already exists.
- D. Plan a controlled resource replacement or a chart migration that preserves availability instead of expecting Helm to mutate an immutable field.

**Answer: D**

**Explanation:** Helm cannot override Kubernetes API immutability. A safe migration usually means replacement, sequencing, and validation.

**Why the other options miss the mark:**
- **A:** Retries do not change API semantics.
- **B:** Force can replace resources and cause downtime if used casually.
- **C:** Editing release storage creates an inconsistent desired/actual state.

---

### Q885 — Advanced

This comes up in an incident channel and the team wants a decision, not a textbook definition. A Helm upgrade changes a Kubernetes Service field that the API server treats as immutable, and the upgrade fails. What is the right way to reason about the fix? What would you choose as the most technically sound next step?

- A. Add --force to every future upgrade without reviewing the impact.
- B. Edit the Helm release secret so Helm believes the new value already exists.
- C. Plan a controlled resource replacement or a chart migration that preserves availability instead of expecting Helm to mutate an immutable field.
- D. Retry helm upgrade until the API server accepts it.

**Answer: C**

**Explanation:** Helm cannot override Kubernetes API immutability. A safe migration usually means replacement, sequencing, and validation.

**Why the other options miss the mark:**
- **A:** Force can replace resources and cause downtime if used casually.
- **B:** Editing release storage creates an inconsistent desired/actual state.
- **D:** Retries do not change API semantics.

---

### Q886 — Expert

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. A Helm upgrade changes a Kubernetes Service field that the API server treats as immutable, and the upgrade fails. What is the right way to reason about the fix? Which answer best matches how you would handle this on a real system?

- A. Edit the Helm release secret so Helm believes the new value already exists.
- B. Plan a controlled resource replacement or a chart migration that preserves availability instead of expecting Helm to mutate an immutable field.
- C. Retry helm upgrade until the API server accepts it.
- D. Add --force to every future upgrade without reviewing the impact.

**Answer: B**

**Explanation:** Helm cannot override Kubernetes API immutability. A safe migration usually means replacement, sequencing, and validation.

**Why the other options miss the mark:**
- **A:** Editing release storage creates an inconsistent desired/actual state.
- **C:** Retries do not change API semantics.
- **D:** Force can replace resources and cause downtime if used casually.

---

### Q887 — Advanced

You're reviewing this during a production change window. A pre-upgrade Helm hook runs a database migration. The upgrade is retried after timing out, and the migration executes again. What property should the hook job have? Pick the option you'd be willing to defend in a production review.

- A. It should rely on the Helm release revision number as proof the SQL never ran.
- B. It should run as a long-lived sidecar instead of a Job.
- C. It should be idempotent or explicitly track migration state so reruns are safe.
- D. It should always drop and recreate the target tables.

**Answer: C**

**Explanation:** Hooks can be retried or re-created. Operationally safe hooks need idempotent behavior or durable migration bookkeeping.

**Why the other options miss the mark:**
- **A:** A failed Helm revision does not prove the external side effect did not happen.
- **B:** A sidecar changes the workload model and does not solve idempotency.
- **D:** Destructive resets are not a retry strategy.

---

### Q888 — Expert

This comes up in an incident channel and the team wants a decision, not a textbook definition. A pre-upgrade Helm hook runs a database migration. The upgrade is retried after timing out, and the migration executes again. What property should the hook job have? What would you choose as the most technically sound next step?

- A. It should run as a long-lived sidecar instead of a Job.
- B. It should be idempotent or explicitly track migration state so reruns are safe.
- C. It should always drop and recreate the target tables.
- D. It should rely on the Helm release revision number as proof the SQL never ran.

**Answer: B**

**Explanation:** Hooks can be retried or re-created. Operationally safe hooks need idempotent behavior or durable migration bookkeeping.

**Why the other options miss the mark:**
- **A:** A sidecar changes the workload model and does not solve idempotency.
- **C:** Destructive resets are not a retry strategy.
- **D:** A failed Helm revision does not prove the external side effect did not happen.

---

### Q889 — Advanced

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. A pre-upgrade Helm hook runs a database migration. The upgrade is retried after timing out, and the migration executes again. What property should the hook job have? Which answer best matches how you would handle this on a real system?

- A. It should be idempotent or explicitly track migration state so reruns are safe.
- B. It should always drop and recreate the target tables.
- C. It should rely on the Helm release revision number as proof the SQL never ran.
- D. It should run as a long-lived sidecar instead of a Job.

**Answer: A**

**Explanation:** Hooks can be retried or re-created. Operationally safe hooks need idempotent behavior or durable migration bookkeeping.

**Why the other options miss the mark:**
- **B:** Destructive resets are not a retry strategy.
- **C:** A failed Helm revision does not prove the external side effect did not happen.
- **D:** A sidecar changes the workload model and does not solve idempotency.

---

### Q890 — Expert

You're reviewing this during a production change window. A chart ships CRDs and the team assumes every helm upgrade will automatically perform complex CRD schema migrations. What should the team verify? Pick the option you'd be willing to defend in a production review.

- A. Delete every CRD before each chart upgrade so Helm can recreate it.
- B. CRD lifecycle and compatibility explicitly, because CRDs often require separate upgrade planning from normal templated resources.
- C. Nothing; Helm always upgrades CRDs exactly like Deployments.
- D. Only the application container image matters once the CRD exists.

**Answer: B**

**Explanation:** CRDs have special lifecycle considerations. Schema compatibility, controller sequencing, and stored custom resources may require deliberate migration steps.

**Why the other options miss the mark:**
- **A:** Deleting CRDs can delete or orphan custom resources and is highly disruptive.
- **C:** CRDs are not equivalent to ordinary namespaced resources in Helm lifecycle.
- **D:** Controller compatibility can depend directly on CRD schema.

---

### Q891 — Advanced

This comes up in an incident channel and the team wants a decision, not a textbook definition. A chart ships CRDs and the team assumes every helm upgrade will automatically perform complex CRD schema migrations. What should the team verify? What would you choose as the most technically sound next step?

- A. CRD lifecycle and compatibility explicitly, because CRDs often require separate upgrade planning from normal templated resources.
- B. Nothing; Helm always upgrades CRDs exactly like Deployments.
- C. Only the application container image matters once the CRD exists.
- D. Delete every CRD before each chart upgrade so Helm can recreate it.

**Answer: A**

**Explanation:** CRDs have special lifecycle considerations. Schema compatibility, controller sequencing, and stored custom resources may require deliberate migration steps.

**Why the other options miss the mark:**
- **B:** CRDs are not equivalent to ordinary namespaced resources in Helm lifecycle.
- **C:** Controller compatibility can depend directly on CRD schema.
- **D:** Deleting CRDs can delete or orphan custom resources and is highly disruptive.

---

### Q892 — Advanced

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. A chart ships CRDs and the team assumes every helm upgrade will automatically perform complex CRD schema migrations. What should the team verify? Which answer best matches how you would handle this on a real system?

- A. Nothing; Helm always upgrades CRDs exactly like Deployments.
- B. Only the application container image matters once the CRD exists.
- C. Delete every CRD before each chart upgrade so Helm can recreate it.
- D. CRD lifecycle and compatibility explicitly, because CRDs often require separate upgrade planning from normal templated resources.

**Answer: D**

**Explanation:** CRDs have special lifecycle considerations. Schema compatibility, controller sequencing, and stored custom resources may require deliberate migration steps.

**Why the other options miss the mark:**
- **A:** CRDs are not equivalent to ordinary namespaced resources in Helm lifecycle.
- **B:** Controller compatibility can depend directly on CRD schema.
- **C:** Deleting CRDs can delete or orphan custom resources and is highly disruptive.

---

### Q893 — Advanced

You're reviewing this during a production change window. A release deploys application code and performs a backward-incompatible database migration. The pods fail and the team wants to run helm rollback. What is the key risk? Pick the option you'd be willing to defend in a production review.

- A. Rolling back Kubernetes manifests may not roll back the database change, so the old application can be incompatible with the new schema.
- B. Helm rollback automatically reverses any SQL run by the application.
- C. Kubernetes will snapshot the database before the rollback.
- D. The only risk is that the image pull might be slower the second time.

**Answer: A**

**Explanation:** Helm manages the release resources it knows about; external database side effects need their own backward-compatible migration and recovery strategy.

**Why the other options miss the mark:**
- **B:** Helm cannot infer and reverse arbitrary SQL side effects.
- **C:** Kubernetes does not automatically snapshot external databases for Helm.
- **D:** Schema compatibility is the material risk here.

---

### Q894 — Advanced

This comes up in an incident channel and the team wants a decision, not a textbook definition. A release deploys application code and performs a backward-incompatible database migration. The pods fail and the team wants to run helm rollback. What is the key risk? What would you choose as the most technically sound next step?

- A. Helm rollback automatically reverses any SQL run by the application.
- B. Kubernetes will snapshot the database before the rollback.
- C. The only risk is that the image pull might be slower the second time.
- D. Rolling back Kubernetes manifests may not roll back the database change, so the old application can be incompatible with the new schema.

**Answer: D**

**Explanation:** Helm manages the release resources it knows about; external database side effects need their own backward-compatible migration and recovery strategy.

**Why the other options miss the mark:**
- **A:** Helm cannot infer and reverse arbitrary SQL side effects.
- **B:** Kubernetes does not automatically snapshot external databases for Helm.
- **C:** Schema compatibility is the material risk here.

---

### Q895 — Expert

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. A release deploys application code and performs a backward-incompatible database migration. The pods fail and the team wants to run helm rollback. What is the key risk? Which answer best matches how you would handle this on a real system?

- A. Kubernetes will snapshot the database before the rollback.
- B. The only risk is that the image pull might be slower the second time.
- C. Rolling back Kubernetes manifests may not roll back the database change, so the old application can be incompatible with the new schema.
- D. Helm rollback automatically reverses any SQL run by the application.

**Answer: C**

**Explanation:** Helm manages the release resources it knows about; external database side effects need their own backward-compatible migration and recovery strategy.

**Why the other options miss the mark:**
- **A:** Kubernetes does not automatically snapshot external databases for Helm.
- **B:** Schema compatibility is the material risk here.
- **D:** Helm cannot infer and reverse arbitrary SQL side effects.

---

### Q896 — Advanced

You're reviewing this during a production change window. A template fails with a nil pointer when an optional nested values block is omitted in one environment. What is the maintainable fix? Pick the option you'd be willing to defend in a production review.

- A. Add the missing block manually to every cluster and never document it.
- B. Wrap the entire template in a single if that disables the workload.
- C. Use tpl on every value so Helm stops checking types.
- D. Use defaults/guards in the template and validate the values shape rather than assuming every nested key exists.

**Answer: D**

**Explanation:** Templates should handle optional inputs deliberately. Defaults and schema validation make the contract explicit and prevent environment-specific rendering failures.

**Why the other options miss the mark:**
- **A:** Manual hidden requirements are easy to miss.
- **B:** Disabling the workload masks the configuration bug.
- **C:** tpl evaluates strings as templates; it does not solve missing objects or type safety.

---

### Q897 — Expert

This comes up in an incident channel and the team wants a decision, not a textbook definition. A template fails with a nil pointer when an optional nested values block is omitted in one environment. What is the maintainable fix? What would you choose as the most technically sound next step?

- A. Wrap the entire template in a single if that disables the workload.
- B. Use tpl on every value so Helm stops checking types.
- C. Use defaults/guards in the template and validate the values shape rather than assuming every nested key exists.
- D. Add the missing block manually to every cluster and never document it.

**Answer: C**

**Explanation:** Templates should handle optional inputs deliberately. Defaults and schema validation make the contract explicit and prevent environment-specific rendering failures.

**Why the other options miss the mark:**
- **A:** Disabling the workload masks the configuration bug.
- **B:** tpl evaluates strings as templates; it does not solve missing objects or type safety.
- **D:** Manual hidden requirements are easy to miss.

---

### Q898 — Advanced

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. A template fails with a nil pointer when an optional nested values block is omitted in one environment. What is the maintainable fix? Which answer best matches how you would handle this on a real system?

- A. Use tpl on every value so Helm stops checking types.
- B. Use defaults/guards in the template and validate the values shape rather than assuming every nested key exists.
- C. Add the missing block manually to every cluster and never document it.
- D. Wrap the entire template in a single if that disables the workload.

**Answer: B**

**Explanation:** Templates should handle optional inputs deliberately. Defaults and schema validation make the contract explicit and prevent environment-specific rendering failures.

**Why the other options miss the mark:**
- **A:** tpl evaluates strings as templates; it does not solve missing objects or type safety.
- **C:** Manual hidden requirements are easy to miss.
- **D:** Disabling the workload masks the configuration bug.

---

### Q899 — Expert

You're reviewing this during a production change window. A Helm release is in a failed state after a partial upgrade. Some Kubernetes objects changed and others did not. What should you do before retrying? Pick the option you'd be willing to defend in a production review.

- A. Delete only the Helm secret and leave the resources in place.
- B. Run upgrades repeatedly until all resources eventually converge.
- C. Inspect release history and actual cluster state, then decide whether to rollback or repair before another upgrade.
- D. Delete the namespace so Helm can start clean.

**Answer: C**

**Explanation:** A partial release can leave real side effects. Understanding both Helm history and cluster state avoids compounding the inconsistency.

**Why the other options miss the mark:**
- **A:** Deleting release metadata can orphan resources from Helm management.
- **B:** Repeated blind retries can make the state harder to reason about.
- **D:** Namespace deletion is disproportionate and destructive.

---

### Q900 — Advanced

This comes up in an incident channel and the team wants a decision, not a textbook definition. A Helm release is in a failed state after a partial upgrade. Some Kubernetes objects changed and others did not. What should you do before retrying? What would you choose as the most technically sound next step?

- A. Run upgrades repeatedly until all resources eventually converge.
- B. Inspect release history and actual cluster state, then decide whether to rollback or repair before another upgrade.
- C. Delete the namespace so Helm can start clean.
- D. Delete only the Helm secret and leave the resources in place.

**Answer: B**

**Explanation:** A partial release can leave real side effects. Understanding both Helm history and cluster state avoids compounding the inconsistency.

**Why the other options miss the mark:**
- **A:** Repeated blind retries can make the state harder to reason about.
- **C:** Namespace deletion is disproportionate and destructive.
- **D:** Deleting release metadata can orphan resources from Helm management.

---

### Q901 — Advanced

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. A Helm release is in a failed state after a partial upgrade. Some Kubernetes objects changed and others did not. What should you do before retrying? Which answer best matches how you would handle this on a real system?

- A. Inspect release history and actual cluster state, then decide whether to rollback or repair before another upgrade.
- B. Delete the namespace so Helm can start clean.
- C. Delete only the Helm secret and leave the resources in place.
- D. Run upgrades repeatedly until all resources eventually converge.

**Answer: A**

**Explanation:** A partial release can leave real side effects. Understanding both Helm history and cluster state avoids compounding the inconsistency.

**Why the other options miss the mark:**
- **B:** Namespace deletion is disproportionate and destructive.
- **C:** Deleting release metadata can orphan resources from Helm management.
- **D:** Repeated blind retries can make the state harder to reason about.

---

### Q902 — Advanced

You're reviewing this during a production change window. A parent chart allows a dependency version range that floats to new minor releases. A rebuild weeks later renders different manifests without application code changes. What would improve reproducibility? Pick the option you'd be willing to defend in a production review.

- A. Vendor random copies of the dependency without recording their versions.
- B. Use deliberate dependency versioning and commit the generated Chart.lock.
- C. Delete Chart.lock so Helm can always resolve the newest dependency.
- D. Pin only appVersion in the parent chart.

**Answer: B**

**Explanation:** Chart.lock records resolved dependency versions. Treating dependency upgrades as reviewed changes makes chart builds reproducible.

**Why the other options miss the mark:**
- **A:** Untracked vendoring makes provenance and updates harder.
- **C:** Deleting the lock intentionally reintroduces floating resolution.
- **D:** appVersion is metadata and does not lock dependencies.

---

### Q903 — Advanced

This comes up in an incident channel and the team wants a decision, not a textbook definition. A parent chart allows a dependency version range that floats to new minor releases. A rebuild weeks later renders different manifests without application code changes. What would improve reproducibility? What would you choose as the most technically sound next step?

- A. Use deliberate dependency versioning and commit the generated Chart.lock.
- B. Delete Chart.lock so Helm can always resolve the newest dependency.
- C. Pin only appVersion in the parent chart.
- D. Vendor random copies of the dependency without recording their versions.

**Answer: A**

**Explanation:** Chart.lock records resolved dependency versions. Treating dependency upgrades as reviewed changes makes chart builds reproducible.

**Why the other options miss the mark:**
- **B:** Deleting the lock intentionally reintroduces floating resolution.
- **C:** appVersion is metadata and does not lock dependencies.
- **D:** Untracked vendoring makes provenance and updates harder.

---

### Q904 — Expert

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. A parent chart allows a dependency version range that floats to new minor releases. A rebuild weeks later renders different manifests without application code changes. What would improve reproducibility? Which answer best matches how you would handle this on a real system?

- A. Delete Chart.lock so Helm can always resolve the newest dependency.
- B. Pin only appVersion in the parent chart.
- C. Vendor random copies of the dependency without recording their versions.
- D. Use deliberate dependency versioning and commit the generated Chart.lock.

**Answer: D**

**Explanation:** Chart.lock records resolved dependency versions. Treating dependency upgrades as reviewed changes makes chart builds reproducible.

**Why the other options miss the mark:**
- **A:** Deleting the lock intentionally reintroduces floating resolution.
- **B:** appVersion is metadata and does not lock dependencies.
- **C:** Untracked vendoring makes provenance and updates harder.

---

### Q905 — Advanced

You're reviewing this during a production change window. A team changes application image behavior but publishes a chart with the same chart version and only changes appVersion. Why can that be problematic? Pick the option you'd be willing to defend in a production review.

- A. Package repositories and GitOps tooling commonly use chart version as the release artifact identity, so chart changes should have a new chart version.
- B. appVersion automatically increments chart version during packaging.
- C. Kubernetes refuses to run charts whose appVersion changed.
- D. Helm calculates the chart version from the image digest at install time.

**Answer: A**

**Explanation:** Chart version identifies the chart package; appVersion is descriptive application metadata. Reproducible delivery depends on immutable versioned chart artifacts.

**Why the other options miss the mark:**
- **B:** Helm does not auto-bump chart metadata.
- **C:** Kubernetes does not interpret Helm appVersion.
- **D:** Chart versions are declared metadata, not derived from the image.

---

### Q906 — Expert

This comes up in an incident channel and the team wants a decision, not a textbook definition. A team changes application image behavior but publishes a chart with the same chart version and only changes appVersion. Why can that be problematic? What would you choose as the most technically sound next step?

- A. appVersion automatically increments chart version during packaging.
- B. Kubernetes refuses to run charts whose appVersion changed.
- C. Helm calculates the chart version from the image digest at install time.
- D. Package repositories and GitOps tooling commonly use chart version as the release artifact identity, so chart changes should have a new chart version.

**Answer: D**

**Explanation:** Chart version identifies the chart package; appVersion is descriptive application metadata. Reproducible delivery depends on immutable versioned chart artifacts.

**Why the other options miss the mark:**
- **A:** Helm does not auto-bump chart metadata.
- **B:** Kubernetes does not interpret Helm appVersion.
- **C:** Chart versions are declared metadata, not derived from the image.

---

### Q907 — Advanced

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. A team changes application image behavior but publishes a chart with the same chart version and only changes appVersion. Why can that be problematic? Which answer best matches how you would handle this on a real system?

- A. Kubernetes refuses to run charts whose appVersion changed.
- B. Helm calculates the chart version from the image digest at install time.
- C. Package repositories and GitOps tooling commonly use chart version as the release artifact identity, so chart changes should have a new chart version.
- D. appVersion automatically increments chart version during packaging.

**Answer: C**

**Explanation:** Chart version identifies the chart package; appVersion is descriptive application metadata. Reproducible delivery depends on immutable versioned chart artifacts.

**Why the other options miss the mark:**
- **A:** Kubernetes does not interpret Helm appVersion.
- **B:** Chart versions are declared metadata, not derived from the image.
- **D:** Helm does not auto-bump chart metadata.

---

### Q908 — Expert

You're reviewing this during a production change window. Different teams keep passing values of the wrong type and only discover the problem deep in template rendering. Which chart feature can catch many of these mistakes earlier? Pick the option you'd be willing to defend in a production review.

- A. A NOTES.txt file describing the expected values in prose.
- B. A post-install hook that checks values after resources are created.
- C. A larger _helpers.tpl file with more named templates.
- D. A values.schema.json file that validates the supported values structure and types.

**Answer: D**

**Explanation:** JSON schema gives Helm a machine-checkable values contract before deployment proceeds.

**Why the other options miss the mark:**
- **A:** Documentation helps people but does not enforce types.
- **B:** Post-install validation is too late to prevent bad resources.
- **C:** Helper templates improve reuse, not values contract enforcement.

---

### Q909 — Advanced

This comes up in an incident channel and the team wants a decision, not a textbook definition. Different teams keep passing values of the wrong type and only discover the problem deep in template rendering. Which chart feature can catch many of these mistakes earlier? What would you choose as the most technically sound next step?

- A. A post-install hook that checks values after resources are created.
- B. A larger _helpers.tpl file with more named templates.
- C. A values.schema.json file that validates the supported values structure and types.
- D. A NOTES.txt file describing the expected values in prose.

**Answer: C**

**Explanation:** JSON schema gives Helm a machine-checkable values contract before deployment proceeds.

**Why the other options miss the mark:**
- **A:** Post-install validation is too late to prevent bad resources.
- **B:** Helper templates improve reuse, not values contract enforcement.
- **D:** Documentation helps people but does not enforce types.

---

### Q910 — Advanced

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. Different teams keep passing values of the wrong type and only discover the problem deep in template rendering. Which chart feature can catch many of these mistakes earlier? Which answer best matches how you would handle this on a real system?

- A. A larger _helpers.tpl file with more named templates.
- B. A values.schema.json file that validates the supported values structure and types.
- C. A NOTES.txt file describing the expected values in prose.
- D. A post-install hook that checks values after resources are created.

**Answer: B**

**Explanation:** JSON schema gives Helm a machine-checkable values contract before deployment proceeds.

**Why the other options miss the mark:**
- **A:** Helper templates improve reuse, not values contract enforcement.
- **C:** Documentation helps people but does not enforce types.
- **D:** Post-install validation is too late to prevent bad resources.

---

## Kafka and Streaming

### Q911 — Expert

You're reviewing this during a production change window. Consumer lag keeps growing even though consumer CPU is low. The consumer spends most of its time waiting on a slow database write. What does that tell you? Pick the option you'd be willing to defend in a production review.

- A. Increase message retention first; that will make processing faster.
- B. The bottleneck is downstream processing latency, so adding CPU alone is unlikely to clear the lag.
- C. The Kafka brokers must be out of disk space.
- D. Low CPU proves the consumer has spare end-to-end capacity.

**Answer: B**

**Explanation:** Consumers can be I/O-bound or blocked on dependencies. Lag is about processing throughput versus arrival rate, not just CPU utilization.

**Why the other options miss the mark:**
- **A:** Retention changes how long data is kept, not the consumer's service time.
- **C:** Broker disk can cause issues but is not implied by low consumer CPU and slow DB writes.
- **D:** Low CPU can mean the process is waiting, not that it can process faster.

---

### Q912 — Advanced

This comes up in an incident channel and the team wants a decision, not a textbook definition. Consumer lag keeps growing even though consumer CPU is low. The consumer spends most of its time waiting on a slow database write. What does that tell you? What would you choose as the most technically sound next step?

- A. The bottleneck is downstream processing latency, so adding CPU alone is unlikely to clear the lag.
- B. The Kafka brokers must be out of disk space.
- C. Low CPU proves the consumer has spare end-to-end capacity.
- D. Increase message retention first; that will make processing faster.

**Answer: A**

**Explanation:** Consumers can be I/O-bound or blocked on dependencies. Lag is about processing throughput versus arrival rate, not just CPU utilization.

**Why the other options miss the mark:**
- **B:** Broker disk can cause issues but is not implied by low consumer CPU and slow DB writes.
- **C:** Low CPU can mean the process is waiting, not that it can process faster.
- **D:** Retention changes how long data is kept, not the consumer's service time.

---

### Q913 — Advanced

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. Consumer lag keeps growing even though consumer CPU is low. The consumer spends most of its time waiting on a slow database write. What does that tell you? Which answer best matches how you would handle this on a real system?

- A. The Kafka brokers must be out of disk space.
- B. Low CPU proves the consumer has spare end-to-end capacity.
- C. Increase message retention first; that will make processing faster.
- D. The bottleneck is downstream processing latency, so adding CPU alone is unlikely to clear the lag.

**Answer: D**

**Explanation:** Consumers can be I/O-bound or blocked on dependencies. Lag is about processing throughput versus arrival rate, not just CPU utilization.

**Why the other options miss the mark:**
- **A:** Broker disk can cause issues but is not implied by low consumer CPU and slow DB writes.
- **B:** Low CPU can mean the process is waiting, not that it can process faster.
- **C:** Retention changes how long data is kept, not the consumer's service time.

---

### Q914 — Advanced

You're reviewing this during a production change window. A consumer group rebalances every few minutes because instances repeatedly exceed max.poll.interval.ms while processing large batches. What is a better fix than simply adding more consumers? Pick the option you'd be willing to defend in a production review.

- A. Reduce/parallelize processing or tune poll/batch behavior so each consumer continues polling within the expected interval.
- B. Set session timeout to several hours so dead consumers are never removed.
- C. Disable consumer-group membership and manually assign random partitions on every restart.
- D. Commit offsets before fetching records so rebalances stop.

**Answer: A**

**Explanation:** If processing blocks polling for too long, the group treats the member as unhealthy. Fix the processing/poll contract rather than hiding liveness failures.

**Why the other options miss the mark:**
- **B:** Huge timeouts delay real failure recovery.
- **C:** Manual random assignment creates its own ownership problems.
- **D:** Offset timing does not solve the max poll interval and can cause data loss.

---

### Q915 — Advanced

This comes up in an incident channel and the team wants a decision, not a textbook definition. A consumer group rebalances every few minutes because instances repeatedly exceed max.poll.interval.ms while processing large batches. What is a better fix than simply adding more consumers? What would you choose as the most technically sound next step?

- A. Set session timeout to several hours so dead consumers are never removed.
- B. Disable consumer-group membership and manually assign random partitions on every restart.
- C. Commit offsets before fetching records so rebalances stop.
- D. Reduce/parallelize processing or tune poll/batch behavior so each consumer continues polling within the expected interval.

**Answer: D**

**Explanation:** If processing blocks polling for too long, the group treats the member as unhealthy. Fix the processing/poll contract rather than hiding liveness failures.

**Why the other options miss the mark:**
- **A:** Huge timeouts delay real failure recovery.
- **B:** Manual random assignment creates its own ownership problems.
- **C:** Offset timing does not solve the max poll interval and can cause data loss.

---

### Q916 — Expert

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. A consumer group rebalances every few minutes because instances repeatedly exceed max.poll.interval.ms while processing large batches. What is a better fix than simply adding more consumers? Which answer best matches how you would handle this on a real system?

- A. Disable consumer-group membership and manually assign random partitions on every restart.
- B. Commit offsets before fetching records so rebalances stop.
- C. Reduce/parallelize processing or tune poll/batch behavior so each consumer continues polling within the expected interval.
- D. Set session timeout to several hours so dead consumers are never removed.

**Answer: C**

**Explanation:** If processing blocks polling for too long, the group treats the member as unhealthy. Fix the processing/poll contract rather than hiding liveness failures.

**Why the other options miss the mark:**
- **A:** Manual random assignment creates its own ownership problems.
- **B:** Offset timing does not solve the max poll interval and can cause data loss.
- **D:** Huge timeouts delay real failure recovery.

---

### Q917 — Advanced

You're reviewing this during a production change window. One Kafka partition receives 70% of the traffic because most events share the same message key. What is the consequence? Pick the option you'd be willing to defend in a production review.

- A. Kafka will automatically split the hot partition into smaller partitions.
- B. Consumers can process one partition concurrently across many group members.
- C. Replication factor redistributes the key across multiple leaders for parallel writes.
- D. That partition becomes a throughput ceiling even if other partitions and brokers have spare capacity.

**Answer: D**

**Explanation:** Ordering by key maps related records to one partition. A skewed key can concentrate work and limit parallelism.

**Why the other options miss the mark:**
- **A:** Kafka does not auto-split partitions based on heat.
- **B:** Within one consumer group, a partition is owned by at most one consumer at a time.
- **C:** Followers replicate; they do not become concurrent leaders for the same partition.

---

### Q918 — Expert

This comes up in an incident channel and the team wants a decision, not a textbook definition. One Kafka partition receives 70% of the traffic because most events share the same message key. What is the consequence? What would you choose as the most technically sound next step?

- A. Consumers can process one partition concurrently across many group members.
- B. Replication factor redistributes the key across multiple leaders for parallel writes.
- C. That partition becomes a throughput ceiling even if other partitions and brokers have spare capacity.
- D. Kafka will automatically split the hot partition into smaller partitions.

**Answer: C**

**Explanation:** Ordering by key maps related records to one partition. A skewed key can concentrate work and limit parallelism.

**Why the other options miss the mark:**
- **A:** Within one consumer group, a partition is owned by at most one consumer at a time.
- **B:** Followers replicate; they do not become concurrent leaders for the same partition.
- **D:** Kafka does not auto-split partitions based on heat.

---

### Q919 — Advanced

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. One Kafka partition receives 70% of the traffic because most events share the same message key. What is the consequence? Which answer best matches how you would handle this on a real system?

- A. Replication factor redistributes the key across multiple leaders for parallel writes.
- B. That partition becomes a throughput ceiling even if other partitions and brokers have spare capacity.
- C. Kafka will automatically split the hot partition into smaller partitions.
- D. Consumers can process one partition concurrently across many group members.

**Answer: B**

**Explanation:** Ordering by key maps related records to one partition. A skewed key can concentrate work and limit parallelism.

**Why the other options miss the mark:**
- **A:** Followers replicate; they do not become concurrent leaders for the same partition.
- **C:** Kafka does not auto-split partitions based on heat.
- **D:** Within one consumer group, a partition is owned by at most one consumer at a time.

---

### Q920 — Expert

You're reviewing this during a production change window. A producer retries after a network timeout and the team wants to avoid duplicate writes caused by ambiguous acknowledgements. Which Kafka producer capability directly helps? Pick the option you'd be willing to defend in a production review.

- A. Disable acknowledgements so the producer never waits.
- B. Use a new random topic for every retry.
- C. Enable idempotent production with appropriate acknowledgements so retry sequencing is deduplicated per producer session.
- D. Set retention.ms to zero.

**Answer: C**

**Explanation:** Idempotent producers attach sequence information that lets brokers reject duplicate retry writes under supported conditions.

**Why the other options miss the mark:**
- **A:** No acknowledgements increases uncertainty and data-loss risk.
- **B:** Changing topics breaks the stream model and does not provide deduplication.
- **D:** Retention is unrelated to duplicate retry semantics.

---

### Q921 — Advanced

This comes up in an incident channel and the team wants a decision, not a textbook definition. A producer retries after a network timeout and the team wants to avoid duplicate writes caused by ambiguous acknowledgements. Which Kafka producer capability directly helps? What would you choose as the most technically sound next step?

- A. Use a new random topic for every retry.
- B. Enable idempotent production with appropriate acknowledgements so retry sequencing is deduplicated per producer session.
- C. Set retention.ms to zero.
- D. Disable acknowledgements so the producer never waits.

**Answer: B**

**Explanation:** Idempotent producers attach sequence information that lets brokers reject duplicate retry writes under supported conditions.

**Why the other options miss the mark:**
- **A:** Changing topics breaks the stream model and does not provide deduplication.
- **C:** Retention is unrelated to duplicate retry semantics.
- **D:** No acknowledgements increases uncertainty and data-loss risk.

---

### Q922 — Advanced

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. A producer retries after a network timeout and the team wants to avoid duplicate writes caused by ambiguous acknowledgements. Which Kafka producer capability directly helps? Which answer best matches how you would handle this on a real system?

- A. Enable idempotent production with appropriate acknowledgements so retry sequencing is deduplicated per producer session.
- B. Set retention.ms to zero.
- C. Disable acknowledgements so the producer never waits.
- D. Use a new random topic for every retry.

**Answer: A**

**Explanation:** Idempotent producers attach sequence information that lets brokers reject duplicate retry writes under supported conditions.

**Why the other options miss the mark:**
- **B:** Retention is unrelated to duplicate retry semantics.
- **C:** No acknowledgements increases uncertainty and data-loss risk.
- **D:** Changing topics breaks the stream model and does not provide deduplication.

---

### Q923 — Advanced

You're reviewing this during a production change window. A broker becomes slow and several partitions shrink their in-sync replica set. Why does that matter operationally? Pick the option you'd be willing to defend in a production review.

- A. Kafka automatically reduces replication factor permanently.
- B. Durability headroom is reduced, and with strict min.insync.replicas new writes may be rejected until enough replicas catch up.
- C. Consumer offsets are erased whenever ISR shrinks.
- D. The partition leader always moves to every remaining follower simultaneously.

**Answer: B**

**Explanation:** ISR represents replicas sufficiently caught up to participate safely in acknowledged writes. Shrinkage is a resiliency warning and can affect availability.

**Why the other options miss the mark:**
- **A:** Replication factor does not automatically rewrite itself downward.
- **C:** Offsets live in Kafka topics and are not erased simply because ISR changes.
- **D:** A partition has one leader at a time.

---

### Q924 — Advanced

This comes up in an incident channel and the team wants a decision, not a textbook definition. A broker becomes slow and several partitions shrink their in-sync replica set. Why does that matter operationally? What would you choose as the most technically sound next step?

- A. Durability headroom is reduced, and with strict min.insync.replicas new writes may be rejected until enough replicas catch up.
- B. Consumer offsets are erased whenever ISR shrinks.
- C. The partition leader always moves to every remaining follower simultaneously.
- D. Kafka automatically reduces replication factor permanently.

**Answer: A**

**Explanation:** ISR represents replicas sufficiently caught up to participate safely in acknowledged writes. Shrinkage is a resiliency warning and can affect availability.

**Why the other options miss the mark:**
- **B:** Offsets live in Kafka topics and are not erased simply because ISR changes.
- **C:** A partition has one leader at a time.
- **D:** Replication factor does not automatically rewrite itself downward.

---

### Q925 — Expert

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. A broker becomes slow and several partitions shrink their in-sync replica set. Why does that matter operationally? Which answer best matches how you would handle this on a real system?

- A. Consumer offsets are erased whenever ISR shrinks.
- B. The partition leader always moves to every remaining follower simultaneously.
- C. Kafka automatically reduces replication factor permanently.
- D. Durability headroom is reduced, and with strict min.insync.replicas new writes may be rejected until enough replicas catch up.

**Answer: D**

**Explanation:** ISR represents replicas sufficiently caught up to participate safely in acknowledged writes. Shrinkage is a resiliency warning and can affect availability.

**Why the other options miss the mark:**
- **A:** Offsets live in Kafka topics and are not erased simply because ISR changes.
- **B:** A partition has one leader at a time.
- **C:** Replication factor does not automatically rewrite itself downward.

---

### Q926 — Advanced

You're reviewing this during a production change window. A topic has replication factor 3, min.insync.replicas 2, and producers use acks=all. Only one in-sync replica remains. What should happen to new writes? Pick the option you'd be willing to defend in a production review.

- A. They should fail rather than be acknowledged with insufficient in-sync durability.
- B. They are acknowledged because one leader is always enough for acks=all.
- C. Kafka silently changes min.insync.replicas to 1.
- D. The producer switches to reading from the follower until another replica returns.

**Answer: A**

**Explanation:** acks=all together with min.insync.replicas enforces a minimum number of in-sync copies for successful writes.

**Why the other options miss the mark:**
- **B:** acks=all respects min.insync.replicas.
- **C:** Kafka does not silently weaken the configured durability policy.
- **D:** Producers write to leaders; follower reads do not solve write durability.

---

### Q927 — Expert

This comes up in an incident channel and the team wants a decision, not a textbook definition. A topic has replication factor 3, min.insync.replicas 2, and producers use acks=all. Only one in-sync replica remains. What should happen to new writes? What would you choose as the most technically sound next step?

- A. They are acknowledged because one leader is always enough for acks=all.
- B. Kafka silently changes min.insync.replicas to 1.
- C. The producer switches to reading from the follower until another replica returns.
- D. They should fail rather than be acknowledged with insufficient in-sync durability.

**Answer: D**

**Explanation:** acks=all together with min.insync.replicas enforces a minimum number of in-sync copies for successful writes.

**Why the other options miss the mark:**
- **A:** acks=all respects min.insync.replicas.
- **B:** Kafka does not silently weaken the configured durability policy.
- **C:** Producers write to leaders; follower reads do not solve write durability.

---

### Q928 — Advanced

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. A topic has replication factor 3, min.insync.replicas 2, and producers use acks=all. Only one in-sync replica remains. What should happen to new writes? Which answer best matches how you would handle this on a real system?

- A. Kafka silently changes min.insync.replicas to 1.
- B. The producer switches to reading from the follower until another replica returns.
- C. They should fail rather than be acknowledged with insufficient in-sync durability.
- D. They are acknowledged because one leader is always enough for acks=all.

**Answer: C**

**Explanation:** acks=all together with min.insync.replicas enforces a minimum number of in-sync copies for successful writes.

**Why the other options miss the mark:**
- **A:** Kafka does not silently weaken the configured durability policy.
- **B:** Producers write to leaders; follower reads do not solve write durability.
- **D:** acks=all respects min.insync.replicas.

---

### Q929 — Expert

You're reviewing this during a production change window. A consumer commits an offset before the corresponding database transaction completes, then crashes. What failure mode can result? Pick the option you'd be willing to defend in a production review.

- A. The message will always be delivered twice instead.
- B. Kafka rolls back the committed offset automatically when the database fails.
- C. The broker deletes the entire partition because the consumer crashed mid-message.
- D. The message can be skipped after restart even though its side effect never completed.

**Answer: D**

**Explanation:** Committing first tells Kafka the record is done. If the external side effect fails afterward, restart can resume beyond that record.

**Why the other options miss the mark:**
- **A:** Duplicate processing is more associated with completing side effects before committing.
- **B:** Kafka has no automatic transaction with an arbitrary external database.
- **C:** Consumer crashes do not delete partitions.

---

### Q930 — Advanced

This comes up in an incident channel and the team wants a decision, not a textbook definition. A consumer commits an offset before the corresponding database transaction completes, then crashes. What failure mode can result? What would you choose as the most technically sound next step?

- A. Kafka rolls back the committed offset automatically when the database fails.
- B. The broker deletes the entire partition because the consumer crashed mid-message.
- C. The message can be skipped after restart even though its side effect never completed.
- D. The message will always be delivered twice instead.

**Answer: C**

**Explanation:** Committing first tells Kafka the record is done. If the external side effect fails afterward, restart can resume beyond that record.

**Why the other options miss the mark:**
- **A:** Kafka has no automatic transaction with an arbitrary external database.
- **B:** Consumer crashes do not delete partitions.
- **D:** Duplicate processing is more associated with completing side effects before committing.

---

### Q931 — Advanced

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. A consumer commits an offset before the corresponding database transaction completes, then crashes. What failure mode can result? Which answer best matches how you would handle this on a real system?

- A. The broker deletes the entire partition because the consumer crashed mid-message.
- B. The message can be skipped after restart even though its side effect never completed.
- C. The message will always be delivered twice instead.
- D. Kafka rolls back the committed offset automatically when the database fails.

**Answer: B**

**Explanation:** Committing first tells Kafka the record is done. If the external side effect fails afterward, restart can resume beyond that record.

**Why the other options miss the mark:**
- **A:** Consumer crashes do not delete partitions.
- **C:** Duplicate processing is more associated with completing side effects before committing.
- **D:** Kafka has no automatic transaction with an arbitrary external database.

---

### Q932 — Advanced

You're reviewing this during a production change window. Events for the same customer must be processed in order, while different customers should scale independently. What partitioning strategy fits? Pick the option you'd be willing to defend in a production review.

- A. Create one Kafka topic per individual customer.
- B. Increase replication factor until brokers infer customer ordering.
- C. Use a stable customer identifier as the record key so each customer maps consistently to one partition.
- D. Send every event with a null key and rely on round-robin partitioning.

**Answer: C**

**Explanation:** Kafka preserves order within a partition. A stable business key gives per-customer ordering while allowing different keys to spread across partitions.

**Why the other options miss the mark:**
- **A:** One topic per customer is operationally unmanageable at scale.
- **B:** Replication is for durability, not business-key ordering.
- **D:** Round-robin can send related events to different partitions.

---

### Q933 — Advanced

This comes up in an incident channel and the team wants a decision, not a textbook definition. Events for the same customer must be processed in order, while different customers should scale independently. What partitioning strategy fits? What would you choose as the most technically sound next step?

- A. Increase replication factor until brokers infer customer ordering.
- B. Use a stable customer identifier as the record key so each customer maps consistently to one partition.
- C. Send every event with a null key and rely on round-robin partitioning.
- D. Create one Kafka topic per individual customer.

**Answer: B**

**Explanation:** Kafka preserves order within a partition. A stable business key gives per-customer ordering while allowing different keys to spread across partitions.

**Why the other options miss the mark:**
- **A:** Replication is for durability, not business-key ordering.
- **C:** Round-robin can send related events to different partitions.
- **D:** One topic per customer is operationally unmanageable at scale.

---

### Q934 — Expert

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. Events for the same customer must be processed in order, while different customers should scale independently. What partitioning strategy fits? Which answer best matches how you would handle this on a real system?

- A. Use a stable customer identifier as the record key so each customer maps consistently to one partition.
- B. Send every event with a null key and rely on round-robin partitioning.
- C. Create one Kafka topic per individual customer.
- D. Increase replication factor until brokers infer customer ordering.

**Answer: A**

**Explanation:** Kafka preserves order within a partition. A stable business key gives per-customer ordering while allowing different keys to spread across partitions.

**Why the other options miss the mark:**
- **B:** Round-robin can send related events to different partitions.
- **C:** One topic per customer is operationally unmanageable at scale.
- **D:** Replication is for durability, not business-key ordering.

---

### Q935 — Advanced

You're reviewing this during a production change window. A topic is intended to hold the latest value for each configuration key so new consumers can rebuild current state. Which retention model fits best? Pick the option you'd be willing to defend in a production review.

- A. A larger replication factor instead of compaction.
- B. Log compaction, because it preserves the latest record per key over time.
- C. Delete retention with a five-minute window only.
- D. No retention at all, because consumers can ask producers for old values.

**Answer: B**

**Explanation:** Compaction is designed for changelog/state topics where the latest value per key matters more than retaining every historical event forever.

**Why the other options miss the mark:**
- **A:** Replication affects durability, not semantic retention.
- **C:** Time-based deletion can remove the only current value before a rebuild.
- **D:** Kafka consumers rebuild from the log; producers are not an implicit history service.

---

### Q936 — Expert

This comes up in an incident channel and the team wants a decision, not a textbook definition. A topic is intended to hold the latest value for each configuration key so new consumers can rebuild current state. Which retention model fits best? What would you choose as the most technically sound next step?

- A. Log compaction, because it preserves the latest record per key over time.
- B. Delete retention with a five-minute window only.
- C. No retention at all, because consumers can ask producers for old values.
- D. A larger replication factor instead of compaction.

**Answer: A**

**Explanation:** Compaction is designed for changelog/state topics where the latest value per key matters more than retaining every historical event forever.

**Why the other options miss the mark:**
- **B:** Time-based deletion can remove the only current value before a rebuild.
- **C:** Kafka consumers rebuild from the log; producers are not an implicit history service.
- **D:** Replication affects durability, not semantic retention.

---

### Q937 — Advanced

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. A topic is intended to hold the latest value for each configuration key so new consumers can rebuild current state. Which retention model fits best? Which answer best matches how you would handle this on a real system?

- A. Delete retention with a five-minute window only.
- B. No retention at all, because consumers can ask producers for old values.
- C. A larger replication factor instead of compaction.
- D. Log compaction, because it preserves the latest record per key over time.

**Answer: D**

**Explanation:** Compaction is designed for changelog/state topics where the latest value per key matters more than retaining every historical event forever.

**Why the other options miss the mark:**
- **A:** Time-based deletion can remove the only current value before a rebuild.
- **B:** Kafka consumers rebuild from the log; producers are not an implicit history service.
- **C:** Replication affects durability, not semantic retention.

---

### Q938 — Expert

You're reviewing this during a production change window. Broker disks are saturated and produce latency is climbing while replication traffic also spikes. What should you avoid doing blindly? Pick the option you'd be willing to defend in a production review.

- A. Adding aggressive retries everywhere, because they can increase broker work while storage is already saturated.
- B. Checking partition placement and disk throughput.
- C. Reducing a hot producer's rate temporarily.
- D. Moving partitions carefully to restore balance if capacity allows.

**Answer: A**

**Explanation:** When a constrained broker is already queueing I/O, retry amplification can worsen the saturation. Control load and fix the underlying capacity/placement issue.

**Why the other options miss the mark:**
- **B:** Checking placement is exactly the kind of evidence-driven step you want.
- **C:** Rate limiting can protect the system while recovering.
- **D:** Careful rebalancing can help if skew is the root cause and headroom exists.

---

### Q939 — Advanced

This comes up in an incident channel and the team wants a decision, not a textbook definition. Broker disks are saturated and produce latency is climbing while replication traffic also spikes. What should you avoid doing blindly? What would you choose as the most technically sound next step?

- A. Checking partition placement and disk throughput.
- B. Reducing a hot producer's rate temporarily.
- C. Moving partitions carefully to restore balance if capacity allows.
- D. Adding aggressive retries everywhere, because they can increase broker work while storage is already saturated.

**Answer: D**

**Explanation:** When a constrained broker is already queueing I/O, retry amplification can worsen the saturation. Control load and fix the underlying capacity/placement issue.

**Why the other options miss the mark:**
- **A:** Checking placement is exactly the kind of evidence-driven step you want.
- **B:** Rate limiting can protect the system while recovering.
- **C:** Careful rebalancing can help if skew is the root cause and headroom exists.

---

### Q940 — Advanced

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. Broker disks are saturated and produce latency is climbing while replication traffic also spikes. What should you avoid doing blindly? Which answer best matches how you would handle this on a real system?

- A. Reducing a hot producer's rate temporarily.
- B. Moving partitions carefully to restore balance if capacity allows.
- C. Adding aggressive retries everywhere, because they can increase broker work while storage is already saturated.
- D. Checking partition placement and disk throughput.

**Answer: C**

**Explanation:** When a constrained broker is already queueing I/O, retry amplification can worsen the saturation. Control load and fix the underlying capacity/placement issue.

**Why the other options miss the mark:**
- **A:** Rate limiting can protect the system while recovering.
- **B:** Careful rebalancing can help if skew is the root cause and headroom exists.
- **D:** Checking placement is exactly the kind of evidence-driven step you want.

---

## Performance Engineering

### Q941 — Expert

You're reviewing this during a production change window. Average latency stays at 80 ms, but p99 jumps from 300 ms to 4 seconds during peak traffic. Why is the average misleading? Pick the option you'd be willing to defend in a production review.

- A. Only throughput matters once average latency is stable.
- B. A small but important tail of requests is suffering severe latency, and the average hides that distribution.
- C. p99 is always exactly 99 times the average.
- D. The average proves no user request exceeded 80 ms.

**Answer: B**

**Explanation:** Percentiles expose tail behavior that averages smooth away. User experience and timeout cascades often live in the tail.

**Why the other options miss the mark:**
- **A:** Latency and throughput both matter, especially near saturation.
- **C:** Percentiles have no fixed multiple relationship to the mean.
- **D:** A mean does not bound individual observations.

---

### Q942 — Advanced

This comes up in an incident channel and the team wants a decision, not a textbook definition. Average latency stays at 80 ms, but p99 jumps from 300 ms to 4 seconds during peak traffic. Why is the average misleading? What would you choose as the most technically sound next step?

- A. A small but important tail of requests is suffering severe latency, and the average hides that distribution.
- B. p99 is always exactly 99 times the average.
- C. The average proves no user request exceeded 80 ms.
- D. Only throughput matters once average latency is stable.

**Answer: A**

**Explanation:** Percentiles expose tail behavior that averages smooth away. User experience and timeout cascades often live in the tail.

**Why the other options miss the mark:**
- **B:** Percentiles have no fixed multiple relationship to the mean.
- **C:** A mean does not bound individual observations.
- **D:** Latency and throughput both matter, especially near saturation.

---

### Q943 — Advanced

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. Average latency stays at 80 ms, but p99 jumps from 300 ms to 4 seconds during peak traffic. Why is the average misleading? Which answer best matches how you would handle this on a real system?

- A. p99 is always exactly 99 times the average.
- B. The average proves no user request exceeded 80 ms.
- C. Only throughput matters once average latency is stable.
- D. A small but important tail of requests is suffering severe latency, and the average hides that distribution.

**Answer: D**

**Explanation:** Percentiles expose tail behavior that averages smooth away. User experience and timeout cascades often live in the tail.

**Why the other options miss the mark:**
- **A:** Percentiles have no fixed multiple relationship to the mean.
- **B:** A mean does not bound individual observations.
- **C:** Latency and throughput both matter, especially near saturation.

---

### Q944 — Advanced

You're reviewing this during a production change window. A service completes 1,000 requests per second with an average end-to-end time of 200 ms under stable load. Roughly how many requests are in the system on average? Pick the option you'd be willing to defend in a production review.

- A. About 200 concurrent/in-flight requests, using Little's Law L = λW.
- B. About 5 requests.
- C. About 1,000 requests regardless of latency.
- D. About 5,000 requests.

**Answer: A**

**Explanation:** For a stable system, concurrency is approximately throughput multiplied by response time: 1000 × 0.2 = 200.

**Why the other options miss the mark:**
- **B:** 5 would correspond to a much lower product of rate and time.
- **C:** Throughput alone does not determine concurrency.
- **D:** 5,000 would imply about five seconds average residence time at that throughput.

---

### Q945 — Advanced

This comes up in an incident channel and the team wants a decision, not a textbook definition. A service completes 1,000 requests per second with an average end-to-end time of 200 ms under stable load. Roughly how many requests are in the system on average? What would you choose as the most technically sound next step?

- A. About 5 requests.
- B. About 1,000 requests regardless of latency.
- C. About 5,000 requests.
- D. About 200 concurrent/in-flight requests, using Little's Law L = λW.

**Answer: D**

**Explanation:** For a stable system, concurrency is approximately throughput multiplied by response time: 1000 × 0.2 = 200.

**Why the other options miss the mark:**
- **A:** 5 would correspond to a much lower product of rate and time.
- **B:** Throughput alone does not determine concurrency.
- **C:** 5,000 would imply about five seconds average residence time at that throughput.

---

### Q946 — Expert

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. A service completes 1,000 requests per second with an average end-to-end time of 200 ms under stable load. Roughly how many requests are in the system on average? Which answer best matches how you would handle this on a real system?

- A. About 1,000 requests regardless of latency.
- B. About 5,000 requests.
- C. About 200 concurrent/in-flight requests, using Little's Law L = λW.
- D. About 5 requests.

**Answer: C**

**Explanation:** For a stable system, concurrency is approximately throughput multiplied by response time: 1000 × 0.2 = 200.

**Why the other options miss the mark:**
- **A:** Throughput alone does not determine concurrency.
- **B:** 5,000 would imply about five seconds average residence time at that throughput.
- **D:** 5 would correspond to a much lower product of rate and time.

---

### Q947 — Advanced

You're reviewing this during a production change window. A load test sends the next request only after the previous one finishes. As the service slows, the tool generates fewer requests. What measurement problem can this create? Pick the option you'd be willing to defend in a production review.

- A. The test will always generate more traffic as the service slows.
- B. Closed-loop tests cannot measure latency at all.
- C. The only effect is a larger HTTP header size.
- D. A closed-loop test can hide overload because offered load falls when latency rises; an open workload model may better represent independent arrivals.

**Answer: D**

**Explanation:** When virtual users wait for responses, service slowdown throttles the generator. Real arrivals may not politely slow down the same way.

**Why the other options miss the mark:**
- **A:** The generator backs off, not speeds up.
- **B:** Closed tests do measure latency; the issue is arrival coupling.
- **C:** Header size is unrelated to the workload model.

---

### Q948 — Expert

This comes up in an incident channel and the team wants a decision, not a textbook definition. A load test sends the next request only after the previous one finishes. As the service slows, the tool generates fewer requests. What measurement problem can this create? What would you choose as the most technically sound next step?

- A. Closed-loop tests cannot measure latency at all.
- B. The only effect is a larger HTTP header size.
- C. A closed-loop test can hide overload because offered load falls when latency rises; an open workload model may better represent independent arrivals.
- D. The test will always generate more traffic as the service slows.

**Answer: C**

**Explanation:** When virtual users wait for responses, service slowdown throttles the generator. Real arrivals may not politely slow down the same way.

**Why the other options miss the mark:**
- **A:** Closed tests do measure latency; the issue is arrival coupling.
- **B:** Header size is unrelated to the workload model.
- **D:** The generator backs off, not speeds up.

---

### Q949 — Advanced

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. A load test sends the next request only after the previous one finishes. As the service slows, the tool generates fewer requests. What measurement problem can this create? Which answer best matches how you would handle this on a real system?

- A. The only effect is a larger HTTP header size.
- B. A closed-loop test can hide overload because offered load falls when latency rises; an open workload model may better represent independent arrivals.
- C. The test will always generate more traffic as the service slows.
- D. Closed-loop tests cannot measure latency at all.

**Answer: B**

**Explanation:** When virtual users wait for responses, service slowdown throttles the generator. Real arrivals may not politely slow down the same way.

**Why the other options miss the mark:**
- **A:** Header size is unrelated to the workload model.
- **C:** The generator backs off, not speeds up.
- **D:** Closed tests do measure latency; the issue is arrival coupling.

---

### Q950 — Expert

You're reviewing this during a production change window. A benchmark records latency only for requests it actually sends, but during long pauses the generator stops issuing scheduled requests. What can happen to the reported latency? Pick the option you'd be willing to defend in a production review.

- A. Throughput becomes mathematically independent of service time.
- B. The benchmark automatically converts the missing requests into errors.
- C. It can look better than users experienced because requests that should have arrived during the pause are omitted from the latency distribution.
- D. Latency will always be overestimated by exactly the pause duration.

**Answer: C**

**Explanation:** Coordinated omission hides queueing delay by coordinating request generation with service availability.

**Why the other options miss the mark:**
- **A:** Throughput still depends on the system and workload.
- **B:** Many tools do not invent omitted requests unless explicitly corrected.
- **D:** The bias is usually toward under-reporting tail latency, not a fixed overestimate.

---

### Q951 — Advanced

This comes up in an incident channel and the team wants a decision, not a textbook definition. A benchmark records latency only for requests it actually sends, but during long pauses the generator stops issuing scheduled requests. What can happen to the reported latency? What would you choose as the most technically sound next step?

- A. The benchmark automatically converts the missing requests into errors.
- B. It can look better than users experienced because requests that should have arrived during the pause are omitted from the latency distribution.
- C. Latency will always be overestimated by exactly the pause duration.
- D. Throughput becomes mathematically independent of service time.

**Answer: B**

**Explanation:** Coordinated omission hides queueing delay by coordinating request generation with service availability.

**Why the other options miss the mark:**
- **A:** Many tools do not invent omitted requests unless explicitly corrected.
- **C:** The bias is usually toward under-reporting tail latency, not a fixed overestimate.
- **D:** Throughput still depends on the system and workload.

---

### Q952 — Advanced

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. A benchmark records latency only for requests it actually sends, but during long pauses the generator stops issuing scheduled requests. What can happen to the reported latency? Which answer best matches how you would handle this on a real system?

- A. It can look better than users experienced because requests that should have arrived during the pause are omitted from the latency distribution.
- B. Latency will always be overestimated by exactly the pause duration.
- C. Throughput becomes mathematically independent of service time.
- D. The benchmark automatically converts the missing requests into errors.

**Answer: A**

**Explanation:** Coordinated omission hides queueing delay by coordinating request generation with service availability.

**Why the other options miss the mark:**
- **B:** The bias is usually toward under-reporting tail latency, not a fixed overestimate.
- **C:** Throughput still depends on the system and workload.
- **D:** Many tools do not invent omitted requests unless explicitly corrected.

---

### Q953 — Advanced

You're reviewing this during a production change window. The first minute of a Java service load test is much slower than the next twenty minutes because JIT compilation and caches are cold. How should you design the benchmark? Pick the option you'd be willing to defend in a production review.

- A. Average warm-up and steady state together without labeling them.
- B. Include a defined warm-up phase and report steady-state behavior separately from cold-start behavior.
- C. Discard any run that ever shows a slow request.
- D. Disable JIT in production so test and production match.

**Answer: B**

**Explanation:** Warm-up effects are real but answer a different question from steady-state capacity. Good tests make the phase explicit.

**Why the other options miss the mark:**
- **A:** Combining phases hides both cold-start and steady-state characteristics.
- **C:** Deleting inconvenient samples biases results.
- **D:** Changing production runtime semantics to simplify a test is usually the wrong trade-off.

---

### Q954 — Advanced

This comes up in an incident channel and the team wants a decision, not a textbook definition. The first minute of a Java service load test is much slower than the next twenty minutes because JIT compilation and caches are cold. How should you design the benchmark? What would you choose as the most technically sound next step?

- A. Include a defined warm-up phase and report steady-state behavior separately from cold-start behavior.
- B. Discard any run that ever shows a slow request.
- C. Disable JIT in production so test and production match.
- D. Average warm-up and steady state together without labeling them.

**Answer: A**

**Explanation:** Warm-up effects are real but answer a different question from steady-state capacity. Good tests make the phase explicit.

**Why the other options miss the mark:**
- **B:** Deleting inconvenient samples biases results.
- **C:** Changing production runtime semantics to simplify a test is usually the wrong trade-off.
- **D:** Combining phases hides both cold-start and steady-state characteristics.

---

### Q955 — Expert

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. The first minute of a Java service load test is much slower than the next twenty minutes because JIT compilation and caches are cold. How should you design the benchmark? Which answer best matches how you would handle this on a real system?

- A. Discard any run that ever shows a slow request.
- B. Disable JIT in production so test and production match.
- C. Average warm-up and steady state together without labeling them.
- D. Include a defined warm-up phase and report steady-state behavior separately from cold-start behavior.

**Answer: D**

**Explanation:** Warm-up effects are real but answer a different question from steady-state capacity. Good tests make the phase explicit.

**Why the other options miss the mark:**
- **A:** Deleting inconvenient samples biases results.
- **B:** Changing production runtime semantics to simplify a test is usually the wrong trade-off.
- **C:** Combining phases hides both cold-start and steady-state characteristics.

---

### Q956 — Advanced

You're reviewing this during a production change window. An application allows 2,000 request threads but its downstream database pool has only 50 connections. Under load, thousands of threads wait on the pool. What should you analyze? Pick the option you'd be willing to defend in a production review.

- A. End-to-end concurrency limits and queueing; simply increasing request threads can amplify waiting without increasing completed work.
- B. Set the request thread count even higher so waiting is distributed.
- C. Disable the database pool and open unlimited direct connections.
- D. Ignore the pool because only CPU utilization limits throughput.

**Answer: A**

**Explanation:** Throughput is constrained by the slowest bounded resource. Excess upstream concurrency often increases memory, context switching, and tail latency.

**Why the other options miss the mark:**
- **B:** More waiting threads do not create more database capacity.
- **C:** Unlimited direct connections can overwhelm the database.
- **D:** I/O and concurrency limits can bottleneck well below CPU saturation.

---

### Q957 — Expert

This comes up in an incident channel and the team wants a decision, not a textbook definition. An application allows 2,000 request threads but its downstream database pool has only 50 connections. Under load, thousands of threads wait on the pool. What should you analyze? What would you choose as the most technically sound next step?

- A. Set the request thread count even higher so waiting is distributed.
- B. Disable the database pool and open unlimited direct connections.
- C. Ignore the pool because only CPU utilization limits throughput.
- D. End-to-end concurrency limits and queueing; simply increasing request threads can amplify waiting without increasing completed work.

**Answer: D**

**Explanation:** Throughput is constrained by the slowest bounded resource. Excess upstream concurrency often increases memory, context switching, and tail latency.

**Why the other options miss the mark:**
- **A:** More waiting threads do not create more database capacity.
- **B:** Unlimited direct connections can overwhelm the database.
- **C:** I/O and concurrency limits can bottleneck well below CPU saturation.

---

### Q958 — Advanced

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. An application allows 2,000 request threads but its downstream database pool has only 50 connections. Under load, thousands of threads wait on the pool. What should you analyze? Which answer best matches how you would handle this on a real system?

- A. Disable the database pool and open unlimited direct connections.
- B. Ignore the pool because only CPU utilization limits throughput.
- C. End-to-end concurrency limits and queueing; simply increasing request threads can amplify waiting without increasing completed work.
- D. Set the request thread count even higher so waiting is distributed.

**Answer: C**

**Explanation:** Throughput is constrained by the slowest bounded resource. Excess upstream concurrency often increases memory, context switching, and tail latency.

**Why the other options miss the mark:**
- **A:** Unlimited direct connections can overwhelm the database.
- **B:** I/O and concurrency limits can bottleneck well below CPU saturation.
- **D:** More waiting threads do not create more database capacity.

---

### Q959 — Expert

You're reviewing this during a production change window. A JVM service shows periodic two-second latency spikes that line up with stop-the-world GC pauses while CPU otherwise looks normal. What should you investigate? Pick the option you'd be willing to defend in a production review.

- A. Increase HTTP retries so users do not notice the pauses.
- B. Assume the database is slow because the latency is measured end to end.
- C. Disable all garbage collection.
- D. Allocation rate, heap sizing, collector behavior, object lifetime, and GC logs rather than treating it as a network timeout first.

**Answer: D**

**Explanation:** Time correlation with GC pauses is strong evidence. The fix depends on why the collector needs long pauses, not on hiding them with retries.

**Why the other options miss the mark:**
- **A:** Retries during a paused process can increase work after it resumes.
- **B:** End-to-end latency can originate inside the runtime.
- **C:** Managed heaps require garbage collection; disabling it is not a viable production fix.

---

### Q960 — Advanced

This comes up in an incident channel and the team wants a decision, not a textbook definition. A JVM service shows periodic two-second latency spikes that line up with stop-the-world GC pauses while CPU otherwise looks normal. What should you investigate? What would you choose as the most technically sound next step?

- A. Assume the database is slow because the latency is measured end to end.
- B. Disable all garbage collection.
- C. Allocation rate, heap sizing, collector behavior, object lifetime, and GC logs rather than treating it as a network timeout first.
- D. Increase HTTP retries so users do not notice the pauses.

**Answer: C**

**Explanation:** Time correlation with GC pauses is strong evidence. The fix depends on why the collector needs long pauses, not on hiding them with retries.

**Why the other options miss the mark:**
- **A:** End-to-end latency can originate inside the runtime.
- **B:** Managed heaps require garbage collection; disabling it is not a viable production fix.
- **D:** Retries during a paused process can increase work after it resumes.

---

### Q961 — Advanced

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. A JVM service shows periodic two-second latency spikes that line up with stop-the-world GC pauses while CPU otherwise looks normal. What should you investigate? Which answer best matches how you would handle this on a real system?

- A. Disable all garbage collection.
- B. Allocation rate, heap sizing, collector behavior, object lifetime, and GC logs rather than treating it as a network timeout first.
- C. Increase HTTP retries so users do not notice the pauses.
- D. Assume the database is slow because the latency is measured end to end.

**Answer: B**

**Explanation:** Time correlation with GC pauses is strong evidence. The fix depends on why the collector needs long pauses, not on hiding them with retries.

**Why the other options miss the mark:**
- **A:** Managed heaps require garbage collection; disabling it is not a viable production fix.
- **C:** Retries during a paused process can increase work after it resumes.
- **D:** End-to-end latency can originate inside the runtime.

---

### Q962 — Advanced

You're reviewing this during a production change window. A container uses 400 millicores on average but shows frequent CPU throttling because short bursts hit a 500m CPU limit. Why can latency still suffer? Pick the option you'd be willing to defend in a production review.

- A. Requests are throttled based on memory limits, not CPU limits.
- B. Average CPU below the limit guarantees no scheduling delays.
- C. CPU limits are enforced over scheduling periods, so bursty work can be throttled even when long-window average CPU looks modest.
- D. CPU throttling only happens after node CPU reaches 100%.

**Answer: C**

**Explanation:** Quota enforcement and workload burstiness matter. Averages can hide short periods where runnable work is denied CPU time.

**Why the other options miss the mark:**
- **A:** Memory limits govern memory, not CPU scheduling quota.
- **B:** Long-window averages do not describe short-window quota exhaustion.
- **D:** Cgroup CPU quota can throttle on an otherwise idle node.

---

### Q963 — Advanced

This comes up in an incident channel and the team wants a decision, not a textbook definition. A container uses 400 millicores on average but shows frequent CPU throttling because short bursts hit a 500m CPU limit. Why can latency still suffer? What would you choose as the most technically sound next step?

- A. Average CPU below the limit guarantees no scheduling delays.
- B. CPU limits are enforced over scheduling periods, so bursty work can be throttled even when long-window average CPU looks modest.
- C. CPU throttling only happens after node CPU reaches 100%.
- D. Requests are throttled based on memory limits, not CPU limits.

**Answer: B**

**Explanation:** Quota enforcement and workload burstiness matter. Averages can hide short periods where runnable work is denied CPU time.

**Why the other options miss the mark:**
- **A:** Long-window averages do not describe short-window quota exhaustion.
- **C:** Cgroup CPU quota can throttle on an otherwise idle node.
- **D:** Memory limits govern memory, not CPU scheduling quota.

---

### Q964 — Expert

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. A container uses 400 millicores on average but shows frequent CPU throttling because short bursts hit a 500m CPU limit. Why can latency still suffer? Which answer best matches how you would handle this on a real system?

- A. CPU limits are enforced over scheduling periods, so bursty work can be throttled even when long-window average CPU looks modest.
- B. CPU throttling only happens after node CPU reaches 100%.
- C. Requests are throttled based on memory limits, not CPU limits.
- D. Average CPU below the limit guarantees no scheduling delays.

**Answer: A**

**Explanation:** Quota enforcement and workload burstiness matter. Averages can hide short periods where runnable work is denied CPU time.

**Why the other options miss the mark:**
- **B:** Cgroup CPU quota can throttle on an otherwise idle node.
- **C:** Memory limits govern memory, not CPU scheduling quota.
- **D:** Long-window averages do not describe short-window quota exhaustion.

---

### Q965 — Advanced

You're reviewing this during a production change window. An API thread spends most of its response time waiting on storage reads. CPU remains low and adding cores has no effect. What resource is saturated from the application's perspective? Pick the option you'd be willing to defend in a production review.

- A. The application needs a higher CPU clock before any storage investigation.
- B. The I/O path or its latency/queueing, not CPU compute capacity.
- C. The process must be single-threaded.
- D. The network MTU is definitely wrong.

**Answer: B**

**Explanation:** Low CPU with blocked I/O points to wait time outside the CPU. Measure device latency, queue depth, filesystem, and upstream storage behavior.

**Why the other options miss the mark:**
- **A:** More compute cannot make a blocked storage operation complete.
- **C:** Threading alone does not remove storage service time.
- **D:** MTU issues have different evidence and are not implied here.

---

### Q966 — Expert

This comes up in an incident channel and the team wants a decision, not a textbook definition. An API thread spends most of its response time waiting on storage reads. CPU remains low and adding cores has no effect. What resource is saturated from the application's perspective? What would you choose as the most technically sound next step?

- A. The I/O path or its latency/queueing, not CPU compute capacity.
- B. The process must be single-threaded.
- C. The network MTU is definitely wrong.
- D. The application needs a higher CPU clock before any storage investigation.

**Answer: A**

**Explanation:** Low CPU with blocked I/O points to wait time outside the CPU. Measure device latency, queue depth, filesystem, and upstream storage behavior.

**Why the other options miss the mark:**
- **B:** Threading alone does not remove storage service time.
- **C:** MTU issues have different evidence and are not implied here.
- **D:** More compute cannot make a blocked storage operation complete.

---

### Q967 — Advanced

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. An API thread spends most of its response time waiting on storage reads. CPU remains low and adding cores has no effect. What resource is saturated from the application's perspective? Which answer best matches how you would handle this on a real system?

- A. The process must be single-threaded.
- B. The network MTU is definitely wrong.
- C. The application needs a higher CPU clock before any storage investigation.
- D. The I/O path or its latency/queueing, not CPU compute capacity.

**Answer: D**

**Explanation:** Low CPU with blocked I/O points to wait time outside the CPU. Measure device latency, queue depth, filesystem, and upstream storage behavior.

**Why the other options miss the mark:**
- **A:** Threading alone does not remove storage service time.
- **B:** MTU issues have different evidence and are not implied here.
- **C:** More compute cannot make a blocked storage operation complete.

---

### Q968 — Expert

You're reviewing this during a production change window. A service spends 15% of request time in a strictly serial section that cannot be parallelized. The team expects unlimited scaling by adding workers. What does Amdahl's Law warn? Pick the option you'd be willing to defend in a production review.

- A. The serial fraction places a ceiling on speedup, so parallel capacity alone cannot produce unlimited improvement.
- B. Any parallel section guarantees linear scaling forever.
- C. The serial section becomes faster automatically as worker count rises.
- D. Amdahl's Law applies only to storage systems.

**Answer: A**

**Explanation:** Parallel speedup is bounded by the portion of work that must remain serial. At enough workers, that fraction dominates.

**Why the other options miss the mark:**
- **B:** Contention and serial work prevent indefinite linear scaling.
- **C:** Adding workers does not inherently shorten serial execution.
- **D:** The principle applies broadly to parallel systems.

---

### Q969 — Advanced

This comes up in an incident channel and the team wants a decision, not a textbook definition. A service spends 15% of request time in a strictly serial section that cannot be parallelized. The team expects unlimited scaling by adding workers. What does Amdahl's Law warn? What would you choose as the most technically sound next step?

- A. Any parallel section guarantees linear scaling forever.
- B. The serial section becomes faster automatically as worker count rises.
- C. Amdahl's Law applies only to storage systems.
- D. The serial fraction places a ceiling on speedup, so parallel capacity alone cannot produce unlimited improvement.

**Answer: D**

**Explanation:** Parallel speedup is bounded by the portion of work that must remain serial. At enough workers, that fraction dominates.

**Why the other options miss the mark:**
- **A:** Contention and serial work prevent indefinite linear scaling.
- **B:** Adding workers does not inherently shorten serial execution.
- **C:** The principle applies broadly to parallel systems.

---

### Q970 — Advanced

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. A service spends 15% of request time in a strictly serial section that cannot be parallelized. The team expects unlimited scaling by adding workers. What does Amdahl's Law warn? Which answer best matches how you would handle this on a real system?

- A. The serial section becomes faster automatically as worker count rises.
- B. Amdahl's Law applies only to storage systems.
- C. The serial fraction places a ceiling on speedup, so parallel capacity alone cannot produce unlimited improvement.
- D. Any parallel section guarantees linear scaling forever.

**Answer: C**

**Explanation:** Parallel speedup is bounded by the portion of work that must remain serial. At enough workers, that fraction dominates.

**Why the other options miss the mark:**
- **A:** Adding workers does not inherently shorten serial execution.
- **B:** The principle applies broadly to parallel systems.
- **D:** Contention and serial work prevent indefinite linear scaling.

---

## Redis

### Q971 — Expert

You're reviewing this during a production change window. A Redis cache reaches maxmemory and starts returning OOM errors instead of evicting old cache entries. What should you inspect first? Pick the option you'd be willing to defend in a production review.

- A. The Linux swappiness value only.
- B. The TCP keepalive setting on clients.
- C. The RDB filename, because snapshot names control eviction.
- D. The configured maxmemory-policy and whether the workload is actually intended to allow eviction.

**Answer: D**

**Explanation:** At maxmemory, Redis behavior is governed by the eviction policy. noeviction is valid for some data models but surprising for a cache.

**Why the other options miss the mark:**
- **A:** Swappiness may affect host behavior but does not choose Redis key eviction.
- **B:** Keepalive is unrelated to memory-policy decisions.
- **C:** Snapshot file names do not control in-memory eviction.

---

### Q972 — Advanced

This comes up in an incident channel and the team wants a decision, not a textbook definition. A Redis cache reaches maxmemory and starts returning OOM errors instead of evicting old cache entries. What should you inspect first? What would you choose as the most technically sound next step?

- A. The TCP keepalive setting on clients.
- B. The RDB filename, because snapshot names control eviction.
- C. The configured maxmemory-policy and whether the workload is actually intended to allow eviction.
- D. The Linux swappiness value only.

**Answer: C**

**Explanation:** At maxmemory, Redis behavior is governed by the eviction policy. noeviction is valid for some data models but surprising for a cache.

**Why the other options miss the mark:**
- **A:** Keepalive is unrelated to memory-policy decisions.
- **B:** Snapshot file names do not control in-memory eviction.
- **D:** Swappiness may affect host behavior but does not choose Redis key eviction.

---

### Q973 — Advanced

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. A Redis cache reaches maxmemory and starts returning OOM errors instead of evicting old cache entries. What should you inspect first? Which answer best matches how you would handle this on a real system?

- A. The RDB filename, because snapshot names control eviction.
- B. The configured maxmemory-policy and whether the workload is actually intended to allow eviction.
- C. The Linux swappiness value only.
- D. The TCP keepalive setting on clients.

**Answer: B**

**Explanation:** At maxmemory, Redis behavior is governed by the eviction policy. noeviction is valid for some data models but surprising for a cache.

**Why the other options miss the mark:**
- **A:** Snapshot file names do not control in-memory eviction.
- **C:** Swappiness may affect host behavior but does not choose Redis key eviction.
- **D:** Keepalive is unrelated to memory-policy decisions.

---

### Q974 — Advanced

You're reviewing this during a production change window. Latency spikes appear whenever a job deletes a single multi-million-element Redis key. What is a likely cause? Pick the option you'd be willing to defend in a production review.

- A. The key is too small to fit in one TCP packet, which is the main issue.
- B. Replication factor is too high even on a standalone instance.
- C. Operations on very large keys can monopolize the single event loop or trigger expensive memory work, so the data model and deletion method need attention.
- D. Redis automatically parallelizes every key operation across all CPU cores.

**Answer: C**

**Explanation:** Big keys make otherwise simple commands expensive. Incremental/unlink-style deletion and a better key model reduce blocking work.

**Why the other options miss the mark:**
- **A:** Packet size is not the primary complexity of deleting millions of elements.
- **B:** Standalone Redis has no replication-factor setting like Kafka.
- **D:** Redis command execution is largely serialized per shard/event loop.

---

### Q975 — Advanced

This comes up in an incident channel and the team wants a decision, not a textbook definition. Latency spikes appear whenever a job deletes a single multi-million-element Redis key. What is a likely cause? What would you choose as the most technically sound next step?

- A. Replication factor is too high even on a standalone instance.
- B. Operations on very large keys can monopolize the single event loop or trigger expensive memory work, so the data model and deletion method need attention.
- C. Redis automatically parallelizes every key operation across all CPU cores.
- D. The key is too small to fit in one TCP packet, which is the main issue.

**Answer: B**

**Explanation:** Big keys make otherwise simple commands expensive. Incremental/unlink-style deletion and a better key model reduce blocking work.

**Why the other options miss the mark:**
- **A:** Standalone Redis has no replication-factor setting like Kafka.
- **C:** Redis command execution is largely serialized per shard/event loop.
- **D:** Packet size is not the primary complexity of deleting millions of elements.

---

### Q976 — Expert

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. Latency spikes appear whenever a job deletes a single multi-million-element Redis key. What is a likely cause? Which answer best matches how you would handle this on a real system?

- A. Operations on very large keys can monopolize the single event loop or trigger expensive memory work, so the data model and deletion method need attention.
- B. Redis automatically parallelizes every key operation across all CPU cores.
- C. The key is too small to fit in one TCP packet, which is the main issue.
- D. Replication factor is too high even on a standalone instance.

**Answer: A**

**Explanation:** Big keys make otherwise simple commands expensive. Incremental/unlink-style deletion and a better key model reduce blocking work.

**Why the other options miss the mark:**
- **B:** Redis command execution is largely serialized per shard/event loop.
- **C:** Packet size is not the primary complexity of deleting millions of elements.
- **D:** Standalone Redis has no replication-factor setting like Kafka.

---

### Q977 — Advanced

You're reviewing this during a production change window. One product ID receives most of the reads and saturates a single Redis Cluster shard while other shards are quiet. What is the underlying limitation? Pick the option you'd be willing to defend in a production review.

- A. Increasing the database number spreads the same key across cluster shards.
- B. Hash-slot distribution cannot help when one hot key itself carries the load; the application may need key splitting, local caching, or another design.
- C. Adding more empty shards automatically splits the value of that key.
- D. Changing the eviction policy redistributes that key across nodes.

**Answer: B**

**Explanation:** Cluster sharding distributes keys, not the traffic within one key. A single hot key remains owned by one primary shard.

**Why the other options miss the mark:**
- **A:** Redis Cluster effectively uses database 0; DB numbers are not a sharding technique.
- **C:** More shards do not divide one key automatically.
- **D:** Eviction affects memory pressure, not slot ownership.

---

### Q978 — Expert

This comes up in an incident channel and the team wants a decision, not a textbook definition. One product ID receives most of the reads and saturates a single Redis Cluster shard while other shards are quiet. What is the underlying limitation? What would you choose as the most technically sound next step?

- A. Hash-slot distribution cannot help when one hot key itself carries the load; the application may need key splitting, local caching, or another design.
- B. Adding more empty shards automatically splits the value of that key.
- C. Changing the eviction policy redistributes that key across nodes.
- D. Increasing the database number spreads the same key across cluster shards.

**Answer: A**

**Explanation:** Cluster sharding distributes keys, not the traffic within one key. A single hot key remains owned by one primary shard.

**Why the other options miss the mark:**
- **B:** More shards do not divide one key automatically.
- **C:** Eviction affects memory pressure, not slot ownership.
- **D:** Redis Cluster effectively uses database 0; DB numbers are not a sharding technique.

---

### Q979 — Advanced

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. One product ID receives most of the reads and saturates a single Redis Cluster shard while other shards are quiet. What is the underlying limitation? Which answer best matches how you would handle this on a real system?

- A. Adding more empty shards automatically splits the value of that key.
- B. Changing the eviction policy redistributes that key across nodes.
- C. Increasing the database number spreads the same key across cluster shards.
- D. Hash-slot distribution cannot help when one hot key itself carries the load; the application may need key splitting, local caching, or another design.

**Answer: D**

**Explanation:** Cluster sharding distributes keys, not the traffic within one key. A single hot key remains owned by one primary shard.

**Why the other options miss the mark:**
- **A:** More shards do not divide one key automatically.
- **B:** Eviction affects memory pressure, not slot ownership.
- **C:** Redis Cluster effectively uses database 0; DB numbers are not a sharding technique.

---

### Q980 — Expert

You're reviewing this during a production change window. A cache can be rebuilt from the database, but the team has enabled aggressive AOF fsync and is paying a noticeable latency cost. What question should drive the persistence choice? Pick the option you'd be willing to defend in a production review.

- A. How much Redis data loss is actually acceptable versus the recovery cost, given that this dataset is reconstructable.
- B. Whether the application uses JSON or strings.
- C. Whether clients connect over IPv4 or IPv6.
- D. Whether the cache keys are alphabetically sorted.

**Answer: A**

**Explanation:** Persistence is a durability/latency trade-off. A disposable cache may not need the same persistence guarantees as a system-of-record workload.

**Why the other options miss the mark:**
- **B:** Data serialization format does not define durability requirements.
- **C:** IP version is unrelated to persistence semantics.
- **D:** Key sort order does not determine fsync strategy.

---

### Q981 — Advanced

This comes up in an incident channel and the team wants a decision, not a textbook definition. A cache can be rebuilt from the database, but the team has enabled aggressive AOF fsync and is paying a noticeable latency cost. What question should drive the persistence choice? What would you choose as the most technically sound next step?

- A. Whether the application uses JSON or strings.
- B. Whether clients connect over IPv4 or IPv6.
- C. Whether the cache keys are alphabetically sorted.
- D. How much Redis data loss is actually acceptable versus the recovery cost, given that this dataset is reconstructable.

**Answer: D**

**Explanation:** Persistence is a durability/latency trade-off. A disposable cache may not need the same persistence guarantees as a system-of-record workload.

**Why the other options miss the mark:**
- **A:** Data serialization format does not define durability requirements.
- **B:** IP version is unrelated to persistence semantics.
- **C:** Key sort order does not determine fsync strategy.

---

### Q982 — Advanced

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. A cache can be rebuilt from the database, but the team has enabled aggressive AOF fsync and is paying a noticeable latency cost. What question should drive the persistence choice? Which answer best matches how you would handle this on a real system?

- A. Whether clients connect over IPv4 or IPv6.
- B. Whether the cache keys are alphabetically sorted.
- C. How much Redis data loss is actually acceptable versus the recovery cost, given that this dataset is reconstructable.
- D. Whether the application uses JSON or strings.

**Answer: C**

**Explanation:** Persistence is a durability/latency trade-off. A disposable cache may not need the same persistence guarantees as a system-of-record workload.

**Why the other options miss the mark:**
- **A:** IP version is unrelated to persistence semantics.
- **B:** Key sort order does not determine fsync strategy.
- **D:** Data serialization format does not define durability requirements.

---

### Q983 — Advanced

You're reviewing this during a production change window. A Redis replica falls several seconds behind the primary during a write burst, and read traffic is served from replicas. What user-visible risk exists? Pick the option you'd be willing to defend in a production review.

- A. The primary will block all writes until every replica has applied them.
- B. Redis automatically upgrades replica reads to linearizable reads.
- C. The replica will serve future values that have not reached the primary yet.
- D. Replica reads can return stale data until replication catches up.

**Answer: D**

**Explanation:** Redis replication is asynchronous by default. Reading from replicas trades some consistency for scale/availability.

**Why the other options miss the mark:**
- **A:** The primary does not normally wait for every replica on each write.
- **B:** Replica reads are not magically linearizable.
- **C:** A lagging replica cannot see writes that do not exist on the primary.

---

### Q984 — Advanced

This comes up in an incident channel and the team wants a decision, not a textbook definition. A Redis replica falls several seconds behind the primary during a write burst, and read traffic is served from replicas. What user-visible risk exists? What would you choose as the most technically sound next step?

- A. Redis automatically upgrades replica reads to linearizable reads.
- B. The replica will serve future values that have not reached the primary yet.
- C. Replica reads can return stale data until replication catches up.
- D. The primary will block all writes until every replica has applied them.

**Answer: C**

**Explanation:** Redis replication is asynchronous by default. Reading from replicas trades some consistency for scale/availability.

**Why the other options miss the mark:**
- **A:** Replica reads are not magically linearizable.
- **B:** A lagging replica cannot see writes that do not exist on the primary.
- **D:** The primary does not normally wait for every replica on each write.

---

### Q985 — Expert

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. A Redis replica falls several seconds behind the primary during a write burst, and read traffic is served from replicas. What user-visible risk exists? Which answer best matches how you would handle this on a real system?

- A. The replica will serve future values that have not reached the primary yet.
- B. Replica reads can return stale data until replication catches up.
- C. The primary will block all writes until every replica has applied them.
- D. Redis automatically upgrades replica reads to linearizable reads.

**Answer: B**

**Explanation:** Redis replication is asynchronous by default. Reading from replicas trades some consistency for scale/availability.

**Why the other options miss the mark:**
- **A:** A lagging replica cannot see writes that do not exist on the primary.
- **C:** The primary does not normally wait for every replica on each write.
- **D:** Replica reads are not magically linearizable.

---

### Q986 — Advanced

You're reviewing this during a production change window. An application uses Redis Cluster and a Lua script needs to atomically access several keys that hash to different slots. Why does it fail? Pick the option you'd be willing to defend in a production review.

- A. Atomic operations require all keys to have the same TTL.
- B. The cluster can only store one key per slot.
- C. Cluster multi-key operations generally require the involved keys to be in the same hash slot, often achieved with a shared hash tag.
- D. Lua scripts are disabled in Redis Cluster.

**Answer: C**

**Explanation:** A request is routed to one shard. Cross-slot atomic operations are not transparently coordinated across primaries.

**Why the other options miss the mark:**
- **A:** TTL equality is unrelated to slot routing.
- **B:** Each slot can contain many keys.
- **D:** Lua is supported with cluster constraints.

---

### Q987 — Expert

This comes up in an incident channel and the team wants a decision, not a textbook definition. An application uses Redis Cluster and a Lua script needs to atomically access several keys that hash to different slots. Why does it fail? What would you choose as the most technically sound next step?

- A. The cluster can only store one key per slot.
- B. Cluster multi-key operations generally require the involved keys to be in the same hash slot, often achieved with a shared hash tag.
- C. Lua scripts are disabled in Redis Cluster.
- D. Atomic operations require all keys to have the same TTL.

**Answer: B**

**Explanation:** A request is routed to one shard. Cross-slot atomic operations are not transparently coordinated across primaries.

**Why the other options miss the mark:**
- **A:** Each slot can contain many keys.
- **C:** Lua is supported with cluster constraints.
- **D:** TTL equality is unrelated to slot routing.

---

### Q988 — Advanced

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. An application uses Redis Cluster and a Lua script needs to atomically access several keys that hash to different slots. Why does it fail? Which answer best matches how you would handle this on a real system?

- A. Cluster multi-key operations generally require the involved keys to be in the same hash slot, often achieved with a shared hash tag.
- B. Lua scripts are disabled in Redis Cluster.
- C. Atomic operations require all keys to have the same TTL.
- D. The cluster can only store one key per slot.

**Answer: A**

**Explanation:** A request is routed to one shard. Cross-slot atomic operations are not transparently coordinated across primaries.

**Why the other options miss the mark:**
- **B:** Lua is supported with cluster constraints.
- **C:** TTL equality is unrelated to slot routing.
- **D:** Each slot can contain many keys.

---

### Q989 — Expert

You're reviewing this during a production change window. A production script runs KEYS * on a large Redis dataset during peak traffic and request latency jumps. What is the safer pattern? Pick the option you'd be willing to defend in a production review.

- A. Move the command into a MULTI transaction so it becomes non-blocking.
- B. Use incremental SCAN-style iteration and avoid expensive full-keyspace commands on the request path.
- C. Run KEYS twice so the result is cached.
- D. Increase client timeouts and keep using KEYS.

**Answer: B**

**Explanation:** KEYS can scan the full keyspace in one blocking operation. SCAN spreads work across iterations and is safer for operational tooling.

**Why the other options miss the mark:**
- **A:** Transactions serialize commands; they do not make an expensive command non-blocking.
- **C:** Repeating the command increases work.
- **D:** Longer timeouts hide the symptom but not the server pause.

---

### Q990 — Advanced

This comes up in an incident channel and the team wants a decision, not a textbook definition. A production script runs KEYS * on a large Redis dataset during peak traffic and request latency jumps. What is the safer pattern? What would you choose as the most technically sound next step?

- A. Use incremental SCAN-style iteration and avoid expensive full-keyspace commands on the request path.
- B. Run KEYS twice so the result is cached.
- C. Increase client timeouts and keep using KEYS.
- D. Move the command into a MULTI transaction so it becomes non-blocking.

**Answer: A**

**Explanation:** KEYS can scan the full keyspace in one blocking operation. SCAN spreads work across iterations and is safer for operational tooling.

**Why the other options miss the mark:**
- **B:** Repeating the command increases work.
- **C:** Longer timeouts hide the symptom but not the server pause.
- **D:** Transactions serialize commands; they do not make an expensive command non-blocking.

---

### Q991 — Advanced

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. A production script runs KEYS * on a large Redis dataset during peak traffic and request latency jumps. What is the safer pattern? Which answer best matches how you would handle this on a real system?

- A. Run KEYS twice so the result is cached.
- B. Increase client timeouts and keep using KEYS.
- C. Move the command into a MULTI transaction so it becomes non-blocking.
- D. Use incremental SCAN-style iteration and avoid expensive full-keyspace commands on the request path.

**Answer: D**

**Explanation:** KEYS can scan the full keyspace in one blocking operation. SCAN spreads work across iterations and is safer for operational tooling.

**Why the other options miss the mark:**
- **A:** Repeating the command increases work.
- **B:** Longer timeouts hide the symptom but not the server pause.
- **C:** Transactions serialize commands; they do not make an expensive command non-blocking.

---

### Q992 — Advanced

You're reviewing this during a production change window. Thousands of short-lived application requests each open a new Redis TCP/TLS connection, authenticate, issue one command, and disconnect. What improvement is most direct? Pick the option you'd be willing to defend in a production review.

- A. Use a bounded connection pool or persistent connections so setup overhead and connection churn are controlled.
- B. Disable authentication to make new connections cheaper.
- C. Increase maxclients indefinitely without changing client behavior.
- D. Run FLUSHALL periodically to reduce connection count.

**Answer: A**

**Explanation:** Connection establishment, TLS, and authentication have real cost. Reuse plus sensible pool limits improves latency and protects Redis.

**Why the other options miss the mark:**
- **B:** Removing authentication weakens security.
- **C:** Unlimited maxclients can move the failure into memory/file-descriptor exhaustion.
- **D:** FLUSHALL deletes data and has nothing to do with connection lifecycle.

---

### Q993 — Advanced

This comes up in an incident channel and the team wants a decision, not a textbook definition. Thousands of short-lived application requests each open a new Redis TCP/TLS connection, authenticate, issue one command, and disconnect. What improvement is most direct? What would you choose as the most technically sound next step?

- A. Disable authentication to make new connections cheaper.
- B. Increase maxclients indefinitely without changing client behavior.
- C. Run FLUSHALL periodically to reduce connection count.
- D. Use a bounded connection pool or persistent connections so setup overhead and connection churn are controlled.

**Answer: D**

**Explanation:** Connection establishment, TLS, and authentication have real cost. Reuse plus sensible pool limits improves latency and protects Redis.

**Why the other options miss the mark:**
- **A:** Removing authentication weakens security.
- **B:** Unlimited maxclients can move the failure into memory/file-descriptor exhaustion.
- **C:** FLUSHALL deletes data and has nothing to do with connection lifecycle.

---

### Q994 — Expert

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. Thousands of short-lived application requests each open a new Redis TCP/TLS connection, authenticate, issue one command, and disconnect. What improvement is most direct? Which answer best matches how you would handle this on a real system?

- A. Increase maxclients indefinitely without changing client behavior.
- B. Run FLUSHALL periodically to reduce connection count.
- C. Use a bounded connection pool or persistent connections so setup overhead and connection churn are controlled.
- D. Disable authentication to make new connections cheaper.

**Answer: C**

**Explanation:** Connection establishment, TLS, and authentication have real cost. Reuse plus sensible pool limits improves latency and protects Redis.

**Why the other options miss the mark:**
- **A:** Unlimited maxclients can move the failure into memory/file-descriptor exhaustion.
- **B:** FLUSHALL deletes data and has nothing to do with connection lifecycle.
- **D:** Removing authentication weakens security.

---

### Q995 — Advanced

You're reviewing this during a production change window. A Sentinel deployment uses too few independent voters and multiple instances share the same failure domain. What is the concern? Pick the option you'd be willing to defend in a production review.

- A. Sentinel quorum only affects read scaling.
- B. Sentinels replicate Redis data, so co-location improves durability.
- C. A single Sentinel can provide the same split-brain protection as a well-placed quorum.
- D. A network or host failure can remove quorum or create unsafe failover decisions, so Sentinel placement and quorum need failure-domain diversity.

**Answer: D**

**Explanation:** Sentinel is a distributed failure-detection/failover system. Its voters need independent perspectives and enough surviving quorum during failures.

**Why the other options miss the mark:**
- **A:** Quorum directly affects failover authorization.
- **B:** Sentinels monitor; they are not Redis data replicas.
- **C:** One monitor cannot provide distributed consensus-like protection.

---

### Q996 — Expert

This comes up in an incident channel and the team wants a decision, not a textbook definition. A Sentinel deployment uses too few independent voters and multiple instances share the same failure domain. What is the concern? What would you choose as the most technically sound next step?

- A. Sentinels replicate Redis data, so co-location improves durability.
- B. A single Sentinel can provide the same split-brain protection as a well-placed quorum.
- C. A network or host failure can remove quorum or create unsafe failover decisions, so Sentinel placement and quorum need failure-domain diversity.
- D. Sentinel quorum only affects read scaling.

**Answer: C**

**Explanation:** Sentinel is a distributed failure-detection/failover system. Its voters need independent perspectives and enough surviving quorum during failures.

**Why the other options miss the mark:**
- **A:** Sentinels monitor; they are not Redis data replicas.
- **B:** One monitor cannot provide distributed consensus-like protection.
- **D:** Quorum directly affects failover authorization.

---

### Q997 — Advanced

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. A Sentinel deployment uses too few independent voters and multiple instances share the same failure domain. What is the concern? Which answer best matches how you would handle this on a real system?

- A. A single Sentinel can provide the same split-brain protection as a well-placed quorum.
- B. A network or host failure can remove quorum or create unsafe failover decisions, so Sentinel placement and quorum need failure-domain diversity.
- C. Sentinel quorum only affects read scaling.
- D. Sentinels replicate Redis data, so co-location improves durability.

**Answer: B**

**Explanation:** Sentinel is a distributed failure-detection/failover system. Its voters need independent perspectives and enough surviving quorum during failures.

**Why the other options miss the mark:**
- **A:** One monitor cannot provide distributed consensus-like protection.
- **C:** Quorum directly affects failover authorization.
- **D:** Sentinels monitor; they are not Redis data replicas.

---

### Q998 — Expert

You're reviewing this during a production change window. A popular cache entry expires and thousands of requests simultaneously miss, all querying the database for the same expensive object. What pattern addresses this cache stampede? Pick the option you'd be willing to defend in a production review.

- A. Disable caching whenever a hot key appears.
- B. Increase database connection limits until every miss can run concurrently.
- C. Use techniques such as request coalescing/locking, jittered TTLs, stale-while-revalidate, or proactive refresh.
- D. Set the TTL of every key to the same round number.

**Answer: C**

**Explanation:** The goal is to avoid synchronizing a large population of requests on the same expiry boundary.

**Why the other options miss the mark:**
- **A:** Removing the cache increases database load.
- **B:** More DB connections can amplify the downstream overload instead of controlling it.
- **D:** Aligned expirations make stampedes more likely.

---

### Q999 — Advanced

This comes up in an incident channel and the team wants a decision, not a textbook definition. A popular cache entry expires and thousands of requests simultaneously miss, all querying the database for the same expensive object. What pattern addresses this cache stampede? What would you choose as the most technically sound next step?

- A. Increase database connection limits until every miss can run concurrently.
- B. Use techniques such as request coalescing/locking, jittered TTLs, stale-while-revalidate, or proactive refresh.
- C. Set the TTL of every key to the same round number.
- D. Disable caching whenever a hot key appears.

**Answer: B**

**Explanation:** The goal is to avoid synchronizing a large population of requests on the same expiry boundary.

**Why the other options miss the mark:**
- **A:** More DB connections can amplify the downstream overload instead of controlling it.
- **C:** Aligned expirations make stampedes more likely.
- **D:** Removing the cache increases database load.

---

### Q1000 — Advanced

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. A popular cache entry expires and thousands of requests simultaneously miss, all querying the database for the same expensive object. What pattern addresses this cache stampede? Which answer best matches how you would handle this on a real system?

- A. Use techniques such as request coalescing/locking, jittered TTLs, stale-while-revalidate, or proactive refresh.
- B. Set the TTL of every key to the same round number.
- C. Disable caching whenever a hot key appears.
- D. Increase database connection limits until every miss can run concurrently.

**Answer: A**

**Explanation:** The goal is to avoid synchronizing a large population of requests on the same expiry boundary.

**Why the other options miss the mark:**
- **B:** Aligned expirations make stampedes more likely.
- **C:** Removing the cache increases database load.
- **D:** More DB connections can amplify the downstream overload instead of controlling it.

---

## SRE and Reliability

### Q1001 — Expert

You're reviewing this during a production change window. A 99.9% availability SLO is burning its monthly error budget 20 times faster than sustainable for the last hour. What should the alert communicate? Pick the option you'd be willing to defend in a production review.

- A. Convert the SLO to 95% during the incident so the alert clears.
- B. This is a fast-burn SLO event that can consume the budget quickly and deserves urgent action tied to user impact.
- C. Only alert if CPU also exceeds 90%.
- D. Wait until the entire monthly budget is exhausted.

**Answer: B**

**Explanation:** Burn-rate alerting answers how quickly reliability budget is being consumed. Fast burn catches severe user impact before the whole budget is gone.

**Why the other options miss the mark:**
- **A:** Changing the objective during an incident destroys the meaning of the SLO.
- **C:** Resource utilization is not a substitute for SLO impact.
- **D:** Waiting for full exhaustion is too late for fast failures.

---

### Q1002 — Advanced

This comes up in an incident channel and the team wants a decision, not a textbook definition. A 99.9% availability SLO is burning its monthly error budget 20 times faster than sustainable for the last hour. What should the alert communicate? What would you choose as the most technically sound next step?

- A. This is a fast-burn SLO event that can consume the budget quickly and deserves urgent action tied to user impact.
- B. Only alert if CPU also exceeds 90%.
- C. Wait until the entire monthly budget is exhausted.
- D. Convert the SLO to 95% during the incident so the alert clears.

**Answer: A**

**Explanation:** Burn-rate alerting answers how quickly reliability budget is being consumed. Fast burn catches severe user impact before the whole budget is gone.

**Why the other options miss the mark:**
- **B:** Resource utilization is not a substitute for SLO impact.
- **C:** Waiting for full exhaustion is too late for fast failures.
- **D:** Changing the objective during an incident destroys the meaning of the SLO.

---

### Q1003 — Advanced

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. A 99.9% availability SLO is burning its monthly error budget 20 times faster than sustainable for the last hour. What should the alert communicate? Which answer best matches how you would handle this on a real system?

- A. Only alert if CPU also exceeds 90%.
- B. Wait until the entire monthly budget is exhausted.
- C. Convert the SLO to 95% during the incident so the alert clears.
- D. This is a fast-burn SLO event that can consume the budget quickly and deserves urgent action tied to user impact.

**Answer: D**

**Explanation:** Burn-rate alerting answers how quickly reliability budget is being consumed. Fast burn catches severe user impact before the whole budget is gone.

**Why the other options miss the mark:**
- **A:** Resource utilization is not a substitute for SLO impact.
- **B:** Waiting for full exhaustion is too late for fast failures.
- **C:** Changing the objective during an incident destroys the meaning of the SLO.

---

### Q1004 — Advanced

You're reviewing this during a production change window. A service has exhausted its error budget early in the quarter while the roadmap still contains several risky launches. What is a healthy error-budget policy? Pick the option you'd be willing to defend in a production review.

- A. Use the budget as a decision signal to slow high-risk change and invest in reliability until the service is back within policy.
- B. Keep shipping at the same pace because SLOs are reporting-only.
- C. Set the SLO lower every time the budget is exhausted.
- D. Freeze every change, including reliability fixes, for the rest of the quarter.

**Answer: A**

**Explanation:** Error budgets are useful when they change behavior. The response should balance necessary reliability work with carefully managed change, not become a ceremonial metric.

**Why the other options miss the mark:**
- **B:** A metric that never affects decisions has little governance value.
- **C:** Moving the goalpost hides reliability problems.
- **D:** A total freeze can block the very fixes needed to recover.

---

### Q1005 — Advanced

This comes up in an incident channel and the team wants a decision, not a textbook definition. A service has exhausted its error budget early in the quarter while the roadmap still contains several risky launches. What is a healthy error-budget policy? What would you choose as the most technically sound next step?

- A. Keep shipping at the same pace because SLOs are reporting-only.
- B. Set the SLO lower every time the budget is exhausted.
- C. Freeze every change, including reliability fixes, for the rest of the quarter.
- D. Use the budget as a decision signal to slow high-risk change and invest in reliability until the service is back within policy.

**Answer: D**

**Explanation:** Error budgets are useful when they change behavior. The response should balance necessary reliability work with carefully managed change, not become a ceremonial metric.

**Why the other options miss the mark:**
- **A:** A metric that never affects decisions has little governance value.
- **B:** Moving the goalpost hides reliability problems.
- **C:** A total freeze can block the very fixes needed to recover.

---

### Q1006 — Expert

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. A service has exhausted its error budget early in the quarter while the roadmap still contains several risky launches. What is a healthy error-budget policy? Which answer best matches how you would handle this on a real system?

- A. Set the SLO lower every time the budget is exhausted.
- B. Freeze every change, including reliability fixes, for the rest of the quarter.
- C. Use the budget as a decision signal to slow high-risk change and invest in reliability until the service is back within policy.
- D. Keep shipping at the same pace because SLOs are reporting-only.

**Answer: C**

**Explanation:** Error budgets are useful when they change behavior. The response should balance necessary reliability work with carefully managed change, not become a ceremonial metric.

**Why the other options miss the mark:**
- **A:** Moving the goalpost hides reliability problems.
- **B:** A total freeze can block the very fixes needed to recover.
- **D:** A metric that never affects decisions has little governance value.

---

### Q1007 — Advanced

You're reviewing this during a production change window. An internal queue depth rises every afternoon but users are unaffected and the queue drains within its normal window. What should determine whether it pages someone? Pick the option you'd be willing to defend in a production review.

- A. Whether the graph looks unusual compared with the morning.
- B. Whether the metric name contains the word queue.
- C. Whether the dashboard panel is colored red.
- D. Whether the condition predicts or causes meaningful user/SLO impact that requires urgent human action.

**Answer: D**

**Explanation:** Paging should be reserved for actionable, urgent symptoms. Expected internal behavior belongs in dashboards or lower-severity signals unless it threatens the SLO.

**Why the other options miss the mark:**
- **A:** Visual novelty alone is not an incident.
- **B:** Metric naming is not a severity model.
- **C:** Dashboard styling should not decide on-call urgency.

---

### Q1008 — Expert

This comes up in an incident channel and the team wants a decision, not a textbook definition. An internal queue depth rises every afternoon but users are unaffected and the queue drains within its normal window. What should determine whether it pages someone? What would you choose as the most technically sound next step?

- A. Whether the metric name contains the word queue.
- B. Whether the dashboard panel is colored red.
- C. Whether the condition predicts or causes meaningful user/SLO impact that requires urgent human action.
- D. Whether the graph looks unusual compared with the morning.

**Answer: C**

**Explanation:** Paging should be reserved for actionable, urgent symptoms. Expected internal behavior belongs in dashboards or lower-severity signals unless it threatens the SLO.

**Why the other options miss the mark:**
- **A:** Metric naming is not a severity model.
- **B:** Dashboard styling should not decide on-call urgency.
- **D:** Visual novelty alone is not an incident.

---

### Q1009 — Advanced

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. An internal queue depth rises every afternoon but users are unaffected and the queue drains within its normal window. What should determine whether it pages someone? Which answer best matches how you would handle this on a real system?

- A. Whether the dashboard panel is colored red.
- B. Whether the condition predicts or causes meaningful user/SLO impact that requires urgent human action.
- C. Whether the graph looks unusual compared with the morning.
- D. Whether the metric name contains the word queue.

**Answer: B**

**Explanation:** Paging should be reserved for actionable, urgent symptoms. Expected internal behavior belongs in dashboards or lower-severity signals unless it threatens the SLO.

**Why the other options miss the mark:**
- **A:** Dashboard styling should not decide on-call urgency.
- **C:** Visual novelty alone is not an incident.
- **D:** Metric naming is not a severity model.

---

### Q1010 — Expert

You're reviewing this during a production change window. Engineers spend two hours every day manually restarting the same workers after a predictable condition. Why is this classic toil? Pick the option you'd be willing to defend in a production review.

- A. It is not toil because the task is important.
- B. It becomes toil only after it causes an outage.
- C. It is repetitive, manual, automatable operational work that scales with service activity rather than producing lasting engineering value.
- D. Any operational task performed by an engineer is automatically toil.

**Answer: C**

**Explanation:** Toil is not defined by importance; it is the repetitive/manual/automatable nature of the work and how it scales.

**Why the other options miss the mark:**
- **A:** Important work can still be toil.
- **B:** Outages are not required for toil to exist.
- **D:** Some operational work is investigative or engineering rather than toil.

---

### Q1011 — Advanced

This comes up in an incident channel and the team wants a decision, not a textbook definition. Engineers spend two hours every day manually restarting the same workers after a predictable condition. Why is this classic toil? What would you choose as the most technically sound next step?

- A. It becomes toil only after it causes an outage.
- B. It is repetitive, manual, automatable operational work that scales with service activity rather than producing lasting engineering value.
- C. Any operational task performed by an engineer is automatically toil.
- D. It is not toil because the task is important.

**Answer: B**

**Explanation:** Toil is not defined by importance; it is the repetitive/manual/automatable nature of the work and how it scales.

**Why the other options miss the mark:**
- **A:** Outages are not required for toil to exist.
- **C:** Some operational work is investigative or engineering rather than toil.
- **D:** Important work can still be toil.

---

### Q1012 — Advanced

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. Engineers spend two hours every day manually restarting the same workers after a predictable condition. Why is this classic toil? Which answer best matches how you would handle this on a real system?

- A. It is repetitive, manual, automatable operational work that scales with service activity rather than producing lasting engineering value.
- B. Any operational task performed by an engineer is automatically toil.
- C. It is not toil because the task is important.
- D. It becomes toil only after it causes an outage.

**Answer: A**

**Explanation:** Toil is not defined by importance; it is the repetitive/manual/automatable nature of the work and how it scales.

**Why the other options miss the mark:**
- **B:** Some operational work is investigative or engineering rather than toil.
- **C:** Important work can still be toil.
- **D:** Outages are not required for toil to exist.

---

### Q1013 — Advanced

You're reviewing this during a production change window. A recommendation dependency is failing, but checkout can operate without recommendations. What is the reliability-oriented behavior? Pick the option you'd be willing to defend in a production review.

- A. Increase the caller timeout so users wait longer for recommendations.
- B. Degrade the optional feature quickly and preserve the checkout path rather than letting the dependency consume the whole request budget.
- C. Fail the entire request so all features remain consistent.
- D. Retry the dependency indefinitely until it returns.

**Answer: B**

**Explanation:** Critical and optional paths should not share the same failure fate. Bounded timeouts and fallbacks protect core user journeys.

**Why the other options miss the mark:**
- **A:** Longer waits convert a partial dependency failure into user-visible latency.
- **C:** Failing core business functionality for an optional feature increases blast radius.
- **D:** Indefinite retries consume capacity and deadlines.

---

### Q1014 — Advanced

This comes up in an incident channel and the team wants a decision, not a textbook definition. A recommendation dependency is failing, but checkout can operate without recommendations. What is the reliability-oriented behavior? What would you choose as the most technically sound next step?

- A. Degrade the optional feature quickly and preserve the checkout path rather than letting the dependency consume the whole request budget.
- B. Fail the entire request so all features remain consistent.
- C. Retry the dependency indefinitely until it returns.
- D. Increase the caller timeout so users wait longer for recommendations.

**Answer: A**

**Explanation:** Critical and optional paths should not share the same failure fate. Bounded timeouts and fallbacks protect core user journeys.

**Why the other options miss the mark:**
- **B:** Failing core business functionality for an optional feature increases blast radius.
- **C:** Indefinite retries consume capacity and deadlines.
- **D:** Longer waits convert a partial dependency failure into user-visible latency.

---

### Q1015 — Expert

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. A recommendation dependency is failing, but checkout can operate without recommendations. What is the reliability-oriented behavior? Which answer best matches how you would handle this on a real system?

- A. Fail the entire request so all features remain consistent.
- B. Retry the dependency indefinitely until it returns.
- C. Increase the caller timeout so users wait longer for recommendations.
- D. Degrade the optional feature quickly and preserve the checkout path rather than letting the dependency consume the whole request budget.

**Answer: D**

**Explanation:** Critical and optional paths should not share the same failure fate. Bounded timeouts and fallbacks protect core user journeys.

**Why the other options miss the mark:**
- **A:** Failing core business functionality for an optional feature increases blast radius.
- **B:** Indefinite retries consume capacity and deadlines.
- **C:** Longer waits convert a partial dependency failure into user-visible latency.

---

### Q1016 — Advanced

You're reviewing this during a production change window. During a major outage, five senior engineers independently change production while nobody owns communication or a shared hypothesis. What process improvement is most valuable? Pick the option you'd be willing to defend in a production review.

- A. Establish clear incident command, roles, a shared timeline, and coordinated change ownership.
- B. Give every engineer admin access so changes happen faster.
- C. Stop writing anything down until service is restored.
- D. Ask each person to troubleshoot a different theory without telling the others.

**Answer: A**

**Explanation:** Complex incidents fail socially as well as technically. Clear coordination reduces conflicting changes, duplicated work, and information loss.

**Why the other options miss the mark:**
- **B:** More simultaneous privileged changes can increase risk.
- **C:** A timeline is critical for coordination and later learning.
- **D:** Uncoordinated parallelism makes hypotheses and evidence hard to reconcile.

---

### Q1017 — Expert

This comes up in an incident channel and the team wants a decision, not a textbook definition. During a major outage, five senior engineers independently change production while nobody owns communication or a shared hypothesis. What process improvement is most valuable? What would you choose as the most technically sound next step?

- A. Give every engineer admin access so changes happen faster.
- B. Stop writing anything down until service is restored.
- C. Ask each person to troubleshoot a different theory without telling the others.
- D. Establish clear incident command, roles, a shared timeline, and coordinated change ownership.

**Answer: D**

**Explanation:** Complex incidents fail socially as well as technically. Clear coordination reduces conflicting changes, duplicated work, and information loss.

**Why the other options miss the mark:**
- **A:** More simultaneous privileged changes can increase risk.
- **B:** A timeline is critical for coordination and later learning.
- **C:** Uncoordinated parallelism makes hypotheses and evidence hard to reconcile.

---

### Q1018 — Advanced

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. During a major outage, five senior engineers independently change production while nobody owns communication or a shared hypothesis. What process improvement is most valuable? Which answer best matches how you would handle this on a real system?

- A. Stop writing anything down until service is restored.
- B. Ask each person to troubleshoot a different theory without telling the others.
- C. Establish clear incident command, roles, a shared timeline, and coordinated change ownership.
- D. Give every engineer admin access so changes happen faster.

**Answer: C**

**Explanation:** Complex incidents fail socially as well as technically. Clear coordination reduces conflicting changes, duplicated work, and information loss.

**Why the other options miss the mark:**
- **A:** A timeline is critical for coordination and later learning.
- **B:** Uncoordinated parallelism makes hypotheses and evidence hard to reconcile.
- **D:** More simultaneous privileged changes can increase risk.

---

### Q1019 — Expert

You're reviewing this during a production change window. A service normally runs at 75% of its maximum tested throughput and traffic can double during a regional failover. What does this tell you? Pick the option you'd be willing to defend in a production review.

- A. 75% utilization is always safe because it is below 100%.
- B. Only CPU headroom matters during failover.
- C. Failover traffic will automatically be half as expensive to process.
- D. Normal-state utilization leaves insufficient failover headroom unless capacity can scale fast enough and dependencies can handle the surge.

**Answer: D**

**Explanation:** Capacity planning must include failure scenarios, scaling lag, and downstream limits—not just average utilization in the healthy topology.

**Why the other options miss the mark:**
- **A:** Being below 100% does not guarantee N+1 capacity.
- **B:** Databases, networks, caches, and external quotas can become the bottleneck.
- **C:** The same user workload does not become cheaper simply because a region failed.

---

### Q1020 — Advanced

This comes up in an incident channel and the team wants a decision, not a textbook definition. A service normally runs at 75% of its maximum tested throughput and traffic can double during a regional failover. What does this tell you? What would you choose as the most technically sound next step?

- A. Only CPU headroom matters during failover.
- B. Failover traffic will automatically be half as expensive to process.
- C. Normal-state utilization leaves insufficient failover headroom unless capacity can scale fast enough and dependencies can handle the surge.
- D. 75% utilization is always safe because it is below 100%.

**Answer: C**

**Explanation:** Capacity planning must include failure scenarios, scaling lag, and downstream limits—not just average utilization in the healthy topology.

**Why the other options miss the mark:**
- **A:** Databases, networks, caches, and external quotas can become the bottleneck.
- **B:** The same user workload does not become cheaper simply because a region failed.
- **D:** Being below 100% does not guarantee N+1 capacity.

---

### Q1021 — Advanced

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. A service normally runs at 75% of its maximum tested throughput and traffic can double during a regional failover. What does this tell you? Which answer best matches how you would handle this on a real system?

- A. Failover traffic will automatically be half as expensive to process.
- B. Normal-state utilization leaves insufficient failover headroom unless capacity can scale fast enough and dependencies can handle the surge.
- C. 75% utilization is always safe because it is below 100%.
- D. Only CPU headroom matters during failover.

**Answer: B**

**Explanation:** Capacity planning must include failure scenarios, scaling lag, and downstream limits—not just average utilization in the healthy topology.

**Why the other options miss the mark:**
- **A:** The same user workload does not become cheaper simply because a region failed.
- **C:** Being below 100% does not guarantee N+1 capacity.
- **D:** Databases, networks, caches, and external quotas can become the bottleneck.

---

### Q1022 — Advanced

You're reviewing this during a production change window. A postmortem concludes that an engineer typed the wrong command and lists retraining as the only action item. What is missing? Pick the option you'd be willing to defend in a production review.

- A. A requirement that nobody ever use the command again.
- B. A longer outage timeline with no follow-up owners.
- C. A deeper look at why one command could cause that impact and which system guardrails, review paths, automation, or blast-radius controls should change.
- D. The engineer's name in the document title.

**Answer: C**

**Explanation:** Useful postmortems move beyond individual error to systemic conditions and produce specific owned actions that reduce recurrence or impact.

**Why the other options miss the mark:**
- **A:** A prohibition without controls is fragile.
- **B:** More narrative without owned remediation does not improve reliability.
- **D:** Naming individuals encourages blame rather than learning.

---

### Q1023 — Advanced

This comes up in an incident channel and the team wants a decision, not a textbook definition. A postmortem concludes that an engineer typed the wrong command and lists retraining as the only action item. What is missing? What would you choose as the most technically sound next step?

- A. A longer outage timeline with no follow-up owners.
- B. A deeper look at why one command could cause that impact and which system guardrails, review paths, automation, or blast-radius controls should change.
- C. The engineer's name in the document title.
- D. A requirement that nobody ever use the command again.

**Answer: B**

**Explanation:** Useful postmortems move beyond individual error to systemic conditions and produce specific owned actions that reduce recurrence or impact.

**Why the other options miss the mark:**
- **A:** More narrative without owned remediation does not improve reliability.
- **C:** Naming individuals encourages blame rather than learning.
- **D:** A prohibition without controls is fragile.

---

### Q1024 — Expert

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. A postmortem concludes that an engineer typed the wrong command and lists retraining as the only action item. What is missing? Which answer best matches how you would handle this on a real system?

- A. A deeper look at why one command could cause that impact and which system guardrails, review paths, automation, or blast-radius controls should change.
- B. The engineer's name in the document title.
- C. A requirement that nobody ever use the command again.
- D. A longer outage timeline with no follow-up owners.

**Answer: A**

**Explanation:** Useful postmortems move beyond individual error to systemic conditions and produce specific owned actions that reduce recurrence or impact.

**Why the other options miss the mark:**
- **B:** Naming individuals encourages blame rather than learning.
- **C:** A prohibition without controls is fragile.
- **D:** More narrative without owned remediation does not improve reliability.

---

### Q1025 — Advanced

You're reviewing this during a production change window. Three services in a call chain each retry failed requests three times independently. Why should an SRE care? Pick the option you'd be willing to defend in a production review.

- A. The only downside is larger log files.
- B. Attempt counts can multiply across layers, increasing load on the failing dependency and consuming latency budgets.
- C. Retries are free because they reuse the same trace ID.
- D. Each layer only sees its own attempts, so total load cannot increase.

**Answer: B**

**Explanation:** Retry budgets and clear retry ownership prevent a dependency failure from becoming self-amplifying traffic.

**Why the other options miss the mark:**
- **A:** Logs are secondary to the availability/capacity risk.
- **C:** Trace identity does not remove compute/network work.
- **D:** Independent retry loops multiply real requests.

---

### Q1026 — Expert

This comes up in an incident channel and the team wants a decision, not a textbook definition. Three services in a call chain each retry failed requests three times independently. Why should an SRE care? What would you choose as the most technically sound next step?

- A. Attempt counts can multiply across layers, increasing load on the failing dependency and consuming latency budgets.
- B. Retries are free because they reuse the same trace ID.
- C. Each layer only sees its own attempts, so total load cannot increase.
- D. The only downside is larger log files.

**Answer: A**

**Explanation:** Retry budgets and clear retry ownership prevent a dependency failure from becoming self-amplifying traffic.

**Why the other options miss the mark:**
- **B:** Trace identity does not remove compute/network work.
- **C:** Independent retry loops multiply real requests.
- **D:** Logs are secondary to the availability/capacity risk.

---

### Q1027 — Advanced

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. Three services in a call chain each retry failed requests three times independently. Why should an SRE care? Which answer best matches how you would handle this on a real system?

- A. Retries are free because they reuse the same trace ID.
- B. Each layer only sees its own attempts, so total load cannot increase.
- C. The only downside is larger log files.
- D. Attempt counts can multiply across layers, increasing load on the failing dependency and consuming latency budgets.

**Answer: D**

**Explanation:** Retry budgets and clear retry ownership prevent a dependency failure from becoming self-amplifying traffic.

**Why the other options miss the mark:**
- **A:** Trace identity does not remove compute/network work.
- **B:** Independent retry loops multiply real requests.
- **C:** Logs are secondary to the availability/capacity risk.

---

### Q1028 — Expert

You're reviewing this during a production change window. Your API has a 99.95% SLO but depends synchronously on a third-party service with a materially weaker availability objective and no fallback. What is the architectural implication? Pick the option you'd be willing to defend in a production review.

- A. The dependency can cap your achievable reliability unless you add redundancy, caching, graceful degradation, or otherwise remove it from the critical path.
- B. Your SLO automatically forces the vendor to meet 99.95%.
- C. Monitoring the vendor more frequently raises its availability.
- D. A larger connection pool makes the dependency SLO irrelevant.

**Answer: A**

**Explanation:** End-to-end reliability is constrained by critical dependencies. A stronger top-level SLO needs architecture that tolerates their failures.

**Why the other options miss the mark:**
- **B:** An internal objective does not change an external provider contract.
- **C:** Observability detects failure; it does not remove it.
- **D:** Pools manage concurrency, not dependency availability.

---

### Q1029 — Advanced

This comes up in an incident channel and the team wants a decision, not a textbook definition. Your API has a 99.95% SLO but depends synchronously on a third-party service with a materially weaker availability objective and no fallback. What is the architectural implication? What would you choose as the most technically sound next step?

- A. Your SLO automatically forces the vendor to meet 99.95%.
- B. Monitoring the vendor more frequently raises its availability.
- C. A larger connection pool makes the dependency SLO irrelevant.
- D. The dependency can cap your achievable reliability unless you add redundancy, caching, graceful degradation, or otherwise remove it from the critical path.

**Answer: D**

**Explanation:** End-to-end reliability is constrained by critical dependencies. A stronger top-level SLO needs architecture that tolerates their failures.

**Why the other options miss the mark:**
- **A:** An internal objective does not change an external provider contract.
- **B:** Observability detects failure; it does not remove it.
- **C:** Pools manage concurrency, not dependency availability.

---

### Q1030 — Advanced

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. Your API has a 99.95% SLO but depends synchronously on a third-party service with a materially weaker availability objective and no fallback. What is the architectural implication? Which answer best matches how you would handle this on a real system?

- A. Monitoring the vendor more frequently raises its availability.
- B. A larger connection pool makes the dependency SLO irrelevant.
- C. The dependency can cap your achievable reliability unless you add redundancy, caching, graceful degradation, or otherwise remove it from the critical path.
- D. Your SLO automatically forces the vendor to meet 99.95%.

**Answer: C**

**Explanation:** End-to-end reliability is constrained by critical dependencies. A stronger top-level SLO needs architecture that tolerates their failures.

**Why the other options miss the mark:**
- **A:** Observability detects failure; it does not remove it.
- **B:** Pools manage concurrency, not dependency availability.
- **D:** An internal objective does not change an external provider contract.

---

## Service Mesh and Envoy

### Q1031 — Expert

You're reviewing this during a production change window. One namespace enforces STRICT mTLS while a legacy workload in another namespace sends plain HTTP directly to the service. What failure should you expect? Pick the option you'd be willing to defend in a production review.

- A. Kubernetes Service will terminate TLS before traffic reaches the sidecar.
- B. The packet will bypass the mesh because it originated in another namespace.
- C. The strict destination sidecar will reject the non-mTLS connection unless the client is brought into the mesh or policy is adjusted deliberately.
- D. Envoy will automatically downgrade STRICT to plaintext for that client.

**Answer: C**

**Explanation:** STRICT mTLS means the receiving proxy expects authenticated mesh TLS. Legacy clients need migration or a carefully scoped compatibility policy.

**Why the other options miss the mark:**
- **A:** A normal ClusterIP Service is not a TLS terminator.
- **B:** Namespace boundaries do not automatically bypass interception.
- **D:** STRICT does not silently downgrade.

---

### Q1032 — Advanced

This comes up in an incident channel and the team wants a decision, not a textbook definition. One namespace enforces STRICT mTLS while a legacy workload in another namespace sends plain HTTP directly to the service. What failure should you expect? What would you choose as the most technically sound next step?

- A. The packet will bypass the mesh because it originated in another namespace.
- B. The strict destination sidecar will reject the non-mTLS connection unless the client is brought into the mesh or policy is adjusted deliberately.
- C. Envoy will automatically downgrade STRICT to plaintext for that client.
- D. Kubernetes Service will terminate TLS before traffic reaches the sidecar.

**Answer: B**

**Explanation:** STRICT mTLS means the receiving proxy expects authenticated mesh TLS. Legacy clients need migration or a carefully scoped compatibility policy.

**Why the other options miss the mark:**
- **A:** Namespace boundaries do not automatically bypass interception.
- **C:** STRICT does not silently downgrade.
- **D:** A normal ClusterIP Service is not a TLS terminator.

---

### Q1033 — Advanced

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. One namespace enforces STRICT mTLS while a legacy workload in another namespace sends plain HTTP directly to the service. What failure should you expect? Which answer best matches how you would handle this on a real system?

- A. The strict destination sidecar will reject the non-mTLS connection unless the client is brought into the mesh or policy is adjusted deliberately.
- B. Envoy will automatically downgrade STRICT to plaintext for that client.
- C. Kubernetes Service will terminate TLS before traffic reaches the sidecar.
- D. The packet will bypass the mesh because it originated in another namespace.

**Answer: A**

**Explanation:** STRICT mTLS means the receiving proxy expects authenticated mesh TLS. Legacy clients need migration or a carefully scoped compatibility policy.

**Why the other options miss the mark:**
- **B:** STRICT does not silently downgrade.
- **C:** A normal ClusterIP Service is not a TLS terminator.
- **D:** Namespace boundaries do not automatically bypass interception.

---

### Q1034 — Advanced

You're reviewing this during a production change window. A new Deployment has no sidecars even though existing workloads in the namespace do. What should you check first? Pick the option you'd be willing to defend in a production review.

- A. Change the Kubernetes Service type to LoadBalancer.
- B. Verify namespace/pod injection labels and whether the pods were created after the injection policy was enabled.
- C. Restart the Istio control plane until sidecars appear in running pods.
- D. Add an Envoy container manually to each pod spec.

**Answer: B**

**Explanation:** Sidecar injection is normally performed by admission at pod creation. Existing pods are not retrofitted automatically.

**Why the other options miss the mark:**
- **A:** Service type is unrelated to admission injection.
- **C:** Control-plane restarts do not mutate already-created pods into having sidecars.
- **D:** Manual sidecars bypass generated bootstrap/configuration and are error-prone.

---

### Q1035 — Advanced

This comes up in an incident channel and the team wants a decision, not a textbook definition. A new Deployment has no sidecars even though existing workloads in the namespace do. What should you check first? What would you choose as the most technically sound next step?

- A. Verify namespace/pod injection labels and whether the pods were created after the injection policy was enabled.
- B. Restart the Istio control plane until sidecars appear in running pods.
- C. Add an Envoy container manually to each pod spec.
- D. Change the Kubernetes Service type to LoadBalancer.

**Answer: A**

**Explanation:** Sidecar injection is normally performed by admission at pod creation. Existing pods are not retrofitted automatically.

**Why the other options miss the mark:**
- **B:** Control-plane restarts do not mutate already-created pods into having sidecars.
- **C:** Manual sidecars bypass generated bootstrap/configuration and are error-prone.
- **D:** Service type is unrelated to admission injection.

---

### Q1036 — Expert

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. A new Deployment has no sidecars even though existing workloads in the namespace do. What should you check first? Which answer best matches how you would handle this on a real system?

- A. Restart the Istio control plane until sidecars appear in running pods.
- B. Add an Envoy container manually to each pod spec.
- C. Change the Kubernetes Service type to LoadBalancer.
- D. Verify namespace/pod injection labels and whether the pods were created after the injection policy was enabled.

**Answer: D**

**Explanation:** Sidecar injection is normally performed by admission at pod creation. Existing pods are not retrofitted automatically.

**Why the other options miss the mark:**
- **A:** Control-plane restarts do not mutate already-created pods into having sidecars.
- **B:** Manual sidecars bypass generated bootstrap/configuration and are error-prone.
- **C:** Service type is unrelated to admission injection.

---

### Q1037 — Advanced

You're reviewing this during a production change window. A downstream service is overloaded. The application retries twice, Envoy retries three times, and an upstream gateway also retries. What is the architectural risk? Pick the option you'd be willing to defend in a production review.

- A. Layered retries can multiply requests and turn a partial failure into a retry storm unless budgets and ownership are coordinated.
- B. Retries at different layers cancel each other out automatically.
- C. Envoy retries consume no downstream capacity because they stay in the proxy.
- D. More retries always improve availability when the original timeout is short.

**Answer: A**

**Explanation:** Retry amplification is multiplicative. A service under stress can receive far more work precisely when it has the least spare capacity.

**Why the other options miss the mark:**
- **B:** Independent layers do not coordinate by default.
- **C:** Proxy-generated retries are real requests to the downstream.
- **D:** Unbounded retries can reduce availability by increasing load.

---

### Q1038 — Expert

This comes up in an incident channel and the team wants a decision, not a textbook definition. A downstream service is overloaded. The application retries twice, Envoy retries three times, and an upstream gateway also retries. What is the architectural risk? What would you choose as the most technically sound next step?

- A. Retries at different layers cancel each other out automatically.
- B. Envoy retries consume no downstream capacity because they stay in the proxy.
- C. More retries always improve availability when the original timeout is short.
- D. Layered retries can multiply requests and turn a partial failure into a retry storm unless budgets and ownership are coordinated.

**Answer: D**

**Explanation:** Retry amplification is multiplicative. A service under stress can receive far more work precisely when it has the least spare capacity.

**Why the other options miss the mark:**
- **A:** Independent layers do not coordinate by default.
- **B:** Proxy-generated retries are real requests to the downstream.
- **C:** Unbounded retries can reduce availability by increasing load.

---

### Q1039 — Advanced

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. A downstream service is overloaded. The application retries twice, Envoy retries three times, and an upstream gateway also retries. What is the architectural risk? Which answer best matches how you would handle this on a real system?

- A. Envoy retries consume no downstream capacity because they stay in the proxy.
- B. More retries always improve availability when the original timeout is short.
- C. Layered retries can multiply requests and turn a partial failure into a retry storm unless budgets and ownership are coordinated.
- D. Retries at different layers cancel each other out automatically.

**Answer: C**

**Explanation:** Retry amplification is multiplicative. A service under stress can receive far more work precisely when it has the least spare capacity.

**Why the other options miss the mark:**
- **A:** Proxy-generated retries are real requests to the downstream.
- **B:** Unbounded retries can reduce availability by increasing load.
- **D:** Independent layers do not coordinate by default.

---

### Q1040 — Expert

You're reviewing this during a production change window. A subset of service instances returns connection failures while the rest are healthy. Which mesh feature can temporarily stop routing to the bad endpoints? Pick the option you'd be willing to defend in a production review.

- A. A VirtualService rewrite rule.
- B. mTLS certificate rotation.
- C. Sidecar resource limits alone.
- D. Outlier detection with sensible ejection thresholds and recovery settings.

**Answer: D**

**Explanation:** Outlier detection watches endpoint failure behavior and can eject unhealthy hosts from the load-balancing pool.

**Why the other options miss the mark:**
- **A:** Rewrites change request attributes, not endpoint health.
- **B:** Certificate rotation addresses identity/expiry issues, not generic failing endpoints.
- **C:** Proxy resources matter for proxy stability but do not automatically identify bad upstream instances.

---

### Q1041 — Advanced

This comes up in an incident channel and the team wants a decision, not a textbook definition. A subset of service instances returns connection failures while the rest are healthy. Which mesh feature can temporarily stop routing to the bad endpoints? What would you choose as the most technically sound next step?

- A. mTLS certificate rotation.
- B. Sidecar resource limits alone.
- C. Outlier detection with sensible ejection thresholds and recovery settings.
- D. A VirtualService rewrite rule.

**Answer: C**

**Explanation:** Outlier detection watches endpoint failure behavior and can eject unhealthy hosts from the load-balancing pool.

**Why the other options miss the mark:**
- **A:** Certificate rotation addresses identity/expiry issues, not generic failing endpoints.
- **B:** Proxy resources matter for proxy stability but do not automatically identify bad upstream instances.
- **D:** Rewrites change request attributes, not endpoint health.

---

### Q1042 — Advanced

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. A subset of service instances returns connection failures while the rest are healthy. Which mesh feature can temporarily stop routing to the bad endpoints? Which answer best matches how you would handle this on a real system?

- A. Sidecar resource limits alone.
- B. Outlier detection with sensible ejection thresholds and recovery settings.
- C. A VirtualService rewrite rule.
- D. mTLS certificate rotation.

**Answer: B**

**Explanation:** Outlier detection watches endpoint failure behavior and can eject unhealthy hosts from the load-balancing pool.

**Why the other options miss the mark:**
- **A:** Proxy resources matter for proxy stability but do not automatically identify bad upstream instances.
- **C:** Rewrites change request attributes, not endpoint health.
- **D:** Certificate rotation addresses identity/expiry issues, not generic failing endpoints.

---

### Q1043 — Advanced

You're reviewing this during a production change window. You want 5% of production traffic for one hostname to reach a canary subset and 95% to stay on stable. What configuration relationship is required? Pick the option you'd be willing to defend in a production review.

- A. Only pod labels; Envoy infers canary percentages from replica counts.
- B. A NetworkPolicy that allows 5% of connections.
- C. A routing rule that splits traffic plus destination subsets whose labels match the stable and canary workloads.
- D. Only a DestinationRule; it automatically decides the percentage.

**Answer: C**

**Explanation:** Traffic policy and endpoint grouping are separate concerns. The route defines weights, while subsets identify which endpoints belong to each version.

**Why the other options miss the mark:**
- **A:** Replica counts do not implicitly become mesh traffic weights.
- **B:** NetworkPolicy is allow/deny connectivity, not percentage routing.
- **D:** A DestinationRule can define subsets but does not by itself create the weighted route.

---

### Q1044 — Advanced

This comes up in an incident channel and the team wants a decision, not a textbook definition. You want 5% of production traffic for one hostname to reach a canary subset and 95% to stay on stable. What configuration relationship is required? What would you choose as the most technically sound next step?

- A. A NetworkPolicy that allows 5% of connections.
- B. A routing rule that splits traffic plus destination subsets whose labels match the stable and canary workloads.
- C. Only a DestinationRule; it automatically decides the percentage.
- D. Only pod labels; Envoy infers canary percentages from replica counts.

**Answer: B**

**Explanation:** Traffic policy and endpoint grouping are separate concerns. The route defines weights, while subsets identify which endpoints belong to each version.

**Why the other options miss the mark:**
- **A:** NetworkPolicy is allow/deny connectivity, not percentage routing.
- **C:** A DestinationRule can define subsets but does not by itself create the weighted route.
- **D:** Replica counts do not implicitly become mesh traffic weights.

---

### Q1045 — Expert

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. You want 5% of production traffic for one hostname to reach a canary subset and 95% to stay on stable. What configuration relationship is required? Which answer best matches how you would handle this on a real system?

- A. A routing rule that splits traffic plus destination subsets whose labels match the stable and canary workloads.
- B. Only a DestinationRule; it automatically decides the percentage.
- C. Only pod labels; Envoy infers canary percentages from replica counts.
- D. A NetworkPolicy that allows 5% of connections.

**Answer: A**

**Explanation:** Traffic policy and endpoint grouping are separate concerns. The route defines weights, while subsets identify which endpoints belong to each version.

**Why the other options miss the mark:**
- **B:** A DestinationRule can define subsets but does not by itself create the weighted route.
- **C:** Replica counts do not implicitly become mesh traffic weights.
- **D:** NetworkPolicy is allow/deny connectivity, not percentage routing.

---

### Q1046 — Advanced

You're reviewing this during a production change window. A VirtualService routes to subset v2, but the DestinationRule subset selector does not match any current pods. What symptom is likely? Pick the option you'd be willing to defend in a production review.

- A. The route weight will be redistributed to v1 without configuration.
- B. Requests routed to that subset can fail because the proxy has no eligible endpoints for v2.
- C. Envoy will fall back to any pod in the Service automatically.
- D. Kubernetes will relabel pods to match the subset.

**Answer: B**

**Explanation:** Subsets are label-based endpoint groups. A typo or stale label can produce an empty cluster from Envoy's point of view.

**Why the other options miss the mark:**
- **A:** Weighted routing is not automatically rebalanced around invalid subsets.
- **C:** Fallback is not something to assume for a missing subset.
- **D:** Kubernetes does not rewrite workload labels based on mesh policy.

---

### Q1047 — Expert

This comes up in an incident channel and the team wants a decision, not a textbook definition. A VirtualService routes to subset v2, but the DestinationRule subset selector does not match any current pods. What symptom is likely? What would you choose as the most technically sound next step?

- A. Requests routed to that subset can fail because the proxy has no eligible endpoints for v2.
- B. Envoy will fall back to any pod in the Service automatically.
- C. Kubernetes will relabel pods to match the subset.
- D. The route weight will be redistributed to v1 without configuration.

**Answer: A**

**Explanation:** Subsets are label-based endpoint groups. A typo or stale label can produce an empty cluster from Envoy's point of view.

**Why the other options miss the mark:**
- **B:** Fallback is not something to assume for a missing subset.
- **C:** Kubernetes does not rewrite workload labels based on mesh policy.
- **D:** Weighted routing is not automatically rebalanced around invalid subsets.

---

### Q1048 — Advanced

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. A VirtualService routes to subset v2, but the DestinationRule subset selector does not match any current pods. What symptom is likely? Which answer best matches how you would handle this on a real system?

- A. Envoy will fall back to any pod in the Service automatically.
- B. Kubernetes will relabel pods to match the subset.
- C. The route weight will be redistributed to v1 without configuration.
- D. Requests routed to that subset can fail because the proxy has no eligible endpoints for v2.

**Answer: D**

**Explanation:** Subsets are label-based endpoint groups. A typo or stale label can produce an empty cluster from Envoy's point of view.

**Why the other options miss the mark:**
- **A:** Fallback is not something to assume for a missing subset.
- **B:** Kubernetes does not rewrite workload labels based on mesh policy.
- **C:** Weighted routing is not automatically rebalanced around invalid subsets.

---

### Q1049 — Expert

You're reviewing this during a production change window. A mesh policy was updated, but one proxy keeps using stale routing while others have converged. What should you investigate? Pick the option you'd be willing to defend in a production review.

- A. The proxy's control-plane connectivity and xDS/config status rather than only the application process.
- B. The node filesystem inode count first, because Envoy stores routes as files.
- C. The Kubernetes scheduler, because it pushes every route directly to Envoy.
- D. The container image tag, because route updates require a new image.

**Answer: A**

**Explanation:** Envoy receives dynamic configuration from the control plane. A disconnected or rejected xDS update can leave one proxy on stale config.

**Why the other options miss the mark:**
- **B:** xDS config is primarily delivered dynamically, not as local route files.
- **C:** The scheduler places pods; it is not the mesh config distributor.
- **D:** Dynamic routing updates do not require rebuilding application images.

---

### Q1050 — Advanced

This comes up in an incident channel and the team wants a decision, not a textbook definition. A mesh policy was updated, but one proxy keeps using stale routing while others have converged. What should you investigate? What would you choose as the most technically sound next step?

- A. The node filesystem inode count first, because Envoy stores routes as files.
- B. The Kubernetes scheduler, because it pushes every route directly to Envoy.
- C. The container image tag, because route updates require a new image.
- D. The proxy's control-plane connectivity and xDS/config status rather than only the application process.

**Answer: D**

**Explanation:** Envoy receives dynamic configuration from the control plane. A disconnected or rejected xDS update can leave one proxy on stale config.

**Why the other options miss the mark:**
- **A:** xDS config is primarily delivered dynamically, not as local route files.
- **B:** The scheduler places pods; it is not the mesh config distributor.
- **C:** Dynamic routing updates do not require rebuilding application images.

---

### Q1051 — Advanced

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. A mesh policy was updated, but one proxy keeps using stale routing while others have converged. What should you investigate? Which answer best matches how you would handle this on a real system?

- A. The Kubernetes scheduler, because it pushes every route directly to Envoy.
- B. The container image tag, because route updates require a new image.
- C. The proxy's control-plane connectivity and xDS/config status rather than only the application process.
- D. The node filesystem inode count first, because Envoy stores routes as files.

**Answer: C**

**Explanation:** Envoy receives dynamic configuration from the control plane. A disconnected or rejected xDS update can leave one proxy on stale config.

**Why the other options miss the mark:**
- **A:** The scheduler places pods; it is not the mesh config distributor.
- **B:** Dynamic routing updates do not require rebuilding application images.
- **D:** xDS config is primarily delivered dynamically, not as local route files.

---

### Q1052 — Advanced

You're reviewing this during a production change window. Envoy access logs show repeated 503 responses with upstream connection-failure flags while the application container itself looks healthy. Where should you focus? Pick the option you'd be willing to defend in a production review.

- A. On browser caching, because 503 is normally generated by the client.
- B. On DNS TTL only; Envoy never reports connection failures for IP endpoints.
- C. On increasing application log verbosity before checking any network evidence.
- D. On the proxy-to-upstream path: endpoint health, port mapping, TLS policy, network reachability, and upstream listener state.

**Answer: D**

**Explanation:** An upstream connection failure is telling you the proxy could not establish or maintain the downstream hop. Follow that specific path first.

**Why the other options miss the mark:**
- **A:** 503s in this context are generated in the service path, not by browser cache.
- **B:** Connection failures can occur regardless of whether endpoints came from DNS or service discovery.
- **C:** Application logs may be empty precisely because the request never reached the application.

---

### Q1053 — Advanced

This comes up in an incident channel and the team wants a decision, not a textbook definition. Envoy access logs show repeated 503 responses with upstream connection-failure flags while the application container itself looks healthy. Where should you focus? What would you choose as the most technically sound next step?

- A. On DNS TTL only; Envoy never reports connection failures for IP endpoints.
- B. On increasing application log verbosity before checking any network evidence.
- C. On the proxy-to-upstream path: endpoint health, port mapping, TLS policy, network reachability, and upstream listener state.
- D. On browser caching, because 503 is normally generated by the client.

**Answer: C**

**Explanation:** An upstream connection failure is telling you the proxy could not establish or maintain the downstream hop. Follow that specific path first.

**Why the other options miss the mark:**
- **A:** Connection failures can occur regardless of whether endpoints came from DNS or service discovery.
- **B:** Application logs may be empty precisely because the request never reached the application.
- **D:** 503s in this context are generated in the service path, not by browser cache.

---

### Q1054 — Expert

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. Envoy access logs show repeated 503 responses with upstream connection-failure flags while the application container itself looks healthy. Where should you focus? Which answer best matches how you would handle this on a real system?

- A. On increasing application log verbosity before checking any network evidence.
- B. On the proxy-to-upstream path: endpoint health, port mapping, TLS policy, network reachability, and upstream listener state.
- C. On browser caching, because 503 is normally generated by the client.
- D. On DNS TTL only; Envoy never reports connection failures for IP endpoints.

**Answer: B**

**Explanation:** An upstream connection failure is telling you the proxy could not establish or maintain the downstream hop. Follow that specific path first.

**Why the other options miss the mark:**
- **A:** Application logs may be empty precisely because the request never reached the application.
- **C:** 503s in this context are generated in the service path, not by browser cache.
- **D:** Connection failures can occur regardless of whether endpoints came from DNS or service discovery.

---

### Q1055 — Advanced

You're reviewing this during a production change window. A cloud load balancer marks every Istio ingress gateway unhealthy after a security policy change, but application routes are still configured correctly. What is the safest first check? Pick the option you'd be willing to defend in a production review.

- A. Point the health check at a random application URL with authentication disabled.
- B. Scale the gateway to zero and back up.
- C. Confirm that the load balancer health-check path/port is explicitly allowed and is not being caught by an HTTP-only deny rule on the status port.
- D. Delete all AuthorizationPolicies because any policy can break health checks.

**Answer: C**

**Explanation:** Ingress health endpoints often use a dedicated status port/path. Security rules need to protect application traffic without accidentally denying infrastructure health probes.

**Why the other options miss the mark:**
- **A:** Health checks should target a stable purpose-built endpoint.
- **B:** Scaling does not correct a deterministic policy mismatch.
- **D:** Removing all policy creates a much larger security gap.

---

### Q1056 — Expert

This comes up in an incident channel and the team wants a decision, not a textbook definition. A cloud load balancer marks every Istio ingress gateway unhealthy after a security policy change, but application routes are still configured correctly. What is the safest first check? What would you choose as the most technically sound next step?

- A. Scale the gateway to zero and back up.
- B. Confirm that the load balancer health-check path/port is explicitly allowed and is not being caught by an HTTP-only deny rule on the status port.
- C. Delete all AuthorizationPolicies because any policy can break health checks.
- D. Point the health check at a random application URL with authentication disabled.

**Answer: B**

**Explanation:** Ingress health endpoints often use a dedicated status port/path. Security rules need to protect application traffic without accidentally denying infrastructure health probes.

**Why the other options miss the mark:**
- **A:** Scaling does not correct a deterministic policy mismatch.
- **C:** Removing all policy creates a much larger security gap.
- **D:** Health checks should target a stable purpose-built endpoint.

---

### Q1057 — Advanced

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. A cloud load balancer marks every Istio ingress gateway unhealthy after a security policy change, but application routes are still configured correctly. What is the safest first check? Which answer best matches how you would handle this on a real system?

- A. Confirm that the load balancer health-check path/port is explicitly allowed and is not being caught by an HTTP-only deny rule on the status port.
- B. Delete all AuthorizationPolicies because any policy can break health checks.
- C. Point the health check at a random application URL with authentication disabled.
- D. Scale the gateway to zero and back up.

**Answer: A**

**Explanation:** Ingress health endpoints often use a dedicated status port/path. Security rules need to protect application traffic without accidentally denying infrastructure health probes.

**Why the other options miss the mark:**
- **B:** Removing all policy creates a much larger security gap.
- **C:** Health checks should target a stable purpose-built endpoint.
- **D:** Scaling does not correct a deterministic policy mismatch.

---

### Q1058 — Expert

You're reviewing this during a production change window. A mesh dashboard becomes slow after a team adds full request URLs, user IDs, and trace IDs as metric labels. What is the underlying issue? Pick the option you'd be willing to defend in a production review.

- A. The fix is to increase every histogram bucket count.
- B. Unbounded/high-cardinality labels are exploding the number of time series and should be removed or normalized.
- C. The mesh is encrypting too much traffic with mTLS.
- D. Prometheus needs one scrape target per user to handle the labels correctly.

**Answer: B**

**Explanation:** Metrics work best with bounded dimensions. IDs and raw paths belong in logs/traces or normalized route labels, not unbounded metric labels.

**Why the other options miss the mark:**
- **A:** More buckets further increase series count.
- **C:** Encryption overhead does not explain time-series cardinality growth.
- **D:** Per-user targets would make cardinality and operations worse.

---

### Q1059 — Advanced

This comes up in an incident channel and the team wants a decision, not a textbook definition. A mesh dashboard becomes slow after a team adds full request URLs, user IDs, and trace IDs as metric labels. What is the underlying issue? What would you choose as the most technically sound next step?

- A. Unbounded/high-cardinality labels are exploding the number of time series and should be removed or normalized.
- B. The mesh is encrypting too much traffic with mTLS.
- C. Prometheus needs one scrape target per user to handle the labels correctly.
- D. The fix is to increase every histogram bucket count.

**Answer: A**

**Explanation:** Metrics work best with bounded dimensions. IDs and raw paths belong in logs/traces or normalized route labels, not unbounded metric labels.

**Why the other options miss the mark:**
- **B:** Encryption overhead does not explain time-series cardinality growth.
- **C:** Per-user targets would make cardinality and operations worse.
- **D:** More buckets further increase series count.

---

### Q1060 — Advanced

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. A mesh dashboard becomes slow after a team adds full request URLs, user IDs, and trace IDs as metric labels. What is the underlying issue? Which answer best matches how you would handle this on a real system?

- A. The mesh is encrypting too much traffic with mTLS.
- B. Prometheus needs one scrape target per user to handle the labels correctly.
- C. The fix is to increase every histogram bucket count.
- D. Unbounded/high-cardinality labels are exploding the number of time series and should be removed or normalized.

**Answer: D**

**Explanation:** Metrics work best with bounded dimensions. IDs and raw paths belong in logs/traces or normalized route labels, not unbounded metric labels.

**Why the other options miss the mark:**
- **A:** Encryption overhead does not explain time-series cardinality growth.
- **B:** Per-user targets would make cardinality and operations worse.
- **C:** More buckets further increase series count.

---

## Terraform and IaC

### Q1061 — Expert

You're reviewing this during a production change window. A scheduled pipeline is applying the same workspace while an engineer starts a local apply. The second run reports that the state is locked. What is the safest response? Pick the option you'd be willing to defend in a production review.

- A. Force-unlock immediately so both applies can continue.
- B. Delete the remote state and regenerate it from configuration.
- C. Disable state locking for this workspace to avoid future waits.
- D. Let the active operation finish or investigate the lock owner before removing the lock.

**Answer: D**

**Explanation:** The lock is protecting the state from concurrent writers. Removing it without proving the first operation is gone can corrupt state or produce conflicting infrastructure changes.

**Why the other options miss the mark:**
- **A:** Concurrent applies are exactly what locking is designed to prevent.
- **B:** Deleting state destroys Terraform's source of truth and can cause destructive plans.
- **C:** Disabling locking trades a short wait for a much larger consistency risk.

---

### Q1062 — Advanced

This comes up in an incident channel and the team wants a decision, not a textbook definition. A scheduled pipeline is applying the same workspace while an engineer starts a local apply. The second run reports that the state is locked. What is the safest response? What would you choose as the most technically sound next step?

- A. Delete the remote state and regenerate it from configuration.
- B. Disable state locking for this workspace to avoid future waits.
- C. Let the active operation finish or investigate the lock owner before removing the lock.
- D. Force-unlock immediately so both applies can continue.

**Answer: C**

**Explanation:** The lock is protecting the state from concurrent writers. Removing it without proving the first operation is gone can corrupt state or produce conflicting infrastructure changes.

**Why the other options miss the mark:**
- **A:** Deleting state destroys Terraform's source of truth and can cause destructive plans.
- **B:** Disabling locking trades a short wait for a much larger consistency risk.
- **D:** Concurrent applies are exactly what locking is designed to prevent.

---

### Q1063 — Advanced

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. A scheduled pipeline is applying the same workspace while an engineer starts a local apply. The second run reports that the state is locked. What is the safest response? Which answer best matches how you would handle this on a real system?

- A. Disable state locking for this workspace to avoid future waits.
- B. Let the active operation finish or investigate the lock owner before removing the lock.
- C. Force-unlock immediately so both applies can continue.
- D. Delete the remote state and regenerate it from configuration.

**Answer: B**

**Explanation:** The lock is protecting the state from concurrent writers. Removing it without proving the first operation is gone can corrupt state or produce conflicting infrastructure changes.

**Why the other options miss the mark:**
- **A:** Disabling locking trades a short wait for a much larger consistency risk.
- **C:** Concurrent applies are exactly what locking is designed to prevent.
- **D:** Deleting state destroys Terraform's source of truth and can cause destructive plans.

---

### Q1064 — Advanced

You're reviewing this during a production change window. Someone changed a production security group in the cloud console. The next Terraform plan wants to move it back to the declared configuration. What should you do before applying? Pick the option you'd be willing to defend in a production review.

- A. Add ignore_changes to the whole resource so drift stops appearing.
- B. Remove the security group from state and manage it manually from now on.
- C. Decide whether the console change is legitimate, then either encode it in code or intentionally revert it.
- D. Apply immediately because Terraform is always right.

**Answer: C**

**Explanation:** Drift is a signal, not an automatic instruction. First establish the intended state, then make code and infrastructure agree deliberately.

**Why the other options miss the mark:**
- **A:** Broad ignore_changes can hide future security drift.
- **B:** Removing managed resources from IaC weakens repeatability and auditability.
- **D:** Blindly applying can undo an emergency or approved change.

---

### Q1065 — Advanced

This comes up in an incident channel and the team wants a decision, not a textbook definition. Someone changed a production security group in the cloud console. The next Terraform plan wants to move it back to the declared configuration. What should you do before applying? What would you choose as the most technically sound next step?

- A. Remove the security group from state and manage it manually from now on.
- B. Decide whether the console change is legitimate, then either encode it in code or intentionally revert it.
- C. Apply immediately because Terraform is always right.
- D. Add ignore_changes to the whole resource so drift stops appearing.

**Answer: B**

**Explanation:** Drift is a signal, not an automatic instruction. First establish the intended state, then make code and infrastructure agree deliberately.

**Why the other options miss the mark:**
- **A:** Removing managed resources from IaC weakens repeatability and auditability.
- **C:** Blindly applying can undo an emergency or approved change.
- **D:** Broad ignore_changes can hide future security drift.

---

### Q1066 — Expert

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. Someone changed a production security group in the cloud console. The next Terraform plan wants to move it back to the declared configuration. What should you do before applying? Which answer best matches how you would handle this on a real system?

- A. Decide whether the console change is legitimate, then either encode it in code or intentionally revert it.
- B. Apply immediately because Terraform is always right.
- C. Add ignore_changes to the whole resource so drift stops appearing.
- D. Remove the security group from state and manage it manually from now on.

**Answer: A**

**Explanation:** Drift is a signal, not an automatic instruction. First establish the intended state, then make code and infrastructure agree deliberately.

**Why the other options miss the mark:**
- **B:** Blindly applying can undo an emergency or approved change.
- **C:** Broad ignore_changes can hide future security drift.
- **D:** Removing managed resources from IaC weakens repeatability and auditability.

---

### Q1067 — Advanced

You're reviewing this during a production change window. A team stores Terraform state in object storage and the state contains database passwords generated by resources. Which design reduces the real exposure? Pick the option you'd be willing to defend in a production review.

- A. Rely on sensitive = true to remove secret values from state.
- B. Use an encrypted remote backend with strict IAM, versioning, and tightly controlled state access.
- C. Commit the state file to a private Git repository instead.
- D. Base64-encode the state before uploading it.

**Answer: B**

**Explanation:** Terraform state can contain sensitive values even when outputs are marked sensitive. Backend encryption and access control are the primary protections.

**Why the other options miss the mark:**
- **A:** sensitive hides values from normal CLI output; it does not guarantee they are absent from state.
- **C:** Git history is a poor place for secrets and broadens access.
- **D:** Base64 is encoding, not encryption.

---

### Q1068 — Expert

This comes up in an incident channel and the team wants a decision, not a textbook definition. A team stores Terraform state in object storage and the state contains database passwords generated by resources. Which design reduces the real exposure? What would you choose as the most technically sound next step?

- A. Use an encrypted remote backend with strict IAM, versioning, and tightly controlled state access.
- B. Commit the state file to a private Git repository instead.
- C. Base64-encode the state before uploading it.
- D. Rely on sensitive = true to remove secret values from state.

**Answer: A**

**Explanation:** Terraform state can contain sensitive values even when outputs are marked sensitive. Backend encryption and access control are the primary protections.

**Why the other options miss the mark:**
- **B:** Git history is a poor place for secrets and broadens access.
- **C:** Base64 is encoding, not encryption.
- **D:** sensitive hides values from normal CLI output; it does not guarantee they are absent from state.

---

### Q1069 — Advanced

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. A team stores Terraform state in object storage and the state contains database passwords generated by resources. Which design reduces the real exposure? Which answer best matches how you would handle this on a real system?

- A. Commit the state file to a private Git repository instead.
- B. Base64-encode the state before uploading it.
- C. Rely on sensitive = true to remove secret values from state.
- D. Use an encrypted remote backend with strict IAM, versioning, and tightly controlled state access.

**Answer: D**

**Explanation:** Terraform state can contain sensitive values even when outputs are marked sensitive. Backend encryption and access control are the primary protections.

**Why the other options miss the mark:**
- **A:** Git history is a poor place for secrets and broadens access.
- **B:** Base64 is encoding, not encryption.
- **C:** sensitive hides values from normal CLI output; it does not guarantee they are absent from state.

---

### Q1070 — Expert

You're reviewing this during a production change window. A module creates instances with count. The team inserts a new item in the middle of the input list and the plan wants to replace several existing instances. What design would make resource identity more stable? Pick the option you'd be willing to defend in a production review.

- A. Use for_each with stable keys that represent the real identity of each instance.
- B. Sort the list differently before every apply.
- C. Use a larger count and leave empty indexes for future growth.
- D. Add create_before_destroy to every resource and keep count.

**Answer: A**

**Explanation:** count ties identity to numeric position. Stable for_each keys prevent unrelated resources from changing identity when list ordering changes.

**Why the other options miss the mark:**
- **B:** Sorting still couples identity to position.
- **C:** Reserved numeric gaps are brittle and hard to maintain.
- **D:** Lifecycle rules can change replacement order but do not fix unstable addresses.

---

### Q1071 — Advanced

This comes up in an incident channel and the team wants a decision, not a textbook definition. A module creates instances with count. The team inserts a new item in the middle of the input list and the plan wants to replace several existing instances. What design would make resource identity more stable? What would you choose as the most technically sound next step?

- A. Sort the list differently before every apply.
- B. Use a larger count and leave empty indexes for future growth.
- C. Add create_before_destroy to every resource and keep count.
- D. Use for_each with stable keys that represent the real identity of each instance.

**Answer: D**

**Explanation:** count ties identity to numeric position. Stable for_each keys prevent unrelated resources from changing identity when list ordering changes.

**Why the other options miss the mark:**
- **A:** Sorting still couples identity to position.
- **B:** Reserved numeric gaps are brittle and hard to maintain.
- **C:** Lifecycle rules can change replacement order but do not fix unstable addresses.

---

### Q1072 — Advanced

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. A module creates instances with count. The team inserts a new item in the middle of the input list and the plan wants to replace several existing instances. What design would make resource identity more stable? Which answer best matches how you would handle this on a real system?

- A. Use a larger count and leave empty indexes for future growth.
- B. Add create_before_destroy to every resource and keep count.
- C. Use for_each with stable keys that represent the real identity of each instance.
- D. Sort the list differently before every apply.

**Answer: C**

**Explanation:** count ties identity to numeric position. Stable for_each keys prevent unrelated resources from changing identity when list ordering changes.

**Why the other options miss the mark:**
- **A:** Reserved numeric gaps are brittle and hard to maintain.
- **B:** Lifecycle rules can change replacement order but do not fix unstable addresses.
- **D:** Sorting still couples identity to position.

---

### Q1073 — Advanced

You're reviewing this during a production change window. A production resource already exists, and the team wants Terraform to manage it without recreating it. What is the correct approach? Pick the option you'd be willing to defend in a production review.

- A. Rename the live resource so Terraform can create a new one with the old name.
- B. Create an empty state entry manually and assume the attributes match.
- C. Run apply first and import only if Terraform reports a conflict.
- D. Write matching configuration, import the existing object into state, then review the plan until it is non-destructive.

**Answer: D**

**Explanation:** Import associates an existing remote object with a Terraform resource address. The follow-up plan is essential because configuration still defines the desired state.

**Why the other options miss the mark:**
- **A:** Renaming production infrastructure creates unnecessary risk.
- **B:** Hand-editing state without a precise mapping is unsafe.
- **C:** Apply may attempt creation or replacement before the object is under management.

---

### Q1074 — Advanced

This comes up in an incident channel and the team wants a decision, not a textbook definition. A production resource already exists, and the team wants Terraform to manage it without recreating it. What is the correct approach? What would you choose as the most technically sound next step?

- A. Create an empty state entry manually and assume the attributes match.
- B. Run apply first and import only if Terraform reports a conflict.
- C. Write matching configuration, import the existing object into state, then review the plan until it is non-destructive.
- D. Rename the live resource so Terraform can create a new one with the old name.

**Answer: C**

**Explanation:** Import associates an existing remote object with a Terraform resource address. The follow-up plan is essential because configuration still defines the desired state.

**Why the other options miss the mark:**
- **A:** Hand-editing state without a precise mapping is unsafe.
- **B:** Apply may attempt creation or replacement before the object is under management.
- **D:** Renaming production infrastructure creates unnecessary risk.

---

### Q1075 — Expert

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. A production resource already exists, and the team wants Terraform to manage it without recreating it. What is the correct approach? Which answer best matches how you would handle this on a real system?

- A. Run apply first and import only if Terraform reports a conflict.
- B. Write matching configuration, import the existing object into state, then review the plan until it is non-destructive.
- C. Rename the live resource so Terraform can create a new one with the old name.
- D. Create an empty state entry manually and assume the attributes match.

**Answer: B**

**Explanation:** Import associates an existing remote object with a Terraform resource address. The follow-up plan is essential because configuration still defines the desired state.

**Why the other options miss the mark:**
- **A:** Apply may attempt creation or replacement before the object is under management.
- **C:** Renaming production infrastructure creates unnecessary risk.
- **D:** Hand-editing state without a precise mapping is unsafe.

---

### Q1076 — Advanced

You're reviewing this during a production change window. A Terraform plan shows an unexpected destroy-and-create for a production database after a seemingly small configuration change. What should the reviewer do first? Pick the option you'd be willing to defend in a production review.

- A. Add prevent_destroy and assume the change will then succeed in place.
- B. Remove the database from configuration for one apply and add it back later.
- C. Inspect the plan and provider schema to identify which changed attribute forces replacement before approving anything.
- D. Approve it because Terraform plans are deterministic.

**Answer: C**

**Explanation:** A forced replacement is often caused by an immutable provider attribute. You need to understand that edge before deciding on migration, maintenance, or an alternative design.

**Why the other options miss the mark:**
- **A:** prevent_destroy blocks the dangerous action but does not make an immutable field mutable.
- **B:** Temporarily removing configuration commonly schedules a destroy and creates state confusion.
- **D:** Deterministic does not mean operationally acceptable.

---

### Q1077 — Expert

This comes up in an incident channel and the team wants a decision, not a textbook definition. A Terraform plan shows an unexpected destroy-and-create for a production database after a seemingly small configuration change. What should the reviewer do first? What would you choose as the most technically sound next step?

- A. Remove the database from configuration for one apply and add it back later.
- B. Inspect the plan and provider schema to identify which changed attribute forces replacement before approving anything.
- C. Approve it because Terraform plans are deterministic.
- D. Add prevent_destroy and assume the change will then succeed in place.

**Answer: B**

**Explanation:** A forced replacement is often caused by an immutable provider attribute. You need to understand that edge before deciding on migration, maintenance, or an alternative design.

**Why the other options miss the mark:**
- **A:** Temporarily removing configuration commonly schedules a destroy and creates state confusion.
- **C:** Deterministic does not mean operationally acceptable.
- **D:** prevent_destroy blocks the dangerous action but does not make an immutable field mutable.

---

### Q1078 — Advanced

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. A Terraform plan shows an unexpected destroy-and-create for a production database after a seemingly small configuration change. What should the reviewer do first? Which answer best matches how you would handle this on a real system?

- A. Inspect the plan and provider schema to identify which changed attribute forces replacement before approving anything.
- B. Approve it because Terraform plans are deterministic.
- C. Add prevent_destroy and assume the change will then succeed in place.
- D. Remove the database from configuration for one apply and add it back later.

**Answer: A**

**Explanation:** A forced replacement is often caused by an immutable provider attribute. You need to understand that edge before deciding on migration, maintenance, or an alternative design.

**Why the other options miss the mark:**
- **B:** Deterministic does not mean operationally acceptable.
- **C:** prevent_destroy blocks the dangerous action but does not make an immutable field mutable.
- **D:** Temporarily removing configuration commonly schedules a destroy and creates state confusion.

---

### Q1079 — Expert

You're reviewing this during a production change window. A provider upgrade changes defaults and the same Terraform code now produces a materially different plan in CI. What practice would have reduced this surprise? Pick the option you'd be willing to defend in a production review.

- A. Commit the .terraform directory to the repository.
- B. Constrain provider versions and update them deliberately through reviewed dependency changes.
- C. Always install the newest provider in every pipeline run.
- D. Pin Terraform itself but leave provider versions unconstrained.

**Answer: B**

**Explanation:** Provider behavior is part of the execution environment. Version constraints plus the dependency lock file make upgrades explicit and reviewable.

**Why the other options miss the mark:**
- **A:** The provider cache is not a source-of-truth mechanism and is platform-specific.
- **C:** Floating to latest makes reproducibility worse.
- **D:** Terraform CLI pinning does not control provider behavior.

---

### Q1080 — Advanced

This comes up in an incident channel and the team wants a decision, not a textbook definition. A provider upgrade changes defaults and the same Terraform code now produces a materially different plan in CI. What practice would have reduced this surprise? What would you choose as the most technically sound next step?

- A. Constrain provider versions and update them deliberately through reviewed dependency changes.
- B. Always install the newest provider in every pipeline run.
- C. Pin Terraform itself but leave provider versions unconstrained.
- D. Commit the .terraform directory to the repository.

**Answer: A**

**Explanation:** Provider behavior is part of the execution environment. Version constraints plus the dependency lock file make upgrades explicit and reviewable.

**Why the other options miss the mark:**
- **B:** Floating to latest makes reproducibility worse.
- **C:** Terraform CLI pinning does not control provider behavior.
- **D:** The provider cache is not a source-of-truth mechanism and is platform-specific.

---

### Q1081 — Advanced

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. A provider upgrade changes defaults and the same Terraform code now produces a materially different plan in CI. What practice would have reduced this surprise? Which answer best matches how you would handle this on a real system?

- A. Always install the newest provider in every pipeline run.
- B. Pin Terraform itself but leave provider versions unconstrained.
- C. Commit the .terraform directory to the repository.
- D. Constrain provider versions and update them deliberately through reviewed dependency changes.

**Answer: D**

**Explanation:** Provider behavior is part of the execution environment. Version constraints plus the dependency lock file make upgrades explicit and reviewable.

**Why the other options miss the mark:**
- **A:** Floating to latest makes reproducibility worse.
- **B:** Terraform CLI pinning does not control provider behavior.
- **C:** The provider cache is not a source-of-truth mechanism and is platform-specific.

---

### Q1082 — Advanced

You're reviewing this during a production change window. A shared Terraform module exposes dozens of low-level provider arguments, and each consuming team configures it differently. What would make the module safer to operate? Pick the option you'd be willing to defend in a production review.

- A. Expose a small opinionated interface with validated inputs and sensible defaults for the supported use cases.
- B. Expose every provider field so consumers never need a module update.
- C. Hide all variables and hard-code one environment inside the module.
- D. Duplicate the module per team so no interface has to be maintained.

**Answer: A**

**Explanation:** Good modules encode organizational defaults while preserving the few choices consumers genuinely need. Smaller interfaces reduce invalid combinations and supportability cost.

**Why the other options miss the mark:**
- **B:** Mirroring every provider option removes most of the value of an abstraction.
- **C:** Hard-coding an environment makes reuse impossible.
- **D:** Forks multiply drift and maintenance effort.

---

### Q1083 — Advanced

This comes up in an incident channel and the team wants a decision, not a textbook definition. A shared Terraform module exposes dozens of low-level provider arguments, and each consuming team configures it differently. What would make the module safer to operate? What would you choose as the most technically sound next step?

- A. Expose every provider field so consumers never need a module update.
- B. Hide all variables and hard-code one environment inside the module.
- C. Duplicate the module per team so no interface has to be maintained.
- D. Expose a small opinionated interface with validated inputs and sensible defaults for the supported use cases.

**Answer: D**

**Explanation:** Good modules encode organizational defaults while preserving the few choices consumers genuinely need. Smaller interfaces reduce invalid combinations and supportability cost.

**Why the other options miss the mark:**
- **A:** Mirroring every provider option removes most of the value of an abstraction.
- **B:** Hard-coding an environment makes reuse impossible.
- **C:** Forks multiply drift and maintenance effort.

---

### Q1084 — Expert

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. A shared Terraform module exposes dozens of low-level provider arguments, and each consuming team configures it differently. What would make the module safer to operate? Which answer best matches how you would handle this on a real system?

- A. Hide all variables and hard-code one environment inside the module.
- B. Duplicate the module per team so no interface has to be maintained.
- C. Expose a small opinionated interface with validated inputs and sensible defaults for the supported use cases.
- D. Expose every provider field so consumers never need a module update.

**Answer: C**

**Explanation:** Good modules encode organizational defaults while preserving the few choices consumers genuinely need. Smaller interfaces reduce invalid combinations and supportability cost.

**Why the other options miss the mark:**
- **A:** Hard-coding an environment makes reuse impossible.
- **B:** Forks multiply drift and maintenance effort.
- **D:** Mirroring every provider option removes most of the value of an abstraction.

---

### Q1085 — Advanced

You're reviewing this during a production change window. A team uses a random_password resource and marks the output sensitive, then assumes the password can no longer be retrieved from Terraform state. What is the correct interpretation? Pick the option you'd be willing to defend in a production review.

- A. Sensitive values are encrypted automatically inside state.
- B. Sensitive values are stored only in memory and disappear after apply.
- C. The state stores a one-way hash rather than the generated password.
- D. The password can still exist in state, so state access must be treated as secret access.

**Answer: D**

**Explanation:** The sensitive flag mainly controls display. State may contain the clear value required to manage the resource.

**Why the other options miss the mark:**
- **A:** Sensitive does not imply field-level encryption in state.
- **B:** Terraform needs persistent state across runs.
- **C:** Generated credentials are normally stored as values, not hashes, unless a provider explicitly behaves otherwise.

---

### Q1086 — Expert

This comes up in an incident channel and the team wants a decision, not a textbook definition. A team uses a random_password resource and marks the output sensitive, then assumes the password can no longer be retrieved from Terraform state. What is the correct interpretation? What would you choose as the most technically sound next step?

- A. Sensitive values are stored only in memory and disappear after apply.
- B. The state stores a one-way hash rather than the generated password.
- C. The password can still exist in state, so state access must be treated as secret access.
- D. Sensitive values are encrypted automatically inside state.

**Answer: C**

**Explanation:** The sensitive flag mainly controls display. State may contain the clear value required to manage the resource.

**Why the other options miss the mark:**
- **A:** Terraform needs persistent state across runs.
- **B:** Generated credentials are normally stored as values, not hashes, unless a provider explicitly behaves otherwise.
- **D:** Sensitive does not imply field-level encryption in state.

---

### Q1087 — Advanced

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. A team uses a random_password resource and marks the output sensitive, then assumes the password can no longer be retrieved from Terraform state. What is the correct interpretation? Which answer best matches how you would handle this on a real system?

- A. The state stores a one-way hash rather than the generated password.
- B. The password can still exist in state, so state access must be treated as secret access.
- C. Sensitive values are encrypted automatically inside state.
- D. Sensitive values are stored only in memory and disappear after apply.

**Answer: B**

**Explanation:** The sensitive flag mainly controls display. State may contain the clear value required to manage the resource.

**Why the other options miss the mark:**
- **A:** Generated credentials are normally stored as values, not hashes, unless a provider explicitly behaves otherwise.
- **C:** Sensitive does not imply field-level encryption in state.
- **D:** Terraform needs persistent state across runs.

---

### Q1088 — Expert

You're reviewing this during a production change window. A module sets prevent_destroy on a critical resource. Months later, a legitimate architecture migration requires replacing that resource. What does the lifecycle rule actually provide? Pick the option you'd be willing to defend in a production review.

- A. Automatic zero-downtime migration to the replacement resource.
- B. An instruction for Terraform to modify every immutable field in place.
- C. A guardrail that blocks the destroy in Terraform until the team deliberately changes the lifecycle/configuration and migration plan.
- D. A guarantee that the cloud provider can never delete the resource.

**Answer: C**

**Explanation:** prevent_destroy is a Terraform planning safeguard. It does not change provider capabilities or design the migration for you.

**Why the other options miss the mark:**
- **A:** Migration sequencing remains an engineering task.
- **B:** Immutable provider fields remain immutable.
- **D:** Out-of-band deletion is still possible.

---

### Q1089 — Advanced

This comes up in an incident channel and the team wants a decision, not a textbook definition. A module sets prevent_destroy on a critical resource. Months later, a legitimate architecture migration requires replacing that resource. What does the lifecycle rule actually provide? What would you choose as the most technically sound next step?

- A. An instruction for Terraform to modify every immutable field in place.
- B. A guardrail that blocks the destroy in Terraform until the team deliberately changes the lifecycle/configuration and migration plan.
- C. A guarantee that the cloud provider can never delete the resource.
- D. Automatic zero-downtime migration to the replacement resource.

**Answer: B**

**Explanation:** prevent_destroy is a Terraform planning safeguard. It does not change provider capabilities or design the migration for you.

**Why the other options miss the mark:**
- **A:** Immutable provider fields remain immutable.
- **C:** Out-of-band deletion is still possible.
- **D:** Migration sequencing remains an engineering task.

---

### Q1090 — Advanced

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. A module sets prevent_destroy on a critical resource. Months later, a legitimate architecture migration requires replacing that resource. What does the lifecycle rule actually provide? Which answer best matches how you would handle this on a real system?

- A. A guardrail that blocks the destroy in Terraform until the team deliberately changes the lifecycle/configuration and migration plan.
- B. A guarantee that the cloud provider can never delete the resource.
- C. Automatic zero-downtime migration to the replacement resource.
- D. An instruction for Terraform to modify every immutable field in place.

**Answer: A**

**Explanation:** prevent_destroy is a Terraform planning safeguard. It does not change provider capabilities or design the migration for you.

**Why the other options miss the mark:**
- **B:** Out-of-band deletion is still possible.
- **C:** Migration sequencing remains an engineering task.
- **D:** Immutable provider fields remain immutable.

---

## eBPF and Linux Observability

### Q1091 — Expert

You're reviewing this during a production change window. You need a stable kernel event for process execution across many kernel builds, and a tracepoint already exposes the required fields. Why prefer the tracepoint over a kprobe when possible? Pick the option you'd be willing to defend in a production review.

- A. Tracepoints are intentional kernel instrumentation interfaces and are generally more stable than probing an internal function symbol.
- B. Tracepoints execute entirely in user space.
- C. kprobes cannot observe kernel functions at all.
- D. Tracepoints never change fields between any kernel versions.

**Answer: A**

**Explanation:** kprobes are powerful but couple to implementation details. Tracepoints are usually the safer compatibility choice when they expose what you need.

**Why the other options miss the mark:**
- **B:** Tracepoints are kernel-side events consumed by tracing tools.
- **C:** Observing kernel functions is exactly what kprobes can do.
- **D:** Tracepoints are more stable, not an absolute forever guarantee.

---

### Q1092 — Advanced

This comes up in an incident channel and the team wants a decision, not a textbook definition. You need a stable kernel event for process execution across many kernel builds, and a tracepoint already exposes the required fields. Why prefer the tracepoint over a kprobe when possible? What would you choose as the most technically sound next step?

- A. Tracepoints execute entirely in user space.
- B. kprobes cannot observe kernel functions at all.
- C. Tracepoints never change fields between any kernel versions.
- D. Tracepoints are intentional kernel instrumentation interfaces and are generally more stable than probing an internal function symbol.

**Answer: D**

**Explanation:** kprobes are powerful but couple to implementation details. Tracepoints are usually the safer compatibility choice when they expose what you need.

**Why the other options miss the mark:**
- **A:** Tracepoints are kernel-side events consumed by tracing tools.
- **B:** Observing kernel functions is exactly what kprobes can do.
- **C:** Tracepoints are more stable, not an absolute forever guarantee.

---

### Q1093 — Advanced

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. You need a stable kernel event for process execution across many kernel builds, and a tracepoint already exposes the required fields. Why prefer the tracepoint over a kprobe when possible? Which answer best matches how you would handle this on a real system?

- A. kprobes cannot observe kernel functions at all.
- B. Tracepoints never change fields between any kernel versions.
- C. Tracepoints are intentional kernel instrumentation interfaces and are generally more stable than probing an internal function symbol.
- D. Tracepoints execute entirely in user space.

**Answer: C**

**Explanation:** kprobes are powerful but couple to implementation details. Tracepoints are usually the safer compatibility choice when they expose what you need.

**Why the other options miss the mark:**
- **A:** Observing kernel functions is exactly what kprobes can do.
- **B:** Tracepoints are more stable, not an absolute forever guarantee.
- **D:** Tracepoints are kernel-side events consumed by tracing tools.

---

### Q1094 — Advanced

You're reviewing this during a production change window. An eBPF program is rejected before loading because the verifier cannot prove a memory access is safe. What is the verifier doing? Pick the option you'd be willing to defend in a production review.

- A. Benchmarking the program and rejecting anything slower than 1 ms.
- B. Compiling the program into a privileged kernel module.
- C. Checking whether the user has enough free disk space for maps.
- D. Statically checking program paths, bounds, types, and other safety properties before allowing kernel execution.

**Answer: D**

**Explanation:** The verifier is a core safety mechanism that prevents unsafe eBPF bytecode from running in kernel context.

**Why the other options miss the mark:**
- **A:** Performance benchmarking is not its primary load-time job.
- **B:** eBPF is not converted into an arbitrary kernel module.
- **C:** Disk capacity is unrelated to pointer-safety proof.

---

### Q1095 — Advanced

This comes up in an incident channel and the team wants a decision, not a textbook definition. An eBPF program is rejected before loading because the verifier cannot prove a memory access is safe. What is the verifier doing? What would you choose as the most technically sound next step?

- A. Compiling the program into a privileged kernel module.
- B. Checking whether the user has enough free disk space for maps.
- C. Statically checking program paths, bounds, types, and other safety properties before allowing kernel execution.
- D. Benchmarking the program and rejecting anything slower than 1 ms.

**Answer: C**

**Explanation:** The verifier is a core safety mechanism that prevents unsafe eBPF bytecode from running in kernel context.

**Why the other options miss the mark:**
- **A:** eBPF is not converted into an arbitrary kernel module.
- **B:** Disk capacity is unrelated to pointer-safety proof.
- **D:** Performance benchmarking is not its primary load-time job.

---

### Q1096 — Expert

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. An eBPF program is rejected before loading because the verifier cannot prove a memory access is safe. What is the verifier doing? Which answer best matches how you would handle this on a real system?

- A. Checking whether the user has enough free disk space for maps.
- B. Statically checking program paths, bounds, types, and other safety properties before allowing kernel execution.
- C. Benchmarking the program and rejecting anything slower than 1 ms.
- D. Compiling the program into a privileged kernel module.

**Answer: B**

**Explanation:** The verifier is a core safety mechanism that prevents unsafe eBPF bytecode from running in kernel context.

**Why the other options miss the mark:**
- **A:** Disk capacity is unrelated to pointer-safety proof.
- **C:** Performance benchmarking is not its primary load-time job.
- **D:** eBPF is not converted into an arbitrary kernel module.

---

### Q1097 — Advanced

You're reviewing this during a production change window. You want to measure calls to a function inside a user-space database process without recompiling that application. Which eBPF attachment mechanism fits? Pick the option you'd be willing to defend in a production review.

- A. An XDP program on the network interface only.
- B. A filesystem quota rule.
- C. A uprobe/uretprobe on the relevant user-space binary or library symbol.
- D. A kprobe on the Kubernetes scheduler.

**Answer: C**

**Explanation:** uprobes instrument user-space code; kprobes target kernel code, while XDP targets the network receive path.

**Why the other options miss the mark:**
- **A:** XDP cannot directly instrument an arbitrary application function.
- **B:** Quota rules are not tracing attachments.
- **D:** The scheduler is unrelated to the target user function.

---

### Q1098 — Expert

This comes up in an incident channel and the team wants a decision, not a textbook definition. You want to measure calls to a function inside a user-space database process without recompiling that application. Which eBPF attachment mechanism fits? What would you choose as the most technically sound next step?

- A. A filesystem quota rule.
- B. A uprobe/uretprobe on the relevant user-space binary or library symbol.
- C. A kprobe on the Kubernetes scheduler.
- D. An XDP program on the network interface only.

**Answer: B**

**Explanation:** uprobes instrument user-space code; kprobes target kernel code, while XDP targets the network receive path.

**Why the other options miss the mark:**
- **A:** Quota rules are not tracing attachments.
- **C:** The scheduler is unrelated to the target user function.
- **D:** XDP cannot directly instrument an arbitrary application function.

---

### Q1099 — Advanced

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. You want to measure calls to a function inside a user-space database process without recompiling that application. Which eBPF attachment mechanism fits? Which answer best matches how you would handle this on a real system?

- A. A uprobe/uretprobe on the relevant user-space binary or library symbol.
- B. A kprobe on the Kubernetes scheduler.
- C. An XDP program on the network interface only.
- D. A filesystem quota rule.

**Answer: A**

**Explanation:** uprobes instrument user-space code; kprobes target kernel code, while XDP targets the network receive path.

**Why the other options miss the mark:**
- **B:** The scheduler is unrelated to the target user function.
- **C:** XDP cannot directly instrument an arbitrary application function.
- **D:** Quota rules are not tracing attachments.

---

### Q1100 — Expert

You're reviewing this during a production change window. An eBPF tool stores a map entry keyed by full URL, PID, container ID, user ID, and stack ID for every observed request. Memory use grows continuously. What is the likely design issue? Pick the option you'd be willing to defend in a production review.

- A. Increasing trace frequency will reduce the number of unique keys.
- B. The key has unbounded cardinality and needs aggregation, bounded maps, eviction, sampling, or a different telemetry model.
- C. eBPF maps are always stored on disk, so disk cleanup is required.
- D. The verifier duplicates every map entry four times.

**Answer: B**

**Explanation:** Kernel maps consume finite memory. High-dimensional unique keys can explode state just like high-cardinality metrics.

**Why the other options miss the mark:**
- **A:** More events normally create more state, not less.
- **C:** Maps are kernel memory objects, not ordinary disk tables.
- **D:** The verifier does not multiply runtime entries this way.

---

### Q1101 — Advanced

This comes up in an incident channel and the team wants a decision, not a textbook definition. An eBPF tool stores a map entry keyed by full URL, PID, container ID, user ID, and stack ID for every observed request. Memory use grows continuously. What is the likely design issue? What would you choose as the most technically sound next step?

- A. The key has unbounded cardinality and needs aggregation, bounded maps, eviction, sampling, or a different telemetry model.
- B. eBPF maps are always stored on disk, so disk cleanup is required.
- C. The verifier duplicates every map entry four times.
- D. Increasing trace frequency will reduce the number of unique keys.

**Answer: A**

**Explanation:** Kernel maps consume finite memory. High-dimensional unique keys can explode state just like high-cardinality metrics.

**Why the other options miss the mark:**
- **B:** Maps are kernel memory objects, not ordinary disk tables.
- **C:** The verifier does not multiply runtime entries this way.
- **D:** More events normally create more state, not less.

---

### Q1102 — Advanced

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. An eBPF tool stores a map entry keyed by full URL, PID, container ID, user ID, and stack ID for every observed request. Memory use grows continuously. What is the likely design issue? Which answer best matches how you would handle this on a real system?

- A. eBPF maps are always stored on disk, so disk cleanup is required.
- B. The verifier duplicates every map entry four times.
- C. Increasing trace frequency will reduce the number of unique keys.
- D. The key has unbounded cardinality and needs aggregation, bounded maps, eviction, sampling, or a different telemetry model.

**Answer: D**

**Explanation:** Kernel maps consume finite memory. High-dimensional unique keys can explode state just like high-cardinality metrics.

**Why the other options miss the mark:**
- **A:** Maps are kernel memory objects, not ordinary disk tables.
- **B:** The verifier does not multiply runtime entries this way.
- **C:** More events normally create more state, not less.

---

### Q1103 — Advanced

You're reviewing this during a production change window. An eBPF binary should run across multiple compatible Linux kernel versions without being rebuilt for every exact struct layout. What does CO-RE rely on? Pick the option you'd be willing to defend in a production review.

- A. BTF type information and relocations so field offsets/types can be adapted at load time.
- B. A Docker image containing every kernel source tree.
- C. Disabling the eBPF verifier on older kernels.
- D. Hard-coding kernel memory offsets discovered on the developer laptop.

**Answer: A**

**Explanation:** Compile Once – Run Everywhere uses BTF metadata and libbpf relocation logic to reduce kernel-version coupling.

**Why the other options miss the mark:**
- **B:** Bundling source trees is not how CO-RE relocates programs.
- **C:** Verifier bypass is neither required nor safe.
- **D:** Hard-coded offsets are exactly the compatibility problem CO-RE addresses.

---

### Q1104 — Advanced

This comes up in an incident channel and the team wants a decision, not a textbook definition. An eBPF binary should run across multiple compatible Linux kernel versions without being rebuilt for every exact struct layout. What does CO-RE rely on? What would you choose as the most technically sound next step?

- A. A Docker image containing every kernel source tree.
- B. Disabling the eBPF verifier on older kernels.
- C. Hard-coding kernel memory offsets discovered on the developer laptop.
- D. BTF type information and relocations so field offsets/types can be adapted at load time.

**Answer: D**

**Explanation:** Compile Once – Run Everywhere uses BTF metadata and libbpf relocation logic to reduce kernel-version coupling.

**Why the other options miss the mark:**
- **A:** Bundling source trees is not how CO-RE relocates programs.
- **B:** Verifier bypass is neither required nor safe.
- **C:** Hard-coded offsets are exactly the compatibility problem CO-RE addresses.

---

### Q1105 — Expert

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. An eBPF binary should run across multiple compatible Linux kernel versions without being rebuilt for every exact struct layout. What does CO-RE rely on? Which answer best matches how you would handle this on a real system?

- A. Disabling the eBPF verifier on older kernels.
- B. Hard-coding kernel memory offsets discovered on the developer laptop.
- C. BTF type information and relocations so field offsets/types can be adapted at load time.
- D. A Docker image containing every kernel source tree.

**Answer: C**

**Explanation:** Compile Once – Run Everywhere uses BTF metadata and libbpf relocation logic to reduce kernel-version coupling.

**Why the other options miss the mark:**
- **A:** Verifier bypass is neither required nor safe.
- **B:** Hard-coded offsets are exactly the compatibility problem CO-RE addresses.
- **D:** Bundling source trees is not how CO-RE relocates programs.

---

### Q1106 — Advanced

You're reviewing this during a production change window. Users report periodic latency spikes and you suspect packet loss between nodes. Which eBPF signal is directly useful? Pick the option you'd be willing to defend in a production review.

- A. Count only successful DNS lookups.
- B. Trace file open syscalls and ignore networking events.
- C. Measure process RSS once per hour.
- D. Trace TCP retransmissions and correlate them with the affected sockets, processes, pods, and destinations.

**Answer: D**

**Explanation:** Retransmissions provide direct evidence of TCP recovering from loss or severe reordering. Context lets you connect that network signal to workloads.

**Why the other options miss the mark:**
- **A:** DNS success does not rule out packet loss after resolution.
- **B:** File opens are unrelated to TCP recovery behavior.
- **C:** RSS does not explain transient network latency.

---

### Q1107 — Expert

This comes up in an incident channel and the team wants a decision, not a textbook definition. Users report periodic latency spikes and you suspect packet loss between nodes. Which eBPF signal is directly useful? What would you choose as the most technically sound next step?

- A. Trace file open syscalls and ignore networking events.
- B. Measure process RSS once per hour.
- C. Trace TCP retransmissions and correlate them with the affected sockets, processes, pods, and destinations.
- D. Count only successful DNS lookups.

**Answer: C**

**Explanation:** Retransmissions provide direct evidence of TCP recovering from loss or severe reordering. Context lets you connect that network signal to workloads.

**Why the other options miss the mark:**
- **A:** File opens are unrelated to TCP recovery behavior.
- **B:** RSS does not explain transient network latency.
- **D:** DNS success does not rule out packet loss after resolution.

---

### Q1108 — Advanced

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. Users report periodic latency spikes and you suspect packet loss between nodes. Which eBPF signal is directly useful? Which answer best matches how you would handle this on a real system?

- A. Measure process RSS once per hour.
- B. Trace TCP retransmissions and correlate them with the affected sockets, processes, pods, and destinations.
- C. Count only successful DNS lookups.
- D. Trace file open syscalls and ignore networking events.

**Answer: B**

**Explanation:** Retransmissions provide direct evidence of TCP recovering from loss or severe reordering. Context lets you connect that network signal to workloads.

**Why the other options miss the mark:**
- **A:** RSS does not explain transient network latency.
- **C:** DNS success does not rule out packet loss after resolution.
- **D:** File opens are unrelated to TCP recovery behavior.

---

### Q1109 — Expert

You're reviewing this during a production change window. A request handler has low on-CPU time but very high wall-clock latency. You want to know what it was waiting for. Which technique is most useful? Pick the option you'd be willing to defend in a production review.

- A. A static list of loaded kernel modules.
- B. Counting container image layers.
- C. Off-CPU profiling that records blocked stack traces and wait duration.
- D. Only a CPU flame graph built from on-CPU samples.

**Answer: C**

**Explanation:** On-CPU profiles explain where CPU is spent; off-CPU profiles explain sleeping, blocking, lock, I/O, and scheduler wait time.

**Why the other options miss the mark:**
- **A:** Kernel module inventory does not attribute request latency.
- **B:** Image layers are unrelated to runtime blocking.
- **D:** On-CPU sampling can completely miss long waits.

---

### Q1110 — Advanced

This comes up in an incident channel and the team wants a decision, not a textbook definition. A request handler has low on-CPU time but very high wall-clock latency. You want to know what it was waiting for. Which technique is most useful? What would you choose as the most technically sound next step?

- A. Counting container image layers.
- B. Off-CPU profiling that records blocked stack traces and wait duration.
- C. Only a CPU flame graph built from on-CPU samples.
- D. A static list of loaded kernel modules.

**Answer: B**

**Explanation:** On-CPU profiles explain where CPU is spent; off-CPU profiles explain sleeping, blocking, lock, I/O, and scheduler wait time.

**Why the other options miss the mark:**
- **A:** Image layers are unrelated to runtime blocking.
- **C:** On-CPU sampling can completely miss long waits.
- **D:** Kernel module inventory does not attribute request latency.

---

### Q1111 — Advanced

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. A request handler has low on-CPU time but very high wall-clock latency. You want to know what it was waiting for. Which technique is most useful? Which answer best matches how you would handle this on a real system?

- A. Off-CPU profiling that records blocked stack traces and wait duration.
- B. Only a CPU flame graph built from on-CPU samples.
- C. A static list of loaded kernel modules.
- D. Counting container image layers.

**Answer: A**

**Explanation:** On-CPU profiles explain where CPU is spent; off-CPU profiles explain sleeping, blocking, lock, I/O, and scheduler wait time.

**Why the other options miss the mark:**
- **B:** On-CPU sampling can completely miss long waits.
- **C:** Kernel module inventory does not attribute request latency.
- **D:** Image layers are unrelated to runtime blocking.

---

### Q1112 — Advanced

You're reviewing this during a production change window. A new release unexpectedly starts spawning shells and opening sensitive files inside a container. How can eBPF help investigate? Pick the option you'd be willing to defend in a production review.

- A. Only network packet capture can observe process execution.
- B. Trace process-exec and file-related syscalls with container/cgroup context to build a timeline of runtime behavior.
- C. eBPF can prove the developer's intent from source code automatically.
- D. eBPF will prevent every suspicious syscall without any policy program.

**Answer: B**

**Explanation:** Runtime syscall telemetry can show what actually executed and which files were touched, which is valuable for incident investigation and policy development.

**Why the other options miss the mark:**
- **A:** Process execution is not a network-only event.
- **C:** Telemetry shows behavior, not human intent.
- **D:** Observation and enforcement are separate program/policy choices.

---

### Q1113 — Advanced

This comes up in an incident channel and the team wants a decision, not a textbook definition. A new release unexpectedly starts spawning shells and opening sensitive files inside a container. How can eBPF help investigate? What would you choose as the most technically sound next step?

- A. Trace process-exec and file-related syscalls with container/cgroup context to build a timeline of runtime behavior.
- B. eBPF can prove the developer's intent from source code automatically.
- C. eBPF will prevent every suspicious syscall without any policy program.
- D. Only network packet capture can observe process execution.

**Answer: A**

**Explanation:** Runtime syscall telemetry can show what actually executed and which files were touched, which is valuable for incident investigation and policy development.

**Why the other options miss the mark:**
- **B:** Telemetry shows behavior, not human intent.
- **C:** Observation and enforcement are separate program/policy choices.
- **D:** Process execution is not a network-only event.

---

### Q1114 — Expert

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. A new release unexpectedly starts spawning shells and opening sensitive files inside a container. How can eBPF help investigate? Which answer best matches how you would handle this on a real system?

- A. eBPF can prove the developer's intent from source code automatically.
- B. eBPF will prevent every suspicious syscall without any policy program.
- C. Only network packet capture can observe process execution.
- D. Trace process-exec and file-related syscalls with container/cgroup context to build a timeline of runtime behavior.

**Answer: D**

**Explanation:** Runtime syscall telemetry can show what actually executed and which files were touched, which is valuable for incident investigation and policy development.

**Why the other options miss the mark:**
- **A:** Telemetry shows behavior, not human intent.
- **B:** Observation and enforcement are separate program/policy choices.
- **C:** Process execution is not a network-only event.

---

### Q1115 — Advanced

You're reviewing this during a production change window. A host runs hundreds of containers and a kernel-level trace sees all TCP connections. You need to attribute each event to the originating workload. What context is especially useful? Pick the option you'd be willing to defend in a production review.

- A. cgroup/container metadata that can be mapped back to pod, namespace, or service identity.
- B. The host BIOS serial number only.
- C. The inode number of /etc/hosts.
- D. The display resolution of the node console.

**Answer: A**

**Explanation:** Cgroups are a natural kernel boundary for containerized workloads and can be enriched with orchestrator metadata for workload attribution.

**Why the other options miss the mark:**
- **B:** A host serial identifies the machine, not the originating container.
- **C:** That inode does not establish workload identity.
- **D:** Display configuration is irrelevant.

---

### Q1116 — Expert

This comes up in an incident channel and the team wants a decision, not a textbook definition. A host runs hundreds of containers and a kernel-level trace sees all TCP connections. You need to attribute each event to the originating workload. What context is especially useful? What would you choose as the most technically sound next step?

- A. The host BIOS serial number only.
- B. The inode number of /etc/hosts.
- C. The display resolution of the node console.
- D. cgroup/container metadata that can be mapped back to pod, namespace, or service identity.

**Answer: D**

**Explanation:** Cgroups are a natural kernel boundary for containerized workloads and can be enriched with orchestrator metadata for workload attribution.

**Why the other options miss the mark:**
- **A:** A host serial identifies the machine, not the originating container.
- **B:** That inode does not establish workload identity.
- **C:** Display configuration is irrelevant.

---

### Q1117 — Advanced

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. A host runs hundreds of containers and a kernel-level trace sees all TCP connections. You need to attribute each event to the originating workload. What context is especially useful? Which answer best matches how you would handle this on a real system?

- A. The inode number of /etc/hosts.
- B. The display resolution of the node console.
- C. cgroup/container metadata that can be mapped back to pod, namespace, or service identity.
- D. The host BIOS serial number only.

**Answer: C**

**Explanation:** Cgroups are a natural kernel boundary for containerized workloads and can be enriched with orchestrator metadata for workload attribution.

**Why the other options miss the mark:**
- **A:** That inode does not establish workload identity.
- **B:** Display configuration is irrelevant.
- **D:** A host serial identifies the machine, not the originating container.

---

### Q1118 — Expert

You're reviewing this during a production change window. A team wants to trace every syscall with full stacks on every production host indefinitely. What should you challenge? Pick the option you'd be willing to defend in a production review.

- A. eBPF has literally zero runtime overhead, so no limits are needed.
- B. Collect everything first and decide what it means years later.
- C. Disable kernel security controls so tracing is faster.
- D. The collection cost, data volume, privacy, and cardinality; use targeted probes, filtering, aggregation, or sampling matched to the diagnostic goal.

**Answer: D**

**Explanation:** eBPF can be efficient, but instrumentation still executes and emits data. Production observability needs an explicit cost and data-governance budget.

**Why the other options miss the mark:**
- **A:** No observability mechanism is universally free.
- **B:** Unlimited collection creates cost and signal-to-noise problems.
- **C:** Weakening security is not a valid performance optimization.

---

### Q1119 — Advanced

This comes up in an incident channel and the team wants a decision, not a textbook definition. A team wants to trace every syscall with full stacks on every production host indefinitely. What should you challenge? What would you choose as the most technically sound next step?

- A. Collect everything first and decide what it means years later.
- B. Disable kernel security controls so tracing is faster.
- C. The collection cost, data volume, privacy, and cardinality; use targeted probes, filtering, aggregation, or sampling matched to the diagnostic goal.
- D. eBPF has literally zero runtime overhead, so no limits are needed.

**Answer: C**

**Explanation:** eBPF can be efficient, but instrumentation still executes and emits data. Production observability needs an explicit cost and data-governance budget.

**Why the other options miss the mark:**
- **A:** Unlimited collection creates cost and signal-to-noise problems.
- **B:** Weakening security is not a valid performance optimization.
- **D:** No observability mechanism is universally free.

---

### Q1120 — Advanced

A teammate proposes a quick fix; before approving it, you look at the operational trade-off. A team wants to trace every syscall with full stacks on every production host indefinitely. What should you challenge? Which answer best matches how you would handle this on a real system?

- A. Disable kernel security controls so tracing is faster.
- B. The collection cost, data volume, privacy, and cardinality; use targeted probes, filtering, aggregation, or sampling matched to the diagnostic goal.
- C. eBPF has literally zero runtime overhead, so no limits are needed.
- D. Collect everything first and decide what it means years later.

**Answer: B**

**Explanation:** eBPF can be efficient, but instrumentation still executes and emits data. Production observability needs an explicit cost and data-governance budget.

**Why the other options miss the mark:**
- **A:** Weakening security is not a valid performance optimization.
- **C:** No observability mechanism is universally free.
- **D:** Unlimited collection creates cost and signal-to-noise problems.

---
