---
id: "google/tunix"
name: "google/tunix"
url: "https://github.com/google/tunix"
date: "2026-07-16"
source: "awesome-llm-agents"
category: "awesome_lists"
kind: "agent_framework"
compatibility: 80
momentum: 100
risk: 30
integration_effort: 50
expected_gain: 85
composite: 80
replacement_target: ""
related_articles: [{"title":"\"What should I do?\" - consider post-training","date":"2026-06-26","topic":"Local LLMs","similarity":0.267,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/Local LLMs/2026-06-26/14-what-should-i-do-consider-post-training.md"},{"title":"Agent-Native Immune System: Architecture, Taxonomy, and Engineering","date":"2026-06-26","topic":"AI agents","similarity":0.21,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-06-26/06-agent-native-immune-system-architecture-taxonomy-and-engineering.md"},{"title":"I pretrained and post trained a 500M parameter LLM and 330M parameter Image generator from scratch","date":"2026-06-21","topic":"Local LLMs","similarity":0.204,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/Local LLMs/2026-06-21/17-i-pretrained-and-post-trained-a-500m-parameter-llm-and-330m-parameter-.md"}]
pros: ["Recently updated (2026-07-16)","Apache-2.0 license","2369 GitHub stars","GitHub Actions/CI detected"]
cons: ["No clear install command found in README","README mentions credentials or API tokens"]
readme_quality: 85
has_ci: true
has_tests: true
setup_steps_count: 0
dependency_files: [{"name":"pyproject.toml","summary":"python project; deps name, version, authors, description, requires-python, readme, license, classifiers"}]
install_commands: []
risk_flags: ["README mentions credentials or API tokens"]
status: "new"
---

# google/tunix

A Lightweight LLM Post-Training Library

URL: https://github.com/google/tunix

## Why it matters
You saved an article on 2026-06-26 about Local LLMs; this candidate overlaps with ""What should I do?" - consider post-training" and may turn that reading into a practical workflow improvement.

## Pros
+ Recently updated (2026-07-16)
+ Apache-2.0 license
+ 2369 GitHub stars
+ GitHub Actions/CI detected

## Cons
- No clear install command found in README
- README mentions credentials or API tokens

## Repository Inspection
README quality: 85/100
CI detected: yes
Tests mentioned: yes
Setup steps estimate: 0

Dependency files:
- pyproject.toml: python project; deps name, version, authors, description, requires-python, readme, license, classifiers

Install commands found:
- none detected

Risk flags:
- README mentions credentials or API tokens

## Install
Nothing runs automatically. Review the upstream README before running any install command.

## README
# Tunix: A Lightweight LLM Post-Training Library

<div align="left">

<a href="https://tunix.readthedocs.io/en/latest/index.html"><img src="https://img.shields.io/badge/documentation-blue"></a>

</div>

**Tunix (Tune-in-JAX)** is a JAX based library designed to streamline the
post-training of Large Language Models. It provides efficient and scalable
support for:

- **SOTA Training performance on TPUs**
- **Supervised Fine-Tuning**
- **Reinforcement Learning (RL)**
- **Agentic RL**

Tunix leverages the power of JAX for accelerated computation and seamless
integration with JAX-based modeling frameworks like
[Flax NNX](https://flax.readthedocs.io/en/latest/nnx_basics.html), and
integrates with high-performance inference engines like vLLM and SGLang-JAX for
rollout. **For our detailed documentation, please refer to the [Tunix Website](https://tunix.readthedocs.io/en/latest/index.html)**.


**Current Status: V2 Release**

Tunix is under active development. Our team is actively working on expanding its
capabilities, usability and performance. Stay tuned for upcoming updates and new
features! See [Talks and Announcements](https://tunix.readthedocs.io/en/latest/talks.html) for latest updates, talks, and blog posts.


## High Level Architecture
Tunix serves as a state-of-the-art post-training library within the JAX training
stack, positioned to leverage foundational tools like Flax, Optax, Orbax, etc.
for efficient model refinement. It sits as an intermediate layer between these
core utilities and optimized models like MaxText and MaxDiffusion, streamlining
tuning workflows on top of the XLA and JAX infrastructure. See [Design Overview](https://tunix.readthedocs.io/en/latest/design.html) for more details on the architecture.

![Tunix in JAX ecosystem](docs/images/tunix_in_jax_ecosystem.png)

## Key Features
-   **[Supervised Fine-Tuning (SFT)](https://tunix.readthedocs.io/en/latest/algorithms.html)**:
    -   Full Weights Fine-Tuning
    -   [PEFT](https://tunix.readthedocs.io/en/latest/performance.html#peft-with-lora) (Parameter-Efficient
        Fine-Tuning)
    -   [DPO](https://arxiv.org/abs/2305.18290) (Direct Preference Optimization)
      -   [ORPO](https://arxiv.org/abs/2403.07691) (Odds Ratio Preference Optimization)
-   **[Reinforcement Learning (RL)](https://tunix.readthedocs.io/en/latest/algorithms.html)**:
    -   [PPO](https://arxiv.org/abs/1707.06347) (Proximal Policy Optimization)
    -   [GRPO](https://arxiv.org/abs/2402.03300) (Group Relative Policy
        Optimization)
      -   [GSPO-Token](https://arxiv.org/abs/2507.18071) (Token-level Group
          Sequence Policy Optimization)
      -   [DAPO](https://arxiv.org/abs/2503.14476) (Direct Alignment via Preference
          Optimization)
      -   [Dr.GRPO](https://arxiv.org/abs/2503.20783) (Distributionally Robust
          GRPO)
-   **[Agentic RL](https://tunix.readthedocs.io/en/latest/agentic_rl.html)**:
    -   Multi-turn tool use
    -   Asynchronous rollout for high-throughput trajectory collection
    -   Trajectory batching and grouping

## News

-   [2026/04] Gemma4 models are supported in Tunix! Stay tuned for upcoming training recipes.
-   [2026/01] Tunix model now supports efficient kernel execution ([splash attn](https://github.com/google/tunix/blob/main/tunix/models/qwen3/model.py#L150-L151), [GMM MoE](https://github.com/google/tunix/blob/main/tunix/models/qwen3/model.py#L638)).
-   [2025/12] [Agentic RL Training](https://github.com/google/tunix/tree/main/tunix/rl/agentic) has been released, with efficient support of multi-turn agent-env interaction, tool usage, async rollout, etc.

## Framework & Infra Highlights
-   **Modularity**:
    -   Components are designed to be reusable and composable
    -   Easy to customize and extend
-   **Performance & Efficiency**:
    -   Native [vLLM](https://tunix.readthedocs.io/en/latest/rollout.html#vllm) and
        [SGLang-JAX](https://tunix.readthedocs.io/en/latest/rollout.html#sglang) on TPU integration for performant
        rollout
    -   Native [MaxText](https://github.com/AI-Hypercomputer/maxtext) model
        integration for high performance kernels and model execution
    -   [Micro-batching](https://tunix.readthedocs.io/en/latest/performance.html#batching-config) support for component
        level efficient execution
-   **Stability**
    -   Seamless multi-host distributed training with Pathways which can scale
        up to thousands of devices
    -   [Checkpointing and Fault Tolerance](https://tunix.readthedocs.io/en/latest/reliability.html)

## Getting Started
**Installation:** Jump to [Installation](https://tunix.readthedocs.io/en/latest/quickstart.html#installation) to install Tunix and run your first training
job.

For TPU users integrating `vllm` and `tpu-inference`, there are two supported
setup paths:

- Docker image builds use [Dockerfile](/usr/local/google/home/lancewang/github/tunix/Dockerfile) and install
    the pinned dependencies directly from `requirements/requirements.txt` and
    `requirements/special_requirements.txt`.
- Local TPU VM or developer-machine installs can use
    [scripts/install_tunix_vllm_requirement.sh](/usr/local/google/home/lancewang/github/tunix/scripts/install_tunix_vllm_requirement.sh),
    which installs the same requirement files outside Docker.

These are separate entry points. If you are building the Docker image, you do
not need to run the install script inside the container build.

**Examples:** To get started, we have a number of detailed examples and tutorials. You can see [Quick Start](https://tunix.readthedocs.io/en/latest/quickstart.html) for a great set of starting examples and [Examples and Guides](https://tunix.readthedocs.io/en/latest/examples.html) for a comprehensive list of all the notebooks and examples we have.


## Supported Models
Tunix supports a growing list of models including Gemma, Llama, and Qwen families.
See [Models](https://tunix.readthedocs.io/en/latest/models.html) for a full list and details on how to add new ones.


## Contributing and Feedback
We welcome contributions! As Tunix is in early development, the contribution
process is still being formalized. The detailed contribution process is outlined
[here](https://tunix.readthedocs.io/en/latest/contributing.html). In
the meantime, you can make feature requests, report issues and ask questions in
our
[Tunix GitHub discussion forum](https://github.com/google/tunix/discussions).

## Collaborations and Partnership
[GRL](https://github.com/lmgame-org/GRL/blob/tunix_integration_dev/README.md)
(Game Reinforcement Learning), developed by
[Hao AI Lab](https://hao-ai-lab.github.io/) from UCSD, is an open-source
framework for post-training large language models through multi-turn RL on
challenging games. In collaboration with Tunix, GRL integrates seamless TPU
support—letting users quickly run scalable, reproducible RL experiments (like
PPO rollouts on Qwen2.5-0.5B-Instruct) on TPU v4 meshes with
[minimal setup](https://github.com/lmgame-org/GRL/blob/tunix_integration_dev/README.md#5-launch-the-quick-test-defaults-to-qwen2505b-supports-4-tpu-v4-with-mesh-22).
This partnership empowers the community to push LLM capabilities further,
combining Tunix’s optimized TPU runtime with GRL’s flexible game RL pipeline for
cutting-edge research and easy reproducibility.

## Citing Tunix
```bibtex
@misc{tunix2025,
  title={Tunix (Tune-in-JAX)},
  author={Bao, Tianshu and Carpenter, Jeff and Chai, Lin and Gao, Haoyu and Jiang, Yangmu and Noghabi, Shadi and Sharma, Abheesht and Tan, Sizhi and Wang, Lance and Yan, Ann and Yu, Weiren and others},
  year={2025},
  howpublished={\url{https://github.com/google/tunix}},
}
```

## Acknowledgements

Thank you to all our wonderful contributors!

[![Contributors](https://contrib.rocks/image?repo=google/tunix)](https://github.com/google/tunix/graphs/contributors)

