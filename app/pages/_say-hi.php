<?php
/**
 * @author Bilal Cinarli
 * @link http://bcinarli.com
 **/
?>
<!-- say hi to me -->
<section id="say-hi" class="page-section">
    <article class="section-content content-holder">
        <h2 class="section-title"><i class="icon-chat"></i> Say Hi To Me</h2>
        <p>Do you need help? Tried to solve a front-end problem but not worked? Want to consult? Want to build a scalable, future proof web application? Or just chitchat :)</p>

        <div class="row">
            <div class="one-third column">
                <p>You can easily find me on social networks, or just leave a message.</p>

                <ol class="nav social-links">
                    <li><a href="https://github.com/bcinarli" target="_blank"><i class="icon-github"></i> Github</a></li>
                    <li><a href="https://twitter.com/bcinarli" target="_blank"><i class="icon-twitter"></i> Twitter</a></li>
                    <li><a href="https://www.linkedin.com/in/bcinarli" target="_blank"><i class="icon-linkedin"></i> Linkedin</a></li>
                </ol>
            </div>
            <div class="two-thirds column">
                <form id="hello" action="">
                    <ol class="form-elements">
                        <li class="group">
                            <label class="item item-field">
                                <span class="item-label">Name</span>
                                <input type="text" name="name" class="text-field" required />
                            </label>
                        </li>
                        <li class="group">
                            <label class="item item-field">
                                <span class="item-label">Email</span>
                                <input type="email" name="email" class="text-field" required />
                            </label>
                        </li>
                        <li class="group">
                            <label class="item item-field">
                                <span class="item-label">Subject</span>
                                <input type="text" name="subject" class="text-field" required />
                            </label>
                        </li>
                        <li class="group">
                            <label class="item item-field">
                                <span class="item-label">Your Message</span>
                                <textarea name="message" class="message-field" required></textarea>
                            </label>
                        </li>
                        <li class="group">
                            <label class="item item-field">
                                <span class="item-label">What is today?</span>
                                <input type="text" name="today" class="text-field" required />
                                <span class="item-hint"><?php echo date('l'); ?></span>
                            </label>
                        </li>
                        <li class="buttons group">
                            <button class="primary-action">Hello</button>
                        </li>
                    </ol>
                </form>
            </div>
        </div>
    </article>
</section>