import React from 'react'
import './footer.css'

function ModalMentions(props) {
    return (
        <div>

            <p className="text-white d-inline-block" style={{cursor: 'pointer'}} data-toggle="modal" data-target="#exampleModalLong">
                <em>Mentions Légales</em>
            </p>

            <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam labore porro voluptas excepturi harum doloremque nemo magnam suscipit tempora, nisi corporis, eius aperiam blanditiis non recusandae. Provident, a! Sequi, laborum?
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default function Footer() {
    return (
        <footer className="bg-dark mt-2">
            <div className="row">
                <div className="col-6 text-white text-center">
                    <div>Feel free to contact me by <strong>email</strong> or <strong>phone</strong> !</div>
                    <ul>
                        <li><strong>Email</strong> : hugo.d83@outlook.fr</li>
                        <li><strong>Phone</strong> : 0652037783</li>
                    </ul>
                </div>
                <div className="col-6 text-center">


                    <ModalMentions name="Mentions légales"/>


                </div>
            </div>
        </footer>
    )
}
