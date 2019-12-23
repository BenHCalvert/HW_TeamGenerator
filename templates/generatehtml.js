function generateHTML(managerArray, engineerArray, internArray) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>My Team</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="assets/css/style.css" type="text/css">
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="../assets/css/style.css">
    </head>
    <body>
    <body>
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <h1 class="display-4">engineers R us</h1>
            <p class="lead">view our team of talented engineers.</p>
        </div>
    </div>
    <div class="d-flex container">
        <div class="card p-1 mt-5 mx-auto shadow" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Managers</h5>
                <h6 class="card-subtitle mb-2 text-muted">Lead By Example</h6>
                <p class="card-text">Our Managers are dedicated to each and every employee.  Their focus is on empowering our Engineers and Interns to be successful in their job.</p>
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#managers">Manager List
                </button>
            </div>
        </div>
        <div class="card p-1 mt-5 mx-auto shadow" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Engineers</h5>
                <h6 class="card-subtitle mb-2 text-muted">Better Those Around You</h6>
                <p class="card-text">Our Engineers take pride in teaching interns and sharing knowledge.  We are successful as a team.</p><br>
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#engineer">Engineer List
                </button>
            </div>
        </div>
        <div class="card p-1 mt-5 mx-auto shadow" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Interns</h5>
                <h6 class="card-subtitle mb-2 text-muted">Embrace Hard Work</h6>
                <p class="card-text">Our Interns come in ready to learn with exceptional talent.</p><br><br><br>
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#intern">Intern List
                </button>
            </div>
        </div>
        <!-- Manager Modal -->
        <div class="modal fade" id="managers" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Managers</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                    ${managerArray.map(manager =>
                    `<ul>
                        <li><strong> ${manager.firstName} ${manager.lastName} </strong></li>
                        <li>Title: ${manager.role} </li>
                        <li>Employee ID: ${manager.employeeId}</li>
                        <li>Phone Number: ${manager.officeNumber}</li>
                        <li>Manages: ${manager.team}</li>
                    </ul>
                    `
                    ).join(' ')}
    <!-- The join <space> gets rid of the , from the array	-->
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
        <!--Engineer Modal-->
        <div class="modal fade" id="engineer" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Engineers</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                            ${engineerArray.map(engineer =>
                        `<ul>
                            <li><strong> ${engineer.firstName} ${engineer.lastName} </strong></li>
                            <li>Title: ${engineer.role} </li>
                            <li>Employee ID: ${engineer.employeeId}</li>
                            <li>GitHub Username: ${engineer.github}</li>
                        </ul>
                        `
                    ).join(' ')}
    <!-- The join <space> gets rid of the , from the array	-->
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
        <!--Intern Modal-->
        <div class="modal fade" id="intern" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Interns</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                                ${internArray.map(intern => 
                        `<ul>
                            <li><strong> ${intern.firstName} ${intern.lastName} </strong></li>
                            <li>Title: ${intern.role} </li>
                            <li>Employee ID: ${intern.employeeId}</li>
                            <li>School Attending: ${intern.school}</li>
                        </ul>
                        `
                    ).join(' ')}
    <!-- The join <space> gets rid of the , from the array	-->
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </body>
    </html>
    `
    }
    module.exports = generateHTML;