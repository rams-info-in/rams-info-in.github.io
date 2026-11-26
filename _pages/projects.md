---
layout: portfolio
title: "Research | Abhiram S"
description: "Selected bioinformatics and computational biology projects by Abhiram S."
permalink: /projects/
---

<div class="projects-page">
  <header class="page-intro">
    <p class="eyebrow"><span class="tiny-index">FIELD NOTES / 02</span></p>
    <h1>Research, in progress.</h1>
    <p>Short notes on questions I’ve explored across images, genomes, proteins, and computational discovery. I’ll add methods and figures as each project develops.</p>
  </header>

  <div class="filter-row" role="group" aria-label="Filter projects by area">
    <button type="button" class="filter-button is-active" data-project-filter="all" aria-pressed="true">All work</button>
    <button type="button" class="filter-button" data-project-filter="imaging" aria-pressed="false">Imaging</button>
    <button type="button" class="filter-button" data-project-filter="neuro" aria-pressed="false">Neuroscience</button>
    <button type="button" class="filter-button" data-project-filter="protein" aria-pressed="false">Proteins</button>
    <button type="button" class="filter-button" data-project-filter="genomics" aria-pressed="false">Genomics</button>
    <button type="button" class="filter-button" data-project-filter="network" aria-pressed="false">Networks</button>
    <button type="button" class="filter-button" data-project-filter="discovery" aria-pressed="false">Discovery</button>
  </div>

  <p class="filter-count" aria-live="polite"><span id="project-count">{{ site.data.projects | size }}</span> research notes</p>

  <div class="project-list">
    {% for project in site.data.projects %}
    <article class="project-row" id="{{ project.id | escape }}" data-project-card data-category="{{ project.filter | escape }}">
      <span class="project-number">{{ forloop.index | prepend: '0' }}</span>
      <div class="project-body">
        <p class="eyebrow project-category">{{ project.category | escape }}</p>
        <h2>{{ project.title | escape }}</h2>
        <p class="project-summary">{{ project.summary | escape }}</p>
      </div>
      <div class="project-action">
        {% if project.status %}<span class="project-status">{{ project.status | escape }}</span>{% endif %}
        <button class="round-link project-open"
                type="button"
                data-open-dialog
                data-dialog-kicker="{{ project.category | escape }}"
                data-dialog-title="{{ project.title | escape }}"
                data-dialog-copy="{{ project.summary | escape }}"
                data-dialog-href="{{ '/projects/' | relative_url }}#{{ project.id | escape }}"
                aria-label="Open project note: {{ project.title | escape }}">↗</button>
      </div>
    </article>
    {% endfor %}
  </div>

  <p class="empty-state" hidden>No projects in this area yet.</p>
</div>