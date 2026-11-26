---
title: "Projects"
permalink: /projects/
layout: single
classes: wide
author_profile: false
---

<div class="projects-page">
  <header class="projects-intro">
    <p class="eyebrow">Research and computational work</p>
    <h1>Projects</h1>
    <p>
      A collection of questions I’ve explored across biological imaging,
      genomics, protein informatics, and computational discovery. I’ll add
      methods, figures, and fuller write-ups as each project develops.
    </p>
  </header>

  <div class="project-grid">
    {% for project in site.data.projects %}
    <article class="project-card" id="{{ project.id | escape }}">
      <div class="project-card-top">
        <span class="project-index">PROJECT {{ forloop.index | prepend: '0' }}</span>
        {% if project.status %}
        <span class="project-status">{{ project.status | escape }}</span>
        {% endif %}
      </div>

      <p class="project-category">{{ project.category | escape }}</p>
      <h2>{{ project.title | escape }}</h2>
      <p class="project-summary">{{ project.summary | escape }}</p>
    </article>
    {% endfor %}
  </div>
</div>
