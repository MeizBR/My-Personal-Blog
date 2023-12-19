import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  projects = [
    {
      title: "Configuration and Testing of the Intrusion Detection System Snort (IDS)",
      activities: "Enumerate users via Kerberos, abuse Kerberos through brute-force attacks, elevate privileges within the domain.",
      tools: "Ubuntu, Linux, Snort, Legion"
    },
    {
      title: "TryHackMe Attacktive Directory Challenge (CTF)",
      activities: "Configure the operational rules of Snort on Ubuntu, then simulate an attack using Kali to evaluate its performance.",
      tools: "Enum4linux, Impacket, Kerbrute"
    },
    {
      title: "TryHackMe Anthem Challenge (CTF)",
      activities: "Identify web vulnerabilities, extract valuable information, access RDP, and master the art of finding hidden clues.",
      tools: "Nmap, WhatWeb, Xfreerdp"
    },
    {
      title: "Deployment of a web application with MongoDB",
      activities: "Deploy a web application with its database configuration in a Minikube cluster using YAML configurations files in an IaaC environment.",
      tools: "Kubernetes, Minikube, YAML, ConfigMap, Secret, Service"
    },
    {
      title: "Web Platform for the Management of University Clubs Training",
      activities: "This platform allows students to easily view club training and workshops, facilitating a flexible registration process and appropriate feedback collection.",
      tools: "React JS, Express JS, MongoDB, Git, Docker"
    }
  ]

  displayHidden(index: number): void {
    const hiddenContent = document.getElementsByClassName("hidden-content") as HTMLCollectionOf<HTMLElement>;
    
    // Toggle the visibility of the clicked element
    hiddenContent[index].style.display = (hiddenContent[index].style.display === 'none') ? 'block' : 'none';
  }
}
