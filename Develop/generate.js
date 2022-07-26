function generate(response) {
    var content = `# ${response.title}
    ## ${response.shortdescription}
    ## ${response.creator}
    ## ${response.github}
    ## ${response.githublink}
    ## Project live link ${response.livelink}
    ## Project contributors ${response.contributors}
    Email Me: (${response.email}) 


    #### ReadMeGenerator© 2020 All Rights Reserved. 
     ${response.license}
    

    # Repository Description
    ${response.description}

    
    
    ### Contribution Guidelines
    ${response.contributors}
    
    
    ## Test Instructions
    1.  ${response.test1}
    2.  ${response.test2}
    3.  ${response.test3}
    
    
    ## User Story
    ${response.userstory}

    ## Criteria
    ${response.criteria}

    
    THANK YOU.`
    return content;
};

module.exports = generate;